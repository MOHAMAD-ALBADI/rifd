import { useEffect, useRef } from 'react';
import { FEE, OPPORTUNITIES, SKILLS } from './data';
import { makeRef, omr, rankOpportunities } from './logic';
import { RifdStore, freshMarket, log, txn } from './store';
import { Check, Seg, Steps } from './ui';

const STEP_NAMES = ['الفرص', 'العرض', 'الاتفاق', 'التنفيذ', 'الاعتماد', 'الأرباح'];

export function Market({ store, scrollTop }: { store: RifdStore; scrollTop: () => void }) {
  const { state, update } = store;
  const s = state.market;
  const prevStep = useRef(s.step);
  useEffect(() => { if (prevStep.current !== s.step) { prevStep.current = s.step; scrollTop(); } }, [s.step, scrollTop]);
  const opp = OPPORTUNITIES.find((o) => o.id === s.oppId) ?? null;
  const certSkills = state.certs.map((c) => c.skill);
  const doneIds = state.portfolio.map((p) => p.id);
  const set = (fn: (d: typeof s) => void) => update((d) => fn(d.market));
  const openOpp = (id: string) => update((d) => {
    const o = OPPORTUNITIES.find((x) => x.id === id)!;
    d.market = { ...freshMarket(d.market.skills), oppId: id, offer: o.budget, offerDays: o.days, step: 2 };
  });

  return (
    <>
      <Steps names={STEP_NAMES} step={s.step} />
      {s.step === 1 && Browse()}
      {s.step === 2 && opp && Detail()}
      {s.step === 3 && opp && Agreement()}
      {s.step === 4 && opp && Delivery()}
      {s.step === 5 && opp && Approval()}
      {s.step === 6 && opp && Earnings()}
    </>
  );

  function Browse() {
    const list = rankOpportunities(s.skills, certSkills);
    return (
      <div className="rf-card">
        <h2>السوق المصغر</h2>
        <p className="rf-sub">حوّل مهارتك إلى دخل وخبرة موثّقة. اختر مهاراتك، ويرتّب وكيل الفرص الطلبات المناسبة لك.</p>
        <label className="rf-l">مهاراتي</label>
        <div className="rf-chips" style={{ marginBottom: 14 }}>
          {SKILLS.map((k) => (
            <button key={k} type="button" aria-pressed={s.skills.includes(k)} className={s.skills.includes(k) ? 'sel' : ''}
              onClick={() => set((x) => { x.skills = x.skills.includes(k) ? x.skills.filter((y) => y !== k) : [...x.skills, k]; })}>
              {k}{certSkills.includes(k) ? ' ✓' : ''}
            </button>
          ))}
        </div>
        {list.map(({ o, score, why }, i) => {
          const done = doneIds.includes(o.id);
          if (o.blocked) return (
            <div key={o.id} className="rf-item blocked">
              <div className="rf-av" style={{ background: '#b91c1c', color: '#fff' }}>⛔</div>
              <div className="rf-grow"><h4 style={{ textDecoration: 'line-through', color: '#8a5a5a' }}>{o.title}</h4>
                <div className="rf-meta" style={{ color: '#b91c1c' }}>{o.blocked}</div></div>
              <span className="rf-pill p-hi">وكيل الاحتياج</span>
            </div>
          );
          return (
            <div key={o.id} className={`rf-item ${i === 0 && !done ? 'best' : ''}`}>
              <div className="rf-av">{o.client[0]}</div>
              <div className="rf-grow">
                <h4>{o.title} {done && <span className="rf-pill p-lo">مكتملة</span>}</h4>
                <div className="rf-meta">{o.client} · {o.clientType} · {omr(o.budget)} · {o.days} أيام</div>
                {why.length > 0 && <ul className="rf-why">{why.map((w) => <li key={w}>{w}</li>)}</ul>}
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="rf-score">{score}%<small>توافق</small></div>
                <button className="rf-btn sm" data-opp={o.id} disabled={done} style={{ marginTop: 6 }} onClick={() => openOpp(o.id)}>{done ? 'منجزة' : 'التفاصيل'}</button>
              </div>
            </div>
          );
        })}
        <p className="rf-note">كل طلب يمرّ بفحص النزاهة: يُرفض تلقائيًا أي طلب لإنجاز عمل مقيّم نيابةً عن طالب.</p>
      </div>
    );
  }

  function Detail() {
    const o = opp!;
    const offers = Array.from(new Set([Math.round(o.budget * 0.8), Math.round(o.budget * 0.9), o.budget]));
    const dayOpts = Array.from(new Set([Math.max(1, o.days - 1), o.days]));
    const send = () => update((d) => {
      log(d, 'matching', `أرسل عرضك إلى ${o.client}: ${omr(d.market.offer)} خلال ${d.market.offerDays} أيام.`);
      log(d, 'execution', `قَبِل ${o.client} العرض (محاكاة) — أُعدّت مسودة الاتفاق.`);
      d.market.step = 3; d.market.consent = false;
    });
    return (
      <div className="rf-card">
        <h2>{o.title}</h2>
        <p className="rf-sub">{o.client} · {o.clientType} · الميزانية {omr(o.budget)} · المهلة {o.days} أيام</p>
        <p>{o.brief}</p>
        <h3 style={{ marginTop: 14 }}>المطلوب تسليمه</h3>
        <ul style={{ margin: 0, paddingInlineStart: 20 }}>{o.deliverables.map((x) => <li key={x}>{x}</li>)}</ul>
        <div className="rf-grid2">
          <div><label className="rf-l">سعر عرضك</label>
            <Seg label="سعر العرض" options={offers.map((v) => [v, omr(v)] as [number, string])} value={s.offer} onChange={(v) => set((x) => { x.offer = v; })} /></div>
          <div><label className="rf-l">مدة التنفيذ</label>
            <Seg label="المدة" options={dayOpts.map((v) => [v, `${v} ${v <= 2 ? (v === 1 ? 'يوم' : 'يومان') : 'أيام'}`] as [number, string])} value={s.offerDays} onChange={(v) => set((x) => { x.offerDays = v; })} /></div>
        </div>
        <p className="rf-note" style={{ marginTop: 8 }}>صافي ما تستلمه بعد عمولة المنصة (15%): <b>{omr(s.offer * (1 - FEE))}</b></p>
        <div className="rf-row">
          <button className="rf-btn ghost" onClick={() => set((x) => { x.step = 1; })}>→ كل الفرص</button>
          <button className="rf-btn" id="rf-send-offer" onClick={send}>إرسال العرض ←</button>
        </div>
      </div>
    );
  }

  function Agreement() {
    const o = opp!;
    const sign = () => update((d) => {
      if (!d.market.consent) return;
      const ref = makeRef('CTR', Date.now() + d.seq);
      d.market.contractRef = ref; d.market.step = 4;
      log(d, 'execution', `وُقّع الاتفاق ${ref} واحتُجز ${omr(d.market.offer)} من ${o.client} حتى الاعتماد.`, true);
    });
    return (
      <div className="rf-card">
        <h2>اتفاق التنفيذ</h2>
        <p className="rf-sub">قَبِل {o.client} عرضك (محاكاة). راجع الشروط قبل البدء.</p>
        <table className="rf-sum"><tbody>
          <tr><td>العمل</td><td>{o.title}</td></tr>
          <tr><td>العميل</td><td>{o.client}</td></tr>
          <tr><td>التسليمات</td><td>{o.deliverables.length} ملفات</td></tr>
          <tr><td>المهلة</td><td>{s.offerDays} أيام</td></tr>
          <tr><td>قيمة الاتفاق (محتجزة لدى رِفد)</td><td>{omr(s.offer)}</td></tr>
          <tr><td>عمولة المنصة (15%)</td><td>{omr(s.offer * FEE)}</td></tr>
          <tr className="tot"><td>صافي أرباحك</td><td>{omr(s.offer * (1 - FEE))}</td></tr>
        </tbody></table>
        <Check id="rf-agree" checked={s.consent} onChange={(v) => set((x) => { x.consent = v; })}>
          أقرّ بأن العمل من إنتاجي الأصلي، وليس عملًا مقيّمًا لمقرر دراسي، وأن حقوق الاستخدام تنتقل للعميل بعد الدفع.
        </Check>
        <div className="rf-row">
          <button className="rf-btn ghost" onClick={() => set((x) => { x.step = 2; })}>→ تعديل العرض</button>
          <button className="rf-btn" id="rf-sign" disabled={!s.consent} onClick={sign}>قبول وتوقيع الاتفاق</button>
        </div>
      </div>
    );
  }

  function Delivery() {
    const o = opp!;
    return (
      <div className="rf-card">
        <h2>التنفيذ والتسليم</h2>
        <p className="rf-sub">الاتفاق <span className="rf-ref" style={{ fontSize: '.8rem', padding: '1px 8px' }}>{s.contractRef}</span> · المهلة {s.offerDays} أيام · ينسّق وكيل التنفيذ المراحل والتذكيرات.</p>
        <div className="rf-mile">
          <span className="rf-dot" style={s.draft ? { background: '#1fc4b3', color: '#04302b' } : undefined}>{s.draft ? '✓' : 1}</span>
          <div className="rf-grow"><h4>المسودة الأولى</h4><div className="rf-meta">{s.draft ? 'draft_v1.pdf · تم الرفع' : 'ارفع نسخة أولية لمراجعة العميل'}</div></div>
          {!s.draft && <button className="rf-btn sm" id="rf-draft" onClick={() => update((d) => {
            d.market.draft = true;
            log(d, 'verification', 'استلم المسودة الأولى وتحقق من اكتمال الملفات.');
            d.market.feedback = true;
            log(d, 'execution', `وصلت ملاحظات ${o.client}: «ممتاز، نرجو استخدام لون النادي في العنوان».`);
          })}>رفع المسودة (محاكاة)</button>}
        </div>
        <div className="rf-mile" style={{ opacity: s.draft ? 1 : 0.5 }}>
          <span className="rf-dot" style={s.final ? { background: '#1fc4b3', color: '#04302b' } : undefined}>{s.final ? '✓' : 2}</span>
          <div className="rf-grow"><h4>ملاحظات العميل والنسخة النهائية</h4>
            <div className="rf-meta">{s.feedback ? '«ممتاز، نرجو استخدام لون النادي في العنوان» — ' + o.client : 'بانتظار المسودة'}</div>
            {s.final && <div className="rf-meta">final_v2 · {o.deliverables.length} ملفات · تم الرفع</div>}</div>
          {s.feedback && !s.final && <button className="rf-btn sm" id="rf-final" onClick={() => update((d) => {
            d.market.final = true;
            log(d, 'verification', `استلم النسخة النهائية (${o.deliverables.length}/${o.deliverables.length} تسليمات) ضمن المهلة.`);
          })}>تطبيق الملاحظات ورفع النهائي</button>}
        </div>
        <div className="rf-row">
          <span className="rf-note">لا يُحرَّر المبلغ إلا بعد اعتماد العميل.</span>
          <button className="rf-btn" id="rf-to-approval" disabled={!s.final} onClick={() => set((x) => { x.step = 5; })}>إرسال للاعتماد ←</button>
        </div>
      </div>
    );
  }

  function Approval() {
    const o = opp!;
    const approve = () => update((d) => {
      const m = d.market; if (m.approved) return;
      const net = Math.round(m.offer * (1 - FEE) * 1000) / 1000;
      m.approved = true; m.rating = 5;
      log(d, 'verification', `اعتمد ${o.client} العمل وقيّمه 5/5.`, true);
      txn(d, `أرباح «${o.title}»`, net);
      d.earnings = Math.round((d.earnings + net) * 1000) / 1000;
      d.portfolio.unshift({ id: o.id, title: o.title, client: o.client, amount: net, rating: 5, at: Date.now() });
      log(d, 'execution', `حرّر ${omr(net)} إلى محفظتك (بعد عمولة ${omr(m.offer * FEE)}).`);
      log(d, 'opportunity', 'أضاف المشروع إلى سجل خبرتك الموثّق ورشّح الفرصة التالية.');
      m.step = 6;
    });
    const checks = [`التسليمات مكتملة (${o.deliverables.length}/${o.deliverables.length})`, `ضمن المهلة (${s.offerDays} أيام)`, 'إقرار العمل الأصلي موقّع', 'لا يتضمن عملًا مقيّمًا لمقرر'];
    return (
      <div className="rf-card">
        <h2>المراجعة والاعتماد</h2>
        <p className="rf-sub">فحص وكيل التحقق قبل عرض العمل على العميل:</p>
        {checks.map((c) => <div key={c} className="rf-lesson done"><span className="rf-dot">✓</span>{c}</div>)}
        <div className="rf-row">
          <span className="rf-note">القرار النهائي للعميل — قرار بشري.</span>
          <button className="rf-btn" id="rf-approve" onClick={approve}>محاكاة: اعتماد العميل ←</button>
        </div>
      </div>
    );
  }

  function Earnings() {
    const o = opp!; const item = state.portfolio.find((p) => p.id === o.id);
    const nextOpp = rankOpportunities(s.skills, certSkills).find((x) => !x.o.blocked && x.o.id !== o.id && !doneIds.includes(x.o.id));
    return (
      <>
        <div className="rf-card rf-ok">
          <div className="big">💰</div>
          <h2>تم اعتماد عملك!</h2>
          <p style={{ margin: '6px 0' }}>أُضيف <b>{omr(item?.amount ?? 0)}</b> إلى محفظتك · تقييم العميل ★★★★★</p>
          <p className="rf-meta">«{o.title}» أصبح في سجل خبرتك الموثّق — يظهر في «حسابي».</p>
        </div>
        <div className="rf-card">
          <h3>الفرصة التالية <span className="rf-pill p-ai">وكيل الفرص</span></h3>
          {nextOpp ? (
            <div className="rf-item best" style={{ marginBottom: 0 }}>
              <div className="rf-av">{nextOpp.o.client[0]}</div>
              <div className="rf-grow"><h4>{nextOpp.o.title}</h4><div className="rf-meta">{nextOpp.o.client} · {omr(nextOpp.o.budget)} · توافق {nextOpp.score}%</div></div>
              <button className="rf-btn sm" id="rf-next-opp" onClick={() => openOpp(nextOpp.o.id)}>التفاصيل</button>
            </div>
          ) : <p className="rf-empty">أنجزت كل الفرص المتاحة حاليًا.</p>}
          <div className="rf-row"><button className="rf-btn ghost" onClick={() => set((x) => { x.step = 1; })}>→ كل الفرص</button></div>
        </div>
      </>
    );
  }
}
