import { useEffect, useRef } from 'react';
import { DAYS_OPTIONS, GOALS, Goal, INSTITUTIONS, LEVELS, RATING_TAGS, SUBJECTS, SessionMode, TUTORS } from './data';
import { analyze, assessProgress, horizonFor, makeRef, matchTutors, omr, price, recommendCourse, slotsFor, time12 } from './logic';
import { RifdStore, freshInstitute, freshSupport, log, txn } from './store';
import { Check, Seg, Stars, Steps } from './ui';

const STEP_NAMES = ['التشخيص', 'المطابقة', 'الحجز', 'الدفع', 'الجلسة', 'التقييم', 'الخطة'];
const URG = { high: ['p-hi', 'عاجل'], mid: ['p-md', 'متوسط الاستعجال'], low: ['p-lo', 'وقتك مريح'] } as const;
const modeText = (m: SessionMode) => (m === 'online' ? 'عن بُعد' : 'حضوري في الحرم');

export function Support({ store, scrollTop }: { store: RifdStore; scrollTop: () => void }) {
  const { state, update } = store;
  const s = state.support;
  const prevStep = useRef(s.step);
  useEffect(() => { if (prevStep.current !== s.step) { prevStep.current = s.step; scrollTop(); } }, [s.step, scrollTop]);
  const set = (fn: (d: typeof s) => void) => update((d) => fn(d.support));
  const tutor = TUTORS.find((t) => t.id === s.tutorId) ?? null;
  const booking = state.bookings.find((b) => b.ref === s.current) ?? null;
  const bookedKeys = state.bookings.filter((b) => b.status !== 'refunded').map((b) => b.slotKey);

  return (
    <>
      <Steps names={STEP_NAMES} step={s.step} />
      {s.step === 1 && Diagnose()}
      {s.step === 2 && s.diag && MatchView()}
      {s.step === 3 && tutor && s.diag && Book()}
      {s.step === 4 && tutor && s.diag && s.slot && Pay()}
      {s.step === 5 && booking && Session()}
      {s.step === 6 && booking && Rate()}
      {s.step === 7 && s.diag && Plan()}
    </>
  );

  /* ---------------- 1) diagnosis ---------------- */
  function Diagnose() {
    const topics = s.subject ? SUBJECTS[s.subject] : [];
    const next = () => update((d) => {
      const x = d.support;
      if (!x.subject || !x.topic || !x.level) { x.error = 'أكمل المادة والموضوع والمستوى للمتابعة.'; return; }
      x.error = '';
      x.diag = analyze({ topic: x.topic, level: x.level, days: x.days, goal: x.goal });
      x.tutorId = null; x.slot = null; x.sessionIndex = 1; x.remaining = x.diag.sessions - 1; x.current = null;
      log(d, 'needs', `حلّل الطلب: ${x.subject} ← ${x.topic} · المستوى «${x.diag.lvl}» · ${URG[x.diag.urgency][1]}.`);
      log(d, 'learning', `أعدّ خطة من ${x.diag.sessions} ${x.diag.sessions === 1 ? 'جلسة' : 'جلسات'} × ${x.diag.dur} دقيقة.`);
      const list = matchTutors({ subject: x.subject, topic: x.topic, mode: x.mode, uni: x.uni, days: x.days, booked: bookedKeys });
      if (list.length) log(d, 'matching', `رتّب ${list.length} ${list.length === 1 ? 'مدرسًا' : 'مدرسين'} — الأنسب: ${list[0].t.name} بتوافق ${list[0].score}%.`);
      x.step = 2;
    });
    return (
      <div className="rf-card">
        <h2>ما الذي تحتاج مساعدة فيه؟</h2>
        <p className="rf-sub">أجب عن أسئلة قصيرة، وسيحلّل وكيل الاحتياج وضعك ويقترح خطة.</p>
        <div className="rf-grid2">
          <div>
            <label className="rf-l" htmlFor="rf-uni">الجامعة / الكلية <span className="rf-note">(اختياري)</span></label>
            <select id="rf-uni" value={s.uni} onChange={(e) => set((x) => { x.uni = e.target.value; })}>
              <option value="">اختر جامعتك أو كليتك…</option>
              {Object.entries(INSTITUTIONS).map(([g, list]) => <optgroup key={g} label={g}>{list.map((u) => <option key={u} value={u}>{u}</option>)}</optgroup>)}
            </select>
          </div>
          <div>
            <label className="rf-l" htmlFor="rf-days">كم يومًا تبقى على الاختبار أو التسليم؟</label>
            <select id="rf-days" value={s.days} onChange={(e) => set((x) => { x.days = Number(e.target.value); })}>
              {DAYS_OPTIONS.map((d) => <option key={d} value={d}>{d === 1 ? 'غدًا' : d === 2 ? 'يومان' : `${d} أيام`}</option>)}
            </select>
          </div>
          <div>
            <label className="rf-l" htmlFor="rf-subject">المادة</label>
            <select id="rf-subject" value={s.subject} onChange={(e) => set((x) => { x.subject = e.target.value; x.topic = ''; x.error = ''; })}>
              <option value="">اختر المادة…</option>
              {Object.keys(SUBJECTS).map((k) => <option key={k} value={k}>{k}</option>)}
            </select>
          </div>
          <div>
            <label className="rf-l" htmlFor="rf-topic">الموضوع</label>
            <select id="rf-topic" value={s.topic} disabled={!s.subject} onChange={(e) => set((x) => { x.topic = e.target.value; x.error = ''; })}>
              <option value="">{s.subject ? 'اختر الموضوع…' : 'اختر المادة أولًا'}</option>
              {topics.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <label className="rf-l">مستواك الحالي في هذا الموضوع</label>
        <Seg label="المستوى" options={LEVELS.map(([v, t]) => [v, `${v} · ${t}`] as [number, string])} value={s.level} onChange={(v) => set((x) => { x.level = v; x.error = ''; })} />
        <div className="rf-grid2">
          <div>
            <label className="rf-l">هدفك من الجلسة</label>
            <Seg label="الهدف" options={Object.entries(GOALS) as [Goal, string][]} value={s.goal} onChange={(v) => set((x) => { x.goal = v; })} />
          </div>
          <div>
            <label className="rf-l">طريقة الجلسة</label>
            <Seg label="الطريقة" options={[['online', 'عن بُعد'], ['inperson', 'حضوري في الحرم']]} value={s.mode} onChange={(v) => set((x) => { x.mode = v; })} />
          </div>
        </div>
        <div className="rf-err" role="alert">{s.error}</div>
        <div className="rf-row" style={{ marginTop: 6 }}>
          <span className="rf-note">لا نطلب أي بيانات شخصية في هذه الخطوة.</span>
          <button className="rf-btn" id="rf-analyze" onClick={next}>تحليل احتياجي ←</button>
        </div>
      </div>
    );
  }

  /* ---------------- 2) matching ---------------- */
  function MatchView() {
    const d = s.diag!;
    const list = matchTutors({ subject: s.subject, topic: s.topic, mode: s.mode, uni: s.uni, days: s.days, booked: bookedKeys });
    const urg = URG[d.urgency];
    return (
      <>
        <div className="rf-diag">
          <h3>نتيجة التشخيص <span className="rf-pill p-ai" style={{ marginInlineStart: 6 }}>وكيل الاحتياج</span></h3>
          <div>{s.subject} ← <b>{s.topic}</b> · مستواك: {d.lvl} <span className={`rf-pill ${urg[0]}`}>{urg[1]}</span></div>
          <div className="rf-kpis">
            <div className="rf-kpi"><b>{d.sessions}</b>{d.sessions === 1 ? 'جلسة مقترحة' : 'جلسات مقترحة'}</div>
            <div className="rf-kpi"><b>{d.dur}</b>دقيقة لكل جلسة</div>
            <div className="rf-kpi"><b>{s.days === 1 ? 'غدًا' : s.days}</b>{s.days === 1 ? 'موعد الاختبار' : 'أيام متبقية'}</div>
          </div>
          <ul>{d.plan.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div className="rf-card">
          <h2>أفضل المدرسين لك</h2>
          <p className="rf-sub">رتّبهم وكيل المطابقة حسب التخصص والتقييم والتوفر والسعر.</p>
          {list.length ? list.map((m, i) => (
            <div key={m.t.id} className={`rf-item ${i === 0 ? 'best' : ''}`}>
              <div className="rf-av">{m.t.name[0]}</div>
              <div className="rf-grow">
                <h4>{m.t.name} {i === 0 && <span className="rf-pill p-lo">الأنسب</span>}</h4>
                <div className="rf-meta">{m.t.uni} · ★ {m.t.rating} ({m.t.n}) · {omr(m.t.rate)} / ساعة</div>
                <ul className="rf-why">{m.why.map((w) => <li key={w}>{w}</li>)}</ul>
                <div className="rf-row" style={{ marginTop: 10, justifyContent: 'flex-end' }}>
                  <button className="rf-btn sm" data-pick={m.t.id} disabled={!m.free || !m.modeOk}
                    onClick={() => set((x) => { x.tutorId = m.t.id; x.slot = null; x.step = 3; })}>
                    {!m.modeOk ? (s.mode === 'inperson' ? 'متاح عن بُعد فقط' : 'حضوري فقط') : m.free ? 'اختيار وحجز موعد' : 'لا مواعيد متاحة'}
                  </button>
                </div>
              </div>
              <div className="rf-score">{m.score}%<small>توافق</small></div>
            </div>
          )) : <p className="rf-empty">لا يوجد مدرسون لهذه المادة بعد. جرّب مادة أخرى.</p>}
          {list.length > 0 && !list.some((m) => m.free && m.modeOk) && (
            <p className="rf-err">لا يوجد مدرس متاح بهذه الطريقة قبل موعدك.{s.mode === 'inperson' && <> <button className="rf-btn sm ghost" onClick={() => set((x) => { x.mode = 'online'; })}>جرّب «عن بُعد»</button></>}</p>
          )}
          <div className="rf-row"><button className="rf-btn ghost" onClick={() => set((x) => { x.step = 1; })}>→ تعديل إجاباتي</button></div>
        </div>
      </>
    );
  }

  /* ---------------- 3) booking ---------------- */
  function Book() {
    const t = tutor!;
    const days = slotsFor(t, horizonFor(s.days), bookedKeys);
    const free = days.some((d) => d.times.some((x) => !x.taken));
    return (
      <div className="rf-card">
        <h2>احجز {s.sessionIndex > 1 ? `الجلسة ${s.sessionIndex}` : 'موعدك'} مع {t.name}</h2>
        <p className="rf-sub">المواعيد المتاحة قبل موعد اختبارك فقط · {s.diag!.dur} دقيقة · {modeText(s.mode)}.</p>
        {free ? (
          <div className="rf-days">
            {days.map((d) => (
              <div className="rf-day" key={d.key}>
                <b>{d.label}</b>
                <div className="rf-slots">
                  {d.times.map((x) => (
                    <button key={x.key} className={`rf-slot ${s.slot?.key === x.key ? 'sel' : ''}`} disabled={x.taken} aria-pressed={s.slot?.key === x.key}
                      onClick={() => set((y) => { y.slot = { key: x.key, label: d.label, time: x.time }; })}>{time12(x.time)}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : <p className="rf-empty">لا توجد مواعيد متاحة لهذا المدرس قبل موعدك. ارجع واختر مدرسًا آخر.</p>}
        <div className="rf-row">
          <button className="rf-btn ghost" onClick={() => set((x) => { x.step = s.sessionIndex > 1 ? 7 : 2; })}>{s.sessionIndex > 1 ? '→ العودة للخطة' : '→ العودة للمدرسين'}</button>
          <button className="rf-btn" id="rf-to-pay" disabled={!s.slot} onClick={() => set((x) => { x.step = 4; x.consent = false; x.error = ''; })}>متابعة للدفع ←</button>
        </div>
      </div>
    );
  }

  /* ---------------- 4) payment (simulated escrow) ---------------- */
  function Pay() {
    const t = tutor!; const p = price(t.rate, s.diag!.dur);
    const pay = () => update((d) => {
      const x = d.support;
      if (!x.consent) { x.error = 'الموافقة الصريحة مطلوبة لإتمام الحجز.'; return; }
      if (x.method === 'wallet' && d.balance < p.total) { x.error = 'رصيد المحفظة التجريبية غير كافٍ — اختر بطاقة الجامعة.'; return; }
      const ref = makeRef('RFD', Date.now() + d.seq);
      d.bookings.unshift({
        ref, tutorId: t.id, tutor: t.name, subject: x.subject, topic: x.topic, when: `${x.slot!.label} · ${time12(x.slot!.time)}`, slotKey: x.slot!.key,
        dur: x.diag!.dur, mode: x.mode, total: p.total, fee: p.fee, tutorShare: p.tutor, method: x.method, status: 'held', index: x.sessionIndex,
      });
      if (x.method === 'wallet') txn(d, `حجز جلسة ${ref} (محتجز)`, -p.total);
      log(d, 'execution', `حجز موعد ${time12(x.slot!.time)} مع ${t.name} واحتجز ${omr(p.total)} حتى تنفيذ الجلسة.`, true);
      x.current = ref; x.error = ''; x.sessionStarted = false; x.checks = [false, false, false]; x.step = 5;
    });
    return (
      <div className="rf-card">
        <h2>مراجعة الحجز والدفع</h2>
        <p className="rf-sub">تدفع الآن <b>الجلسة {s.sessionIndex} فقط</b>{s.remaining > 0 ? ` — الجلسات المتبقية (${s.remaining}) تُحجز بعد رضاك عن هذه.` : '.'}</p>
        <table className="rf-sum"><tbody>
          <tr><td>المدرس</td><td>{t.name}</td></tr>
          <tr><td>الموضوع</td><td>{s.topic}</td></tr>
          <tr><td>الموعد</td><td>{s.slot!.label} · {time12(s.slot!.time)}</td></tr>
          <tr><td>المدة والطريقة</td><td>{s.diag!.dur} دقيقة · {modeText(s.mode)}</td></tr>
          <tr><td>حصة المدرس</td><td>{omr(p.tutor)}</td></tr>
          <tr><td>عمولة المنصة (15%)</td><td>{omr(p.fee)}</td></tr>
          <tr className="tot"><td>الإجمالي</td><td>{omr(p.total)}</td></tr>
        </tbody></table>
        <p className="rf-note" style={{ marginTop: 6 }}>السعر شفاف بلا رسوم إضافية. يُحتجز المبلغ ولا يُحوَّل للمدرس إلا بعد تأكيد تنفيذ الجلسة.</p>
        <label className="rf-l">وسيلة الدفع (محاكاة)</label>
        <Seg label="وسيلة الدفع" options={[['wallet', `محفظة رِفد · ${omr(state.balance)}`], ['campus', 'بطاقة الجامعة (تجريبي)']]} value={s.method} onChange={(v) => set((x) => { x.method = v; x.error = ''; })} />
        <Check id="rf-consent" checked={s.consent} onChange={(v) => set((x) => { x.consent = v; x.error = ''; })}>
          أوافق صراحةً على الحجز والدفع، وأتعهد باستخدام الدعم للفهم والتعلّم فقط، وليس لأداء واجباتي أو اختباراتي نيابةً عني.
        </Check>
        <div className="rf-err" role="alert">{s.error}</div>
        <div className="rf-row" style={{ marginTop: 6 }}>
          <button className="rf-btn ghost" onClick={() => set((x) => { x.step = 3; x.error = ''; })}>→ تغيير الموعد</button>
          <button className="rf-btn" id="rf-pay" onClick={pay}>تأكيد الدفع (تجريبي) · {omr(p.total)}</button>
        </div>
        <p className="rf-note" style={{ marginTop: 10 }}>لا تُدخل أي بيانات بطاقة حقيقية — هذه الشاشة محاكاة للعرض.</p>
      </div>
    );
  }

  /* ---------------- 5) session ---------------- */
  function Session() {
    const b = booking!;
    const item = s.diag?.plan[Math.min(s.sessionIndex, s.diag.plan.length) - 1] ?? `شرح «${b.topic}»`;
    const checkNames = [item.replace(/^جلسة \d+: /, 'تغطية: '), 'حلّ تمارين تطبيقية معًا', 'مشاركة ملخص الجلسة مع الطالب'];
    const allDone = s.sessionStarted && s.checks.length === 3 && s.checks.every(Boolean);
    const confirm = () => update((d) => {
      const x = d.support; const bk = d.bookings.find((k) => k.ref === x.current)!;
      if (!(x.sessionStarted && x.checks.every(Boolean))) return;
      bk.status = 'released';
      log(d, 'verification', `تحقّق من إتمام الجلسة ${bk.ref}: 3/3 بنود موثّقة وتأكيد الطالب.`, true);
      log(d, 'execution', `حرّر ${omr(bk.tutorShare)} لـ${bk.tutor} واحتفظت المنصة بعمولة ${omr(bk.fee)}.`);
      x.rating = 0; x.tags = []; x.postLevel = 0; x.step = 6;
    });
    const refund = () => update((d) => {
      const x = d.support; const bk = d.bookings.find((k) => k.ref === x.current)!;
      bk.status = 'refunded';
      if (bk.method === 'wallet') txn(d, `استرداد ${bk.ref}`, bk.total);
      log(d, 'verification', `لم تتم الجلسة ${bk.ref} — أُعيد المبلغ كاملًا (${omr(bk.total)}) وحُرّر الموعد.`, true);
      x.current = null; x.slot = null; x.step = 3; x.sessionStarted = false;
    });
    return (
      <>
        <div className="rf-card rf-ok">
          <div className="big">✅</div>
          <h2>تم تأكيد الحجز (تجريبي)</h2>
          <p style={{ margin: '6px 0' }}>رقم الحجز <span className="rf-ref">{b.ref}</span></p>
          <p className="rf-meta">{b.tutor} · {b.topic} · {b.when} · المبلغ المحتجز {omr(b.total)}</p>
        </div>
        <div className="rf-room">
          <div className="rf-row" style={{ marginTop: 0 }}>
            <h3 style={{ margin: 0, color: '#fff' }}>غرفة الجلسة {s.sessionIndex} · {modeText(b.mode)}</h3>
            {s.sessionStarted ? <span className="rf-live"><i />الجلسة جارية (محاكاة)</span> : <span className="rf-note" style={{ color: '#9fc6d6' }}>تذكير أُرسل للطرفين قبل الموعد</span>}
          </div>
          {!s.sessionStarted ? (
            <div className="rf-row">
              <button className="rf-btn danger" style={{ borderColor: 'rgba(255,255,255,.25)', color: '#ffc9c9' }} onClick={refund}>لم تتم الجلسة — استرداد المبلغ</button>
              <button className="rf-btn" id="rf-start" onClick={() => set((x) => { x.sessionStarted = true; })}>بدء الجلسة (محاكاة) ←</button>
            </div>
          ) : (
            <>
              <p className="rf-note" style={{ color: '#b8d3de', marginTop: 8 }}>بنود الجلسة — يؤكدها المدرس وتُحفظ كدليل إتمام:</p>
              {checkNames.map((c, i) => (
                <Check key={c} id={`rf-chk-${i}`} checked={!!s.checks[i]} onChange={(v) => set((x) => { x.checks[i] = v; })}>{c}</Check>
              ))}
              <p className="rf-note" style={{ color: '#9fc6d6', marginTop: 10 }}>رِفد يدعم الفهم والتعلّم — لا يُنجز الواجبات أو الاختبارات المقيّمة.</p>
              <div className="rf-row">
                <span className="rf-note" style={{ color: '#9fc6d6' }}>{s.checks.filter(Boolean).length}/3 بنود</span>
                <button className="rf-btn" id="rf-finish" disabled={!allDone} onClick={confirm}>تأكيد إتمام الجلسة ←</button>
              </div>
            </>
          )}
        </div>
      </>
    );
  }

  /* ---------------- 6) rating + progress check ---------------- */
  function Rate() {
    const b = booking!;
    const submit = () => update((d) => {
      const x = d.support;
      if (!x.rating || !x.postLevel) { x.error = 'اختر التقييم ومستواك بعد الجلسة.'; return; }
      x.error = '';
      x.quality = assessProgress(x.level, x.postLevel, x.remaining);
      x.remaining = x.quality.remaining;
      log(d, 'verification', `قاس التقدّم: المستوى من ${x.level} إلى ${x.postLevel} (${x.quality.improvement >= 0 ? '+' : ''}${x.quality.improvement}). ${x.quality.note}`);
      const c = recommendCourse(x.subject, x.topic);
      if (x.quality.suggestCourse && c) log(d, 'learning', `رشّح دورة «${c.title}» من المعهد الرقمي لتثبيت الموضوع.`);
      if (x.rating >= 4) log(d, 'opportunity', `أضاف تقييم ${x.rating}/5 إلى سجل خبرة ${b.tutor} الموثّق.`);
      x.step = 7;
    });
    return (
      <div className="rf-card">
        <h2>كيف كانت الجلسة مع {b.tutor}؟</h2>
        <p className="rf-sub">تقييمك يحسّن المطابقة القادمة، ويقيس وكيل التحقق تقدّمك الفعلي.</p>
        <label className="rf-l">التقييم</label>
        <Stars value={s.rating} onPick={(v) => set((x) => { x.rating = v; x.error = ''; })} />
        <label className="rf-l">ما الذي أعجبك؟ <span className="rf-note">(اختياري)</span></label>
        <div className="rf-chips">
          {RATING_TAGS.map((t) => (
            <button key={t} type="button" aria-pressed={s.tags.includes(t)} className={s.tags.includes(t) ? 'sel' : ''}
              onClick={() => set((x) => { x.tags = x.tags.includes(t) ? x.tags.filter((y) => y !== t) : [...x.tags, t]; })}>{t}</button>
          ))}
        </div>
        <label className="rf-l">مستواك الآن في «{b.topic}» (كان {s.level})</label>
        <Seg label="المستوى بعد الجلسة" options={LEVELS.map(([v, t]) => [v, `${v} · ${t}`] as [number, string])} value={s.postLevel} onChange={(v) => set((x) => { x.postLevel = v; x.error = ''; })} />
        <div className="rf-err" role="alert">{s.error}</div>
        <div className="rf-row" style={{ marginTop: 6, justifyContent: 'flex-end' }}>
          <button className="rf-btn" id="rf-rate" onClick={submit}>إرسال التقييم ←</button>
        </div>
      </div>
    );
  }

  /* ---------------- 7) plan / next steps ---------------- */
  function Plan() {
    const q = s.quality; const d = s.diag!;
    const done = state.bookings.filter((b) => b.status === 'released' && b.subject === s.subject && b.topic === s.topic).length;
    const course = recommendCourse(s.subject, s.topic);
    const hasCert = course && state.certs.some((c) => c.courseId === course.id);
    const nextSession = () => update((dd) => {
      const x = dd.support;
      x.sessionIndex += 1; x.remaining = Math.max(0, x.remaining - 1);
      x.level = x.postLevel || x.level; x.slot = null; x.consent = false; x.current = null;
      x.sessionStarted = false; x.checks = []; x.rating = 0; x.tags = []; x.postLevel = 0; x.quality = null; x.step = 3;
      log(dd, 'execution', `بدأ حجز الجلسة ${x.sessionIndex} مع نفس المدرس.`);
    });
    const openCourse = () => update((dd) => {
      if (!course) return;
      dd.institute = { ...freshInstitute(), courseId: course.id, step: 2 };
      dd.module = 'institute';
    });
    const newRequest = () => update((dd) => { const uni = dd.support.uni; dd.support = { ...freshSupport(), uni }; });
    return (
      <>
        <div className="rf-diag">
          <h3>خطتك وتقدّمك <span className="rf-pill p-ai" style={{ marginInlineStart: 6 }}>وكيل التحقق</span></h3>
          <div className="rf-kpis">
            <div className="rf-kpi"><b>{done}</b>جلسات مكتملة</div>
            <div className="rf-kpi"><b>{s.remaining}</b>جلسات متبقية</div>
            <div className="rf-kpi"><b>{q ? `${q.improvement >= 0 ? '+' : ''}${q.improvement}` : '—'}</b>تغيّر المستوى</div>
          </div>
          {q && <p>{q.note}</p>}
          <ul>{d.plan.slice(s.sessionIndex, s.sessionIndex + s.remaining).map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div className="rf-card">
          <h2>الخطوة التالية</h2>
          <p className="rf-sub">اختر كيف تكمل — كل خيار ينسّقه الوكيل المناسب.</p>
          {s.remaining > 0 && (
            <div className="rf-item best">
              <div className="rf-av">📅</div>
              <div className="rf-grow"><h4>الجلسة {s.sessionIndex + 1} مع {tutor?.name}</h4><div className="rf-meta">{d.plan[s.sessionIndex] ?? 'متابعة الخطة'}</div></div>
              <button className="rf-btn sm" id="rf-next-session" onClick={nextSession}>احجز الآن</button>
            </div>
          )}
          {course && (
            <div className="rf-item">
              <div className="rf-av">🎓</div>
              <div className="rf-grow">
                <h4>{course.title} {q?.suggestCourse && <span className="rf-pill p-ai">مُرشّحة لك</span>}</h4>
                <div className="rf-meta">المعهد الرقمي · {course.hours} ساعات · {omr(course.price)} · {course.trainer}</div>
              </div>
              <button className="rf-btn sm ghost" onClick={openCourse}>{hasCert ? 'لديك الشهادة' : 'عرض الدورة'}</button>
            </div>
          )}
          <div className="rf-row"><button className="rf-btn ghost" id="rf-new" onClick={newRequest}>طلب دعم جديد</button>
            <span className="rf-note">سجل حجوزاتك في «حسابي».</span></div>
        </div>
      </>
    );
  }
}
