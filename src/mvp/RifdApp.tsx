import { useCallback, useRef, useState } from 'react';
import './mvp.css';
import { omr } from './logic';
import { Module, RifdStore } from './store';
import { Support } from './Support';
import { Market } from './Market';
import { Institute } from './Institute';
import { AgentLog } from './ui';

const NAV: [Module, string][] = [['home', 'الرئيسية'], ['support', 'الدعم الأكاديمي'], ['market', 'السوق المصغر'], ['institute', 'المعهد الرقمي'], ['me', 'حسابي']];

/** The RIFD MVP. `embedded` = rendered inside the pitch deck (the deck shows the agent log beside it). */
export function RifdApp({ store, embedded = false }: { store: RifdStore; embedded?: boolean }) {
  const { state, update, reset } = store;
  const body = useRef<HTMLDivElement>(null);
  const [drawer, setDrawer] = useState(false);
  const scrollTop = useCallback(() => { body.current?.scrollTo({ top: 0 }); }, []);
  const go = (m: Module) => { update((d) => { d.module = m; }); scrollTop(); };

  return (
    <div className="rf" data-app>
      <header className="rf-head">
        <div className="rf-brand">رِفد <span>RIFD</span></div>
        <nav className="rf-nav" aria-label="أقسام التطبيق">
          {NAV.map(([k, t]) => <button key={k} data-nav={k} className={state.module === k ? 'on' : ''} aria-current={state.module === k ? 'page' : undefined} onClick={() => go(k)}>{t}</button>)}
        </nav>
        <button className="rf-wallet" onClick={() => go('me')} aria-label="المحفظة">المحفظة <b>{omr(state.balance)}</b></button>
      </header>
      <div className="rf-demo">نموذج أولي (MVP) للعرض: المستخدمون والمدرسون والفرص بيانات تجريبية، والدفع محاكاة ولا يُخصم أي مبلغ حقيقي.</div>
      <div className="rf-body" ref={body} data-scroll>
        <main className="rf-main">
          {state.module === 'home' && Home()}
          {state.module === 'support' && <Support store={store} scrollTop={scrollTop} />}
          {state.module === 'market' && <Market store={store} scrollTop={scrollTop} />}
          {state.module === 'institute' && <Institute store={store} scrollTop={scrollTop} />}
          {state.module === 'me' && Me()}
        </main>
        <footer className="rf-foot">رِفد لا يؤدي الواجبات أو الاختبارات نيابةً عن الطالب · الحد الأدنى من البيانات · موافقة صريحة قبل الحجز والدفع</footer>
      </div>
      {!embedded && (
        <>
          <button className="rf-fab" onClick={() => setDrawer(true)}>سجل الوكلاء <b>{state.log.length}</b></button>
          {drawer && (
            <>
              <div className="rf-scrim" onClick={() => setDrawer(false)} />
              <aside className="rf-drawer" role="dialog" aria-label="سجل الوكلاء">
                <div className="rf-row" style={{ marginTop: 0, marginBottom: 8 }}>
                  <h3 style={{ margin: 0, color: '#fff' }}>سجل الوكلاء الستة</h3>
                  <button className="rf-btn sm ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }} onClick={() => setDrawer(false)}>إغلاق</button>
                </div>
                <AgentLog log={state.log} />
              </aside>
            </>
          )}
        </>
      )}
    </div>
  );

  function Home() {
    const held = state.bookings.filter((b) => b.status === 'held').length;
    const done = state.bookings.filter((b) => b.status === 'released').length;
    return (
      <>
        <div className="rf-hero">
          <h2>مرحبًا سارة 👋</h2>
          <p>طالبة علوم حاسوب (شخصية تجريبية) · احتياجك، مهارتك، وفرصتك القادمة — في مكان واحد.</p>
        </div>
        <div className="rf-svc">
          <button data-svc="support" onClick={() => go('support')}>
            <div className="ic" style={{ background: '#e8eefc' }}>📘</div>
            <h4>الدعم الأكاديمي</h4><p className="rf-meta">تشخيص احتياجك ومطابقتك مع مدرس طالب موثوق وحجز جلسة.</p>
          </button>
          <button data-svc="market" onClick={() => go('market')}>
            <div className="ic" style={{ background: '#e0f6f3' }}>💼</div>
            <h4>السوق المصغر</h4><p className="rf-meta">حوّل مهارتك إلى مشاريع مدفوعة من الأندية والجهات الجامعية.</p>
          </button>
          <button data-svc="institute" onClick={() => go('institute')}>
            <div className="ic" style={{ background: '#f1f8e0' }}>🎓</div>
            <h4>المعهد الرقمي</h4><p className="rf-meta">دورات قصيرة يقدّمها طلبة، تنتهي بشهادة موثّقة تفتح فرصًا.</p>
          </button>
        </div>
        <div className="rf-stats">
          <div className="rf-stat"><b>{done}</b><span>جلسات مكتملة</span></div>
          <div className="rf-stat"><b>{held}</b><span>حجوزات قادمة</span></div>
          <div className="rf-stat"><b>{state.certs.length}</b><span>شهادات موثّقة</span></div>
          <div className="rf-stat"><b>{omr(state.earnings)}</b><span>أرباح السوق</span></div>
        </div>
        {!embedded && state.log.length > 0 && (
          <div className="rf-card" style={{ marginTop: 14, background: '#061828', color: '#fff', borderColor: '#061828' }}>
            <h3 style={{ color: '#b9e769' }}>آخر ما فعله الوكلاء</h3>
            <AgentLog log={state.log} limit={4} />
          </div>
        )}
      </>
    );
  }

  function Me() {
    return (
      <>
        <div className="rf-card">
          <div className="rf-row" style={{ marginTop: 0 }}>
            <div><h2>المحفظة (تجريبية)</h2><p className="rf-sub">رصيد محاكاة لأغراض العرض فقط.</p></div>
            <div className="rf-score" style={{ fontSize: '1.6rem' }}>{omr(state.balance)}</div>
          </div>
          <div className="rf-list" style={{ marginTop: 10 }}>
            {state.txns.length ? state.txns.slice(0, 8).map((t) => (
              <div key={t.id} className="rf-row" style={{ marginTop: 0 }}><span>{t.label}</span><b style={{ color: t.amount >= 0 ? '#0b7a6e' : '#b91c1c', direction: 'ltr' }}>{t.amount >= 0 ? '+' : '−'}{omr(Math.abs(t.amount))}</b></div>
            )) : <p className="rf-empty">لا توجد حركات بعد.</p>}
          </div>
        </div>
        <div className="rf-card">
          <h3>حجوزاتي</h3>
          <div className="rf-list">
            {state.bookings.length ? state.bookings.map((b) => (
              <div key={b.ref}><b>{b.ref}</b> · {b.topic} مع {b.tutor} · {b.when} · {omr(b.total)}{' '}
                <span className={`rf-pill ${b.status === 'released' ? 'p-lo' : b.status === 'held' ? 'p-md' : 'p-hi'}`}>{b.status === 'released' ? 'مكتملة' : b.status === 'held' ? 'محتجز' : 'مُسترد'}</span></div>
            )) : <p className="rf-empty">لا توجد حجوزات بعد.</p>}
          </div>
        </div>
        <div className="rf-card">
          <h3>شهاداتي وسجل خبرتي</h3>
          <div className="rf-list">
            {state.certs.map((c) => <div key={c.id}>🎓 <b>{c.title}</b> · مهارة «{c.skill}» · <span className="rf-ref" style={{ fontSize: '.75rem', padding: '1px 8px' }}>{c.id}</span></div>)}
            {state.portfolio.map((p) => <div key={p.id}>💼 <b>{p.title}</b> · {p.client} · ★ {p.rating} · {omr(p.amount)}</div>)}
            {!state.certs.length && !state.portfolio.length && <p className="rf-empty">أكمل دورة أو مشروعًا ليظهر هنا.</p>}
          </div>
        </div>
        <div className="rf-row" style={{ justifyContent: 'flex-end' }}>
          <button className="rf-btn danger" id="rf-reset" onClick={() => { reset(); scrollTop(); }}>إعادة ضبط التجربة</button>
        </div>
      </>
    );
  }
}
