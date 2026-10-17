/* =============================================================================
   RIFD PITCH — ALL EDITABLE CONTENT LIVES HERE
   -----------------------------------------------------------------------------
   Edit text, team members, figures, prices and notes in this file only.
   Every claim carries a `status` so the slides can label it honestly:
     verified    → sourced public fact (keep the source + date)
     proposed    → planned product capability (not yet built)
     assumption  → commercial assumption to validate
     demo        → illustrative synthetic data
     placeholder → missing information the team must fill in
     achieved    → actually done (only mark true things)
   ========================================================================== */

export type Status = 'verified' | 'proposed' | 'assumption' | 'demo' | 'placeholder' | 'achieved' | 'planned';

export const STATUS_LABEL: Record<Status, { ar: string; en: string }> = {
  verified: { ar: 'معلومة موثّقة', en: 'VERIFIED' },
  proposed: { ar: 'قدرة مقترحة', en: 'PROPOSED' },
  assumption: { ar: 'افتراض للتحقق', en: 'ASSUMPTION' },
  demo: { ar: 'بيانات تجريبية', en: 'SYNTHETIC DATA' },
  placeholder: { ar: 'بانتظار البيانات', en: 'TO FILL' },
  achieved: { ar: 'مُنجز', en: 'DONE' },
  planned: { ar: 'مخطّط', en: 'PLANNED' },
};

export interface SlideMeta {
  id: string; // deep link: #s1 …
  no: string;
  en: string; // English section identifier
  ar: string; // short Arabic nav title
  theme: 'dark' | 'light';
  official?: string; // mandatory topic from the official template
  notes: string[]; // speaker notes (press N)
}

export const SLIDES: SlideMeta[] = [
  { id: 's1', no: '01', en: 'COVER', ar: 'رِفد', theme: 'dark', official: 'اسم الشركة', notes: [
    'السلام عليكم، نحن فريق رِفد.',
    'في كل جامعة طالب يحتاج مساعدة، وطالب آخر يملك المهارة المناسبة — لكنهما لا يلتقيان.',
    'رِفد منصة جامعية ذكية تحوّل هذه المهارات إلى خدمات ومشاريع وخبرات موثّقة.',
  ] },
  { id: 's2', no: '02', en: 'THE PROBLEM', ar: 'المشكلة', theme: 'dark', official: 'المشكلة', notes: [
    'ثلاث فجوات: دعم صعب الوصول، مهارات لا تتحول إلى فرص، وخدمات مبعثرة.',
    'الأسباب: الاعتماد على العلاقات الشخصية والقنوات المتفرقة وغياب التوثيق.',
    'اضغط «ماذا لو اتصلت؟» للانتقال إلى الحل.',
  ] },
  { id: 's3', no: '03', en: 'THE SOLUTION', ar: 'الحل', theme: 'dark', official: 'الحل', notes: [
    'أربع وحدات: الدعم الأكاديمي، السوق المصغر، المعهد الرقمي، ولوحة المؤسسة.',
    'الذكاء الاصطناعي يعمل عبر ستة وكلاء ينظّمون الرحلة كاملة، مع قرار بشري في الدفع والاعتماد.',
  ] },
  { id: 's4', no: '04', en: 'BUSINESS MODEL', ar: 'نموذج العمل', theme: 'dark', official: 'نموذج العمل التجاري', notes: [
    'من يدفع؟ الطالب عمولة على الخدمة المكتملة، والجامعة اشتراكًا سنويًا، والمعهد الرقمي رسوم دورات.',
    'تبويب «المالية» يعرض نموذجًا لخمس سنوات مبنيًا على افتراضات واضحة قابلة للتعديل — ليس إيرادات محققة.',
  ] },
  { id: 's5', no: '05', en: 'COMPETITION', ar: 'المنافسون', theme: 'dark', official: 'المنافسون / القيمة المضافة', notes: [
    'نعرض فقط ما يعلنه كل منافس مع المصدر.',
    'القيمة المضافة: لا نتوقف عند قياس المهارة، بل نحوّلها إلى خدمة ومشروع ودخل وخبرة موثّقة.',
    'إن سُئلنا عن منصات تقييم المهارات بالذكاء الاصطناعي: هذا مفهوم منافس محتمل، ولا نملك معلومات موثّقة عن منصة محددة منه، لذلك لم ندرجه في الجدول.',
  ] },
  { id: 's6', no: '06', en: 'THE TEAM', ar: 'الفريق', theme: 'dark', official: 'أعضاء الفريق ومسمياتهم', notes: [
    'نحن ثلاثة أعضاء بتوزيع واضح للمسؤوليات:',
    'شهاب حمد عبدالله الكعبي — المؤسس والرئيس التنفيذي: القيادة والاستراتيجية وتطوير الأعمال والشراكات.',
    'عبدالله المعمري — الرئيس التقني: التطوير التقني وبنية المنصة والذكاء الاصطناعي.',
    'الوليد العميري — الرئيس التنفيذي للعمليات: العمليات وتنسيق الخدمات وتجربة المستخدم والتنفيذ.',
    'هذا توزيع تنظيمي مقترح لمرحلة الانطلاق.',
  ] },
  { id: 's7', no: '07', en: 'VALIDATION & MARKET', ar: 'التحقق والسوق', theme: 'dark', notes: [
    'الأرقام موثّقة من المركز الوطني للإحصاء والمعلومات، وتصف حجم المجتمع المستهدف.',
    'المقابلات والاستبيان جزء من خطة التحقق — لا نعرض نتائج قبل جمعها.',
    'تبويب «حجم السوق» يحسب السوق القابل للخدمة والقابل للتحقيق من افتراضات معلنة.',
  ] },
  { id: 's8', no: '08', en: 'INTERACTIVE MVP', ar: 'النموذج الأولي', theme: 'dark', notes: [
    'نموذج تفاعلي ببيانات توضيحية — ليس منصة مطلقة بعد.',
    'المعهد الرقمي: طالبة تتعلم وتحصل على شهادة وفرصة. السوق المصغر: طالب مصمم ينفّذ مشروعًا مدفوعًا لنادٍ.',
    'تبويب «الوكلاء الستة» يوضح دور كل وكيل في الرحلة.',
  ] },
  { id: 's9', no: '09', en: 'ROADMAP & ASK', ar: 'خطة التنفيذ والطلب', theme: 'dark', notes: [
    'المنجز فعليًا، ثم أربع مراحل بمؤشرات نجاح واضحة.',
    'الرؤية خلال خمس سنوات: من جامعة واحدة إلى منصة خليجية.',
    'الطلب: جامعة شريكة، وإرشاد، ودعم للانطلاق.',
    'رِفد — لأن المهارات لا ينبغي أن تبقى فرصًا ضائعة.',
  ] },
];

/* ------------------------------------------------------------------ 01 */
export const COVER = {
  kicker: 'PEOPLE · SKILLS · OPPORTUNITIES · WITH AI',
  headline: 'من المهارات إلى الفرص',
  statement: 'منصة جامعية ذكية تحوّل احتياجات الطلبة ومهاراتهم إلى خدمات ومشاريع وخبرات عملية.',
  event: 'Techstars Startup Weekend · Buraimi City 2026',
};

/* ------------------------------------------------------------------ 02 */
export const PROBLEM = {
  headline: 'مهارات موجودة. احتياجات حقيقية. فرص لا تصل إلى أصحابها.',
  problems: [
    {
      key: 'support', color: '#3B82F6', en: 'GAP 01 · TRUSTED SUPPORT',
      title: 'الدعم الموثوق صعب الوصول',
      body: 'الطالب لا يعرف من يملك المهارة التي يحتاجها، ولا كيف يتحقق من جودته.',
    },
    {
      key: 'talent', color: '#14D1C8', en: 'GAP 02 · TALENT → OPPORTUNITY',
      title: 'المهارات لا تتحول إلى فرص',
      body: 'الطالب الموهوب لا يجد عملاء ولا مشاريع ولا وسيلة لتوثيق خبرته العملية.',
    },
    {
      key: 'fragment', color: '#93BBFB', en: 'GAP 03 · FRAGMENTATION',
      title: 'الخدمات والبرامج مبعثرة',
      body: 'دورات ومشاريع وإعلانات موزعة على قنوات منفصلة، ولا رؤية موحدة للمؤسسة.',
    },
  ],
  toggleOff: 'ماذا لو اتصلت؟',
  toggleOn: 'العودة إلى الواقع الحالي',
};

/* ------------------------------------------------------------------ 03 */
export const VALIDATION = {
  headline: 'المشكلة ليست افتراضًا… وعلينا إثبات حجمها.',
  sub: 'نفصل بين ما هو موثّق، وما نجمعه الآن، وما زال فرضية.',
  verified: {
    source: 'المركز الوطني للإحصاء والمعلومات — نشرة إحصاءات التعليم 2026',
    sourceShort: 'NCSI · Education Statistics 2026',
    url: 'https://www.muscatdaily.com/2026/09/23/education-sector-expands-as-school-enrolment-grows/',
    stats: [
      { value: 145885, label: 'طالب في التعليم العالي في عُمان', suffix: '' },
      { value: 39194, label: 'قبول جديد في العام الأكاديمي 2024/2025', suffix: '' },
      { value: 47.4, label: 'نسبة القيد الإجمالية للفئة 18–22 سنة', suffix: '%', decimals: 1 },
    ],
  },
  // Replace `value: null` with real numbers once collected. Cards render as dashed slots until then.
  evidence: [
    { key: 'interviews', title: 'مقابلات مع طلبة', value: null as string | null, hint: 'عدد المقابلات + أبرز الاقتباسات', status: 'placeholder' as Status },
    { key: 'survey', title: 'استبيان الطلبة', value: null as string | null, hint: 'عدد المشاركين + نسبة من واجه صعوبة في إيجاد دعم', status: 'placeholder' as Status },
    { key: 'wtp', title: 'الاستعداد للدفع', value: null as string | null, hint: 'كم يدفع الطالب مقابل جلسة؟ (نطاق مؤكد)', status: 'placeholder' as Status },
  ],
  hypotheses: [
    { code: 'H1', text: 'الطلبة يعتمدون على المعارف ومجموعات التواصل لإيجاد مساعدة أكاديمية أو تقنية.' },
    { code: 'H2', text: 'طلبة موهوبون مستعدون لتقديم خدماتهم مقابل أجر وخبرة موثّقة.' },
    { code: 'H3', text: 'الجامعات تحتاج رؤية موحدة لأنشطة الدعم والفرص ونتائجها.' },
  ],
  alternatives: ['مجموعات واتساب وتيليجرام', 'المعارف الشخصية', 'منصات العمل الحر العامة', 'إعلانات متفرقة داخل الحرم'],
};

/* ------------------------------------------------------------------ 04 */
export const SOLUTION = {
  headline: 'رِفد… منظومة واحدة تربط الاحتياج بالمهارة والفرصة.',
  chain: ['احتياج', 'مهارة', 'تعلّم', 'خدمة', 'مشروع', 'نتيجة موثّقة'],
  areas: [
    {
      key: 'support', en: 'SMART ACADEMIC SUPPORT', title: 'الدعم الأكاديمي الذكي', color: '#3B82F6',
      line: 'إرشاد بين الأقران بمطابقة وحجز ومتابعة.',
      points: ['مطابقة حسب المادة والمستوى والتوقيت', 'حجز جلسات وتذكيرات', 'متابعة بعد الجلسة وتقييم'],
    },
    {
      key: 'market', en: 'MINI MARKET', title: 'السوق المصغر', color: '#14D1C8',
      line: 'سوق داخلي يقدّم فيه الطلبة خدمات التصميم والبرمجة والمونتاج مقابل أجر.',
      points: ['ملفات مهارات موثّقة', 'طلبات وعروض ومراحل تنفيذ', 'دفع آمن عند الإتمام والاعتماد'],
    },
    {
      key: 'learn', en: 'DIGITAL INSTITUTE', title: 'المعهد الرقمي', color: '#93BBFB',
      line: 'دورات قصيرة ومسارات تعلّم وشهادات تفتح الفرص.',
      points: ['مسارات تعلّم مقترحة', 'مشاريع من الشركات والأندية', 'فرص تُرشَّح حسب المهارة'],
    },
    {
      key: 'inst', en: 'INSTITUTIONAL DASHBOARD', title: 'لوحة المؤسسة', color: '#6FE8E1',
      line: 'إدارة وتنسيق وتحليلات أثر مجمّعة للجامعة.',
      points: ['تنظيم خدمات الدعم', 'إدارة الفرص والبرامج', 'مؤشرات أثر مجمّعة ومجهولة الهوية'],
    },
  ],
  integrity: 'رِفد يدعم التعلّم المشروع وتطوير المهارات — لا إنجاز الواجبات المقيّمة نيابةً عن الطلبة.',
};

/* ------------------------------------------------------------------ 05 */
export const AGENTS = [
  { key: 'needs', en: 'Needs Agent', ar: 'وكيل الاحتياج', role: 'يفهم الطلب ويصنّفه', color: '#3B82F6' },
  { key: 'learning', en: 'Learning Agent', ar: 'وكيل التعلّم', role: 'يقترح مسار تعلّم مناسب', color: '#5E9AF8' },
  { key: 'matching', en: 'Matching Agent', ar: 'وكيل المطابقة', role: 'يطابق الاحتياج مع الشخص والفرصة', color: '#14D1C8' },
  { key: 'execution', en: 'Execution Agent', ar: 'وكيل التنفيذ', role: 'ينسّق الحجز والمهام والمتابعة', color: '#6FE8E1', human: true },
  { key: 'verification', en: 'Verification Agent', ar: 'وكيل التحقق', role: 'يراجع أدلة الإتمام والجودة', color: '#93BBFB', human: true },
  { key: 'opportunity', en: 'Opportunity Agent', ar: 'وكيل الفرص', role: 'يرشّح الفرصة التالية', color: '#0E9E97' },
] as const;

export const JOURNEY = {
  headline: 'من احتياج بسيط… إلى نتيجة حقيقية.',
  persona: 'سارة · طالبة علوم حاسوب (شخصية توضيحية)',
  steps: [
    { agent: 0, title: 'تكتب سارة طلبها', detail: '«أحتاج أفهم الدوال العودية في Python قبل اختبار الأسبوع القادم»', output: 'برمجة · Python · مبتدئ · خلال 5 أيام' },
    { agent: 1, title: 'مسار تعلّم قصير', detail: 'يقترح مراجعة مركّزة قبل الجلسة لتكون أكثر فاعلية.', output: '3 موارد مختارة · وحدة تدريبية قصيرة' },
    { agent: 2, title: 'مطابقة مع مرشد مؤهل', detail: 'يرتّب الطلبة المرشدين حسب المهارة والتقييم والتوفر.', output: '3 مرشدين متاحين · أفضل تطابق 94%' },
    { agent: 3, title: 'تنسيق الحجز', detail: 'يحجز الموعد ويرسل التذكيرات — بعد تأكيد سارة.', output: 'جلسة الأربعاء 4:00 م · بانتظار تأكيدها', human: 'تأكيد الطالبة مطلوب' },
    { agent: 4, title: 'التحقق من الإتمام', detail: 'يجمع أدلة الإتمام والتقييم، ويعرضها على مشرف بشري.', output: 'الجلسة مكتملة · تقييم 5/5', human: 'اعتماد المشرف مطلوب' },
    { agent: 5, title: 'الفرصة التالية', detail: 'يرشّح لسارة ورشة لاحقة، ولمرشدها طلبات مشابهة.', output: 'سجل خبرة موثّق للمرشد + فرصة جديدة' },
  ],
};

/* ------------------------------------------------------------------ 07 */
export const MARKET = {
  headline: 'نبدأ من الجامعات العُمانية… ونبني نموذجًا قابلًا للتوسع.',
  rings: [
    {
      key: 'tam', code: 'TAM', title: 'طلبة التعليم العالي في عُمان', value: '145,885',
      note: 'NCSI · نشرة إحصاءات التعليم 2026', status: 'verified' as Status,
    },
    {
      key: 'sam', code: 'SAM', title: 'طلبة 10 مؤسسات شريكة مستهدفة خلال 5 سنوات', value: '20,000',
      note: '10 مؤسسات × 2,000 طالب يصلهم رِفد — نفس افتراضات النموذج المالي', status: 'assumption' as Status,
    },
    {
      key: 'som', code: 'SOM', title: 'الجامعة الشريكة الأولى (السنة 1)', value: '2,000',
      note: 'نستهدف أن يستخدم 8% منهم المنصة فعليًا (≈160 طالبًا نشطًا)', status: 'assumption' as Status,
    },
  ],
  segments: [
    { title: 'الطلبة', line: 'يطلبون دعمًا أو يقدّمون خدماتهم' },
    { title: 'الجامعات', line: 'مشترٍ مؤسسي لتنظيم الدعم وقياس الأثر' },
    { title: 'الشركات والأندية', line: 'تطرح مشاريع عملية' },
    { title: 'مزودو التدريب', line: 'يصلون إلى طلبة مهتمين' },
  ],
  expansion: ['البريمي', 'عُمان', 'الخليج'],
  // Revenue simulator defaults — ALL are assumptions, editable by the presenter live.
  sim: {
    students: 2000, active: 10, perSemester: 2, ticket: 8, commission: 12,
  },
};

/* ------------------------------------------------------------------ 08 */
export type Mark = 'core' | 'partial' | 'none' | 'varies' | 'unknown' | 'proposed';
export const MARK_LABEL: Record<Mark, string> = {
  core: 'محور معلن',
  partial: 'جزئي',
  none: 'ليس ضمن وصفه المعلن',
  varies: 'يختلف',
  unknown: 'غير متحقق',
  proposed: 'مقترح في رِفد',
};

export const COMPETITION = {
  headline: 'الفرق ليس في قياس المهارة… بل في تحويلها إلى قيمة.',
  criteria: ['الدعم الأكاديمي', 'خدمات يقدّمها الطلبة', 'مشاريع حقيقية', 'تنسيق المعاملة والتنفيذ', 'خبرة عملية موثّقة', 'إدارة مؤسسية'],
  players: [
    {
      key: 'knack', name: 'Knack', kind: 'دروس بين الأقران بشراكة جامعية',
      marks: ['core', 'partial', 'none', 'partial', 'unknown', 'core'] as Mark[],
      evidence: 'الجامعة تضم طلبة مرشدين، والجامعة تدفع للمرشد مقابل الجلسة.',
      source: 'https://blog.joinknack.com/why-knack-makes-sense-for-students',
    },
    {
      key: 'riipen', name: 'Riipen', kind: 'مشاريع عملية تربط المعلمين بأصحاب العمل',
      marks: ['none', 'none', 'core', 'unknown', 'partial', 'core'] as Mark[],
      evidence: 'منصة تعلّم قائم على العمل تربط المعلمين وأصحاب العمل بمشاريع حقيقية للطلبة.',
      source: 'https://www.riipen.com/virtual-internships',
    },
    {
      key: 'tutorocean', name: 'TutorOcean', kind: 'سوق دروس وأدوات لإدارة الدروس',
      marks: ['core', 'none', 'none', 'core', 'unknown', 'partial'] as Mark[],
      evidence: 'جدولة وملفات وفوترة وفصل افتراضي؛ المرشدون يحددون أسعارهم.',
      source: 'https://us.fitgap.com/products/058570/tutorocean',
    },
    {
      key: 'uni', name: 'خدمات الجامعة الحالية', kind: 'مراكز دعم وإرشاد داخلية',
      marks: ['core', 'varies', 'varies', 'varies', 'varies', 'core'] as Mark[],
      evidence: 'تختلف من جامعة لأخرى؛ نعتبرها شريكًا محتملًا لا منافسًا مباشرًا.',
      source: '',
    },
    {
      key: 'freelance', name: 'منصات العمل الحر العامة', kind: 'أسواق خدمات مفتوحة للجميع',
      marks: ['none', 'core', 'core', 'core', 'partial', 'none'] as Mark[],
      evidence: 'أسواق عامة غير مخصصة للمجتمع الجامعي ولا لسياساته الأكاديمية.',
      source: '',
    },
    {
      key: 'rifd', name: 'رِفد', kind: 'منظومة جامعية موحّدة — مقترحة',
      marks: ['proposed', 'proposed', 'proposed', 'proposed', 'proposed', 'proposed'] as Mark[],
      evidence: 'كل القدرات مقترحة وسيتم التحقق منها في التجربة.',
      source: '',
    },
  ],
  assessmentConcept:
    'مفهوم منافس يركّز على تقييم مهارات الطلبة بالذكاء الاصطناعي — لا نملك معلومات موثّقة عن ميزاته ولا ندّعيها.',
  positioning: 'نحن لا نتوقف عند تقييم قدرات الطلبة؛ نساعد على تحويلها إلى خدمات ومشاريع وفرص دخل وخبرة عملية موثّقة.',
};

/* ------------------------------------------------------------------ 09 */
export const BUSINESS = {
  headline: 'قيمة واضحة للعميل… وإيرادات قابلة للتكرار.',
  canvas: [
    { key: 'partners', en: 'KEY PARTNERS', ar: 'الشركاء الرئيسيون', area: 'kp', items: ['الجامعات والكليات', 'الأندية الطلابية', 'شركات تطرح مشاريع', 'مزودو التدريب', 'بوابات الدفع'] },
    { key: 'activities', en: 'KEY ACTIVITIES', ar: 'الأنشطة الرئيسية', area: 'ka', items: ['تطوير المنصة والوكلاء', 'التحقق من المهارات والجودة', 'بناء الشراكات الجامعية', 'الثقة والسلامة'] },
    { key: 'resources', en: 'KEY RESOURCES', ar: 'الموارد الرئيسية', area: 'kr', items: ['منظومة الوكلاء الستة', 'مجتمع الطلبة المقدمين', 'بيانات المطابقة', 'فريق المنتج'] },
    { key: 'value', en: 'VALUE PROPOSITIONS', ar: 'القيمة المقدمة', area: 'vp', items: ['دعم موثوق في وقته', 'مهارات تتحول إلى دخل وخبرة', 'فرص في مكان واحد', 'رؤية مؤسسية للأثر'] },
    { key: 'relationships', en: 'CUSTOMER RELATIONSHIPS', ar: 'العلاقة مع العملاء', area: 'cr', items: ['خدمة ذاتية ذكية', 'تقييمات وسمعة موثّقة', 'مدير حساب للجامعات'] },
    { key: 'channels', en: 'CHANNELS', ar: 'القنوات', area: 'ch', items: ['تطبيق ويب وجوال', 'شراكات الحرم الجامعي', 'الأندية والسفراء الطلابيون'] },
    { key: 'segments', en: 'CUSTOMER SEGMENTS', ar: 'شرائح العملاء', area: 'cs', items: ['طلبة يحتاجون دعمًا', 'طلبة يقدّمون مهاراتهم', 'الجامعات', 'الشركات ومزودو التدريب'] },
    { key: 'costs', en: 'COST STRUCTURE', ar: 'هيكل التكاليف', area: 'co', items: ['التطوير والاستضافة', 'تكلفة نماذج الذكاء الاصطناعي', 'المبيعات والشراكات', 'الدعم والثقة والسلامة', 'رسوم الدفع'] },
    { key: 'revenue', en: 'REVENUE STREAMS', ar: 'مصادر الإيرادات', area: 'rs', items: ['عمولة على المعاملات المكتملة', 'اشتراكات مؤسسية', 'رسوم مشاريع الشركات', 'المعهد الرقمي (رسوم الدورات ومزودو التدريب)', 'رسوم الإعداد والتكامل'] },
  ],
  // Sample pricing: PROPOSED ASSUMPTIONS ONLY. Edit freely.
  revenue: [
    { key: 'b2c', who: 'الطالب', what: 'عمولة على المعاملة المكتملة', price: '10–15%', basis: 'من قيمة الخدمة', type: 'B2C' },
    { key: 'b2b', who: 'الجامعة', what: 'اشتراك مؤسسي', price: 'سنوي', basis: 'حسب عدد الطلبة — يُسعّر بعد التجربة', type: 'B2B' },
    { key: 'proj', who: 'الشركات', what: 'رسوم المشاريع المعتمدة', price: '~10%', basis: 'من قيمة المشروع', type: 'B2B' },
    { key: 'train', who: 'المعهد الرقمي', what: 'مزودو التدريب: اشتراك أو رسوم', price: 'شهري', basis: 'أو رسوم لكل تسجيل', type: 'B2B' },
    { key: 'setup', who: 'الجامعة', what: 'الإعداد والتكامل', price: 'لمرة واحدة', basis: 'ربط الأنظمة والهوية', type: 'B2B' },
  ],
};

/* ------------------------------------------------------------------ 10 */
export const ROADMAP = {
  headline: 'نبدأ صغيرًا. نثبت القيمة. ثم نتوسع.',
  achieved: ['الهوية البصرية لرِفد', 'تصور المنتج ونموذج العمل', 'نموذج عرض تفاعلي ببيانات تجريبية'],
  phases: [
    {
      key: 'p1', en: 'PHASE 1 · VALIDATION', ar: 'التحقق', window: 'الأسابيع 1–6',
      goal: 'تأكيد الاحتياج والاستعداد للدفع والوصول إلى جامعة مستهدفة.',
      milestones: ['مقابلات مع طلبة ومقدمي خدمات', 'استبيان في جامعة واحدة', 'خطاب اهتمام من جهة جامعية'],
      metrics: ['نسبة من يواجه المشكلة', 'نطاق السعر المقبول'],
      risks: ['ضعف الاستجابة للاستبيان'],
    },
    {
      key: 'p2', en: 'PHASE 2 · MVP', ar: 'النموذج الأولي', window: 'الأشهر 2–4',
      goal: 'إطلاق الدعم الأكاديمي ومعاملات خدمات الطلبة.',
      milestones: ['تسجيل وملفات مهارات', 'طلب ← مطابقة ← حجز', 'دفع آمن واعتماد بشري'],
      metrics: ['زمن الوصول لأول تطابق', 'نسبة الطلبات المطابقة'],
      risks: ['جودة المقدمين في البداية'],
    },
    {
      key: 'p3', en: 'PHASE 3 · PILOT', ar: 'التجربة', window: 'فصل دراسي واحد',
      goal: 'اختبار طلبات حقيقية، الإتمام، الثقة، الرضا، واقتصاديات المعاملة.',
      milestones: ['تجربة في جامعة شريكة', 'لوحة متابعة للمؤسسة', 'مراجعة النزاهة الأكاديمية'],
      metrics: ['معدل الإتمام', 'الرضا والتقييم', 'الإيراد لكل معاملة'],
      risks: ['سوء الاستخدام الأكاديمي', 'تكرار الاستخدام'],
    },
    {
      key: 'p4', en: 'PHASE 4 · INSTITUTIONAL GROWTH', ar: 'النمو المؤسسي', window: 'بعد التحقق',
      goal: 'مبيعات مؤسسية وتوسيع الفرص بعد إثبات القيمة.',
      milestones: ['اشتراكات جامعية', 'مشاريع الشركات والتدريب', 'التوسع داخل عُمان ثم الخليج'],
      metrics: ['عدد المؤسسات المشتركة', 'الاحتفاظ بالمؤسسات'],
      risks: ['طول دورة البيع المؤسسي'],
    },
  ],
};

/* ------------------------------------------------------------------ 11 */
// Replace the placeholders with the real team. Set `placeholder: false` once filled.
export const TEAM = {
  headline: 'الفريق الذي سيحوّل الفكرة إلى واقع.',
  // Confirmed team (positions = proposed organisational allocation for the pitch).
  members: [
    { name: 'شهاب حمد عبدالله الكعبي', initials: 'ش', role: 'المؤسس والرئيس التنفيذي', en: 'Founder & CEO',
      duty: 'قيادة المشروع وتوجهه الاستراتيجي، وتطوير الأعمال والشراكات ونمو الشركة' },
    { name: 'عبدالله المعمري', initials: 'ع', role: 'الرئيس التقني', en: 'CTO',
      duty: 'التطوير التقني وبنية المنصة، وتطوير الذكاء الاصطناعي ودمجه' },
    { name: 'الوليد العميري', initials: 'و', role: 'الرئيس التنفيذي للعمليات', en: 'COO',
      duty: 'إدارة العمليات وتنسيق الخدمات، وتجربة المستخدم والتنفيذ' },
  ] as { name: string; initials: string; role: string; en: string; duty: string }[],
  allocationNote: 'توزيع تنظيمي مقترح لمرحلة الانطلاق',
  askTitle: 'ما نطلبه للخطوة التالية',
  asks: [
    { title: 'جامعة شريكة للتجربة', line: 'للوصول إلى الطلبة وقياس الأثر خلال فصل دراسي' },
    { title: 'إرشاد متخصص', line: 'في التعليم العالي والأسواق الرقمية والتسعير' },
    { title: 'احتضان ودعم للانطلاق', line: 'لبناء النسخة الأولى وتشغيل التجربة' },
  ],
  closing: 'رِفد — لأن المهارات لا ينبغي أن تبقى فرصًا ضائعة.',
};

/* ------------------------------------------------------------ partners */
// Extracted unchanged from the official Startup Weekend template (ppt/media).
export const EVENT_LOGO = { src: 'assets/organizers/techstars-sw-buraimi-2026.png', alt: 'Techstars Startup Weekend Buraimi City 2026' };
export const PARTNER_LOGOS = [
  { src: 'assets/sponsors/ministry-of-labour.png', alt: 'وزارة العمل', h: 1.15 },
  { src: 'assets/sponsors/vocational-education-training.png', alt: 'التعليم والتدريب المهني', h: 1.05 },
  { src: 'assets/sponsors/riyada-startups.png', alt: 'ريادة — الشركات الناشئة', h: 0.9 },
  { src: 'assets/sponsors/qatarat.png', alt: 'قطرات', h: 1.05 },
  { src: 'assets/sponsors/google-for-startups.png', alt: 'Google for Startups', h: 0.42 },
  { src: 'assets/sponsors/brex.png', alt: 'Brex', h: 0.5 },
  { src: 'assets/sponsors/deel.png', alt: 'deel', h: 0.55 },
];

/* ------------------------------------------------------------ problem causes */
export const CAUSES = [
  { title: 'الاعتماد على العلاقات', body: 'الوصول للمساعدة يمر عبر المعارف والمجموعات، لا عبر نظام.' },
  { title: 'قنوات متفرقة', body: 'الدورات والمشاريع والإعلانات موزعة على بريد وملصقات وتطبيقات.' },
  { title: 'لا توثيق ولا ثقة', body: 'لا سجل يثبت جودة المقدّم ولا خبرة الطالب الموهوب.' },
];

/* ------------------------------------------------------------ AI in the solution */
export const AI_LINE = 'ستة وكلاء: يفهم الاحتياج، يقترح التعلّم، يطابق، ينسّق، يتحقق من الجودة، ويرشّح الفرصة التالية — والقرار في الدفع والاعتماد بشري.';

/* ------------------------------------------------------------ 04 finance (ASSUMPTIONS) */
// Five-year model built ONLY from editable assumptions. Not revenue history, not a forecast.
export const FINANCE = {
  years: ['السنة 1', 'السنة 2', 'السنة 3', 'السنة 4', 'السنة 5'],
  universities: [1, 2, 4, 7, 10],             // partner institutions
  studentsPerUni: 2000,                        // reachable students per institution
  activeRate: [0.08, 0.12, 0.15, 0.18, 0.2],   // share of students who complete at least one service
  servicesPerActive: 3,                        // completed services per active student per semester
  semesters: 2,
  avgTicket: 10,                               // OMR per completed service
  commission: 0.12,                            // RIFD take rate (10–15%)
  subscription: [0, 3000, 4000, 5000, 6000],   // OMR per paying institution per year
  paidUniShare: [0, 0.5, 0.75, 0.85, 0.9],     // share of partners on a paid subscription
  institute: [1500, 6000, 15000, 30000, 50000],// Digital Institute: RIFD share of course fees (OMR)
  costs: [12000, 22000, 38000, 55000, 75000],  // lean team, AI, hosting, sales, payments (OMR)
};

/* ------------------------------------------------------------ 09 five-year vision */
export const VISION = [
  { year: '2026–2027', title: 'إثبات القيمة', body: 'تجربة في جامعة شريكة بالبريمي: دعم أكاديمي وسوق مصغر.' },
  { year: '2027–2028', title: 'المنتج الكامل', body: 'إطلاق المعهد الرقمي ولوحة المؤسسة، والتوسع إلى جامعتين.' },
  { year: '2028–2029', title: 'عُمان', body: 'شراكات مع مؤسسات تعليم عالٍ في عدة محافظات ومشاريع شركات.' },
  { year: '2029–2030', title: 'منصة وطنية', body: 'سجل خبرة طلابي موثّق تعتمد عليه جهات التوظيف والتدريب.' },
  { year: '2030–2031', title: 'الخليج', body: 'التوسع إلى أول سوق خليجي بعد إثبات النموذج في عُمان.' },
];
