import { useEffect, useRef } from 'react';
import { COURSES } from './data';
import { gradeQuiz, makeRef, omr, recommendCourse } from './logic';
import { RifdStore, freshInstitute, freshMarket, log, txn } from './store';
import { Check, Steps } from './ui';

const STEP_NAMES = ['الدورات', 'التسجيل', 'الدروس', 'الاختبار', 'الشهادة'];

export function Institute({ store, scrollTop }: { store: RifdStore; scrollTop: () => void }) {
  const { state, update } = store;
  const s = state.institute;
  const prevStep = useRef(s.step);
  useEffect(() => { if (prevStep.current !== s.step) { prevStep.current = s.step; scrollTop(); } }, [s.step, scrollTop]);
  const course = COURSES.find((c) => c.id === s.courseId) ?? null;
  const rec = recommendCourse(state.support.subject || undefined, state.support.topic || undefined);
  const set = (fn: (d: typeof s) => void) => update((d) => fn(d.institute));

  return (
    <>
      <Steps names={STEP_NAMES} step={s.step} />
      {s.step === 1 && Catalog()}
      {s.step === 2 && course && Enroll()}
      {s.step === 3 && course && Learn()}
      {s.step === 4 && course && Quiz()}
      {s.step === 5 && course && Certificate()}
    </>
  );

  function Catalog() {
    const ordered = rec ? [rec, ...COURSES.filter((c) => c.id !== rec.id)] : COURSES;
    return (
      <div className="rf-card">
        <h2>المعهد الرقمي</h2>
        <p className="rf-sub">دورات قصيرة يقدّمها طلبة متمكّنون، تنتهي بشهادة موثّقة تفتح لك فرصًا في السوق المصغر.</p>
        {ordered.map((c) => {
          const owned = state.certs.some((x) => x.courseId === c.id);
          const isRec = rec?.id === c.id;
          return (
            <div key={c.id} className={`rf-item ${isRec ? 'best' : ''}`}>
              <div className="rf-av">🎓</div>
              <div className="rf-grow">
                <h4>{c.title} {isRec && <span className="rf-pill p-ai">رشّحها وكيل التعلّم</span>} {owned && <span className="rf-pill p-lo">مكتملة</span>}</h4>
                <div className="rf-meta">{c.trainer} · {c.trainerNote} · {c.hours} ساعات · ★ {c.rating}</div>
                <div className="rf-meta">مهارة: {c.skill}{isRec && state.support.topic ? ` · مرتبطة بطلبك في «${state.support.topic}»` : ''}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="rf-score" style={{ fontSize: '1.05rem' }}>{omr(c.price)}</div>
                <button className="rf-btn sm" data-course={c.id} style={{ marginTop: 6 }}
                  onClick={() => update((d) => { d.institute = { ...freshInstitute(), courseId: c.id, step: owned ? 5 : 2 }; })}>{owned ? 'الشهادة' : 'التفاصيل'}</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function Enroll() {
    const c = course!;
    const enroll = () => update((d) => {
      const x = d.institute;
      if (!x.consent) return;
      if (d.balance < c.price) return;
      txn(d, `تسجيل في «${c.title}»`, -c.price);
      log(d, 'execution', `سجّل الطالب في «${c.title}» ودُفع ${omr(c.price)} من المحفظة.`, true);
      x.step = 3; x.lessons = 0;
    });
    const short = state.balance < c.price;
    return (
      <div className="rf-card">
        <h2>{c.title}</h2>
        <p className="rf-sub">{c.trainer} · {c.trainerNote} · {c.hours} ساعات · ★ {c.rating}</p>
        <h3>ماذا ستتعلم</h3>
        {c.lessons.map((l, i) => <div key={l} className="rf-lesson"><span className="rf-dot">{i + 1}</span>{l}</div>)}
        <p className="rf-note">التقييم: اختبار قصير من {c.quiz.length} أسئلة — النجاح يمنحك شهادة موثّقة في مهارة «{c.skill}».</p>
        <table className="rf-sum" style={{ marginTop: 10 }}><tbody>
          <tr><td>رسوم الدورة</td><td>{omr(c.price)}</td></tr>
          <tr><td>رصيد المحفظة (تجريبي)</td><td>{omr(state.balance)}</td></tr>
        </tbody></table>
        <Check id="rf-enroll-consent" checked={s.consent} onChange={(v) => set((x) => { x.consent = v; })}>
          أوافق على التسجيل والدفع (محاكاة)، وأتعهد بأن تكون إجابات الاختبار من جهدي الشخصي.
        </Check>
        {short && <div className="rf-err">رصيد المحفظة التجريبية غير كافٍ.</div>}
        <div className="rf-row">
          <button className="rf-btn ghost" onClick={() => set((x) => { x.step = 1; })}>→ كل الدورات</button>
          <button className="rf-btn" id="rf-enroll" disabled={!s.consent || short} onClick={enroll}>تأكيد التسجيل · {omr(c.price)}</button>
        </div>
      </div>
    );
  }

  function Learn() {
    const c = course!; const n = s.lessons; const pct = Math.round((n / c.lessons.length) * 100);
    return (
      <div className="rf-card">
        <h2>{c.title}</h2>
        <div className="rf-row" style={{ marginTop: 4, marginBottom: 6 }}><span className="rf-note">التقدّم</span><b>{pct}%</b></div>
        <div className="rf-bar" style={{ marginBottom: 14 }}><i style={{ width: `${pct}%` }} /></div>
        {c.lessons.map((l, i) => {
          const done = i < n; const open = i === n;
          return (
            <div key={l} className={`rf-lesson ${done ? 'done' : ''} ${!done && !open ? 'locked' : ''}`}>
              <span className="rf-dot">{done ? '✓' : i + 1}</span>
              <span className="rf-grow">{l}<span className="rf-note"> · درس قصير + تمرين</span></span>
              {open && <button className="rf-btn sm" data-lesson={i} onClick={() => update((d) => {
                d.institute.lessons = i + 1;
                if (i + 1 === c.lessons.length) log(d, 'learning', `أكمل الطالب دروس «${c.title}» الأربعة — الاختبار متاح.`);
              })}>إكمال الدرس</button>}
              {!done && !open && <span className="rf-note">🔒</span>}
            </div>
          );
        })}
        <div className="rf-row">
          <span className="rf-note">الدروس تُفتح بالترتيب.</span>
          <button className="rf-btn" id="rf-to-quiz" disabled={n < c.lessons.length} onClick={() => set((x) => { x.step = 4; x.answers = c.quiz.map(() => null); x.lastScore = null; })}>بدء الاختبار ←</button>
        </div>
      </div>
    );
  }

  function Quiz() {
    const c = course!; const graded = s.lastScore !== null;
    const submit = () => update((d) => {
      const x = d.institute;
      if (x.answers.some((a) => a === null)) return;
      const g = gradeQuiz(c, x.answers);
      x.attempts += 1; x.lastScore = g.correct;
      log(d, 'verification', `صحّح الاختبار: ${g.correct}/${g.total} — ${g.passed ? 'ناجح، الشهادة جاهزة.' : 'لم يجتز بعد، يمكن الإعادة.'}`);
      if (g.passed) {
        const id = makeRef('CRT', Date.now() + d.seq);
        if (!d.certs.some((k) => k.courseId === c.id)) d.certs.unshift({ id, courseId: c.id, title: c.title, skill: c.skill, at: Date.now() });
        if (!d.market.skills.includes(c.skill)) d.market.skills = [...d.market.skills, c.skill];
        log(d, 'opportunity', `أضاف مهارة «${c.skill}» الموثّقة لملفك وفتح فرصًا مطابقة في السوق المصغر.`);
      }
    });
    const result = graded ? gradeQuiz(c, s.answers) : null;
    return (
      <div className="rf-card">
        <h2>اختبار «{c.title}»</h2>
        <p className="rf-sub">أجب عن الأسئلة — تحتاج {Math.ceil(c.quiz.length * 0.66)} إجابات صحيحة على الأقل.</p>
        {c.quiz.map((q, qi) => (
          <div key={q.q} className="rf-q">
            <b>{qi + 1}. {q.q}</b>
            <div className="rf-seg" role="radiogroup" aria-label={`السؤال ${qi + 1}`} style={{ marginTop: 6 }}>
              {q.options.map((o, oi) => {
                const picked = s.answers[qi] === oi;
                const cls = graded ? (oi === q.answer && picked ? 'right' : picked ? 'wrong' : '') : picked ? 'sel' : '';
                return <button key={o} type="button" role="radio" aria-checked={picked} className={cls} disabled={graded}
                  data-q={qi} data-o={oi} onClick={() => set((x) => { x.answers[qi] = oi; })}><span dir="auto">{o}</span></button>;
              })}
            </div>
          </div>
        ))}
        {result && (
          <div className={`rf-card`} style={{ background: result.passed ? '#effaf8' : '#fdf3f3', borderColor: result.passed ? '#bfe9e3' : '#f3c9c9', marginBottom: 0 }}>
            <b>{result.passed ? `ممتاز! ${result.correct}/${result.total} — اجتزت الاختبار.` : `النتيجة ${result.correct}/${result.total} — راجع الدروس وأعد المحاولة.`}</b>
          </div>
        )}
        <div className="rf-row">
          <button className="rf-btn ghost" onClick={() => set((x) => { x.step = 3; })}>→ الدروس</button>
          {!graded && <button className="rf-btn" id="rf-submit-quiz" disabled={s.answers.some((a) => a === null)} onClick={submit}>تسليم الإجابات</button>}
          {result && !result.passed && <button className="rf-btn" id="rf-retry" onClick={() => set((x) => { x.answers = c.quiz.map(() => null); x.lastScore = null; })}>إعادة المحاولة</button>}
          {result?.passed && <button className="rf-btn" id="rf-to-cert" onClick={() => set((x) => { x.step = 5; })}>عرض الشهادة ←</button>}
        </div>
      </div>
    );
  }

  function Certificate() {
    const c = course!; const cert = state.certs.find((x) => x.courseId === c.id);
    if (!cert) return <div className="rf-card"><p className="rf-empty">لا توجد شهادة لهذه الدورة بعد.</p></div>;
    const toMarket = () => update((d) => {
      d.market = { ...freshMarket(d.market.skills.includes(c.skill) ? d.market.skills : [...d.market.skills, c.skill]) };
      d.module = 'market';
    });
    return (
      <>
        <div className="rf-cert">
          <div className="rf-note">شهادة إتمام موثّقة · المعهد الرقمي — رِفد</div>
          <h2 style={{ margin: '8px 0' }}>{c.title}</h2>
          <p>مُنحت للطالب(ة) <b>سارة</b> بعد إكمال {c.lessons.length} دروس واجتياز الاختبار</p>
          <p className="rf-meta" style={{ marginTop: 6 }}>المدرب: {c.trainer} · مهارة موثّقة: {c.skill}</p>
          <p style={{ marginTop: 10 }}>رقم التحقق <span className="rf-ref">{cert.id}</span></p>
          <p className="rf-note" style={{ marginTop: 8 }}>شهادة تجريبية للعرض</p>
        </div>
        <div className="rf-card" style={{ marginTop: 14 }}>
          <h3>فرصة فُتحت لك <span className="rf-pill p-ai">وكيل الفرص</span></h3>
          <p className="rf-sub">مهارتك الموثّقة «{c.skill}» تطابق فرصًا في السوق المصغر الآن.</p>
          <div className="rf-row" style={{ marginTop: 0 }}>
            <button className="rf-btn ghost" onClick={() => set((x) => { x.step = 1; })}>→ دورات أخرى</button>
            <button className="rf-btn" id="rf-cert-market" onClick={toMarket}>استعرض الفرص ←</button>
          </div>
        </div>
      </>
    );
  }
}
