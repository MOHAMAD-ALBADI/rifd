/* =============================================================================
   RIFD PITCH — ALL EDITABLE CONTENT LIVES HERE
   -----------------------------------------------------------------------------
   Edit copy, team, evidence, figures and notes in this file only.
   Missing facts are NOT shown on slides. Fill the fields marked TODO and the
   slides pick them up automatically (see DATA_CHECKLIST.md).
   Status labels shown on screen:
     verified    → sourced public fact
     proposed    → planned product capability (not built yet)
     assumption  → commercial assumption to validate
     demo        → illustrative synthetic data
     achieved    → actually done
     planned     → future roadmap item
   ========================================================================== */

export type Status = 'verified' | 'proposed' | 'assumption' | 'demo' | 'achieved' | 'planned';

export const STATUS_LABEL: Record<Status, string> = {
  verified: 'معلومة موثّقة',
  proposed: 'قدرة مقترحة',
  assumption: 'افتراض للتحقق',
  demo: 'بيانات توضيحية',
  achieved: 'مُنجز',
  planned: 'مخطّط',
};

/** The journey is the visual language of the whole deck. */
export const JOURNEY_STEPS = [
  { key: 'need', ar: 'احتياج', en: 'NEED' },
  { key: 'match', ar: 'مطابقة', en: 'MATCH' },
  { key: 'service', ar: 'خدمة', en: 'SERVICE' },
  { key: 'execution', ar: 'تنفيذ', en: 'EXECUTION' },
  { key: 'outcome', ar: 'نتيجة', en: 'OUTCOME' },
  { key: 'opportunity', ar: 'فرصة', en: 'OPPORTUNITY' },
] as const;

export interface SlideMeta {
  id: string;
  no: string;
  en: string;
  ar: string;
  official?: string; // mandatory topic from the official template
  notes: string[];
}

export const SLIDES: SlideMeta[] = [
  { id: 's1', no: '01', en: 'COVER', ar: 'رِفد', official: 'اسم الشركة', notes: [
    'السلام عليكم. نحن رِفد.',
    'في كل جامعة طالب يحتاج مساعدة، وطالب آخر يملك المهارة التي يحتاجها — ولا يلتقيان.',
    'رِفد يحوّل هذا الاحتياج إلى خدمة، والمهارة إلى دخل وخبرة موثّقة.',
  ] },
  { id: 's2', no: '02', en: 'THE PROBLEM', ar: 'المشكلة', official: 'المشكلة', notes: [
    'ثلاث نقاط احتكاك يعرفها كل طالب جامعي.',
    'الأمثلة على الشاشة توضيحية لكنها تصف واقعًا مألوفًا: مجموعات بلا رد، موهوبون بلا عملاء، وفرص مبعثرة.',
    'اضغط «كيف يبدو مع رِفد؟» لعرض الحل لكل نقطة.',
  ] },
  { id: 's3', no: '03', en: 'PROBLEM VALIDATION', ar: 'التحقق', notes: [
    'الأرقام الثلاثة موثّقة من المركز الوطني للإحصاء والمعلومات — تصف حجم المجتمع المستهدف.',
    'نختبر ثلاث فرضيات بطرق محددة، ولن نعرض نتائج قبل جمعها.',
  ] },
  { id: 's4', no: '04', en: 'THE SOLUTION', ar: 'الحل', official: 'الحل', notes: [
    'رِفد منظومة واحدة بأربع وحدات. كل وحدة تغطي جزءًا من الرحلة.',
    'اضغط على أي وحدة لترى أي مراحل الرحلة تغطيها.',
  ] },
  { id: 's5', no: '05', en: 'HOW IT WORKS · AI AGENTS', ar: 'كيف يعمل', notes: [
    'ستة وكلاء، كل وكيل مسؤول عن مرحلة واحدة — ويعملون كمنظومة واحدة.',
    'لكل وكيل: ما يستقبله، ما يفعله، وما ينتجه. الحجز والدفع والاعتماد بتأكيد بشري.',
  ] },
  { id: 's6', no: '06', en: 'INTERACTIVE MVP', ar: 'التجربة الحية', notes: [
    'نموذج تفاعلي ببيانات توضيحية — ليس منصة مطلقة بعد.',
    'سارة تطلب شرحًا في Python: نرسل الطلب، نرى التحليل، نختار مرشدًا، نحجز، ننهي الجلسة، ونقيّم.',
    'التبويب الثاني: نادٍ طلابي يطلب تصميم هوية ويدفع لطالب مصمم.',
  ] },
  { id: 's7', no: '07', en: 'MARKET ENTRY', ar: 'السوق', notes: [
    '145,885 طالبًا في التعليم العالي في عُمان — رقم موثّق.',
    'لا نعرض أحجام SAM/SOM غير مؤكدة. نعرض خطة الدخول ومنطق الإيراد بافتراضات واضحة.',
  ] },
  { id: 's8', no: '08', en: 'COMPETITION', ar: 'المنافسون', official: 'المنافسون / القيمة المضافة', notes: [
    'السؤال: لماذا يختار العميل رِفد؟ ثلاثة أسباب.',
    'كل بديل يركّز على جزء من الرحلة حسب وصفه المعلن. رِفد يقترح الرحلة كاملة داخل الجامعة.',
  ] },
  { id: 's9', no: '09', en: 'BUSINESS MODEL', ar: 'نموذج العمل', official: 'نموذج العمل التجاري', notes: [
    'من يدفع؟ الطالب عند إتمام الخدمة، والجامعة باشتراك سنوي.',
    'المثال التفاعلي يوضح كيف تتوزع قيمة الجلسة. النسب افتراضات.',
  ] },
  { id: 's10', no: '10', en: 'ROADMAP', ar: 'خارطة التنفيذ', notes: [
    'المنجز فعليًا: الهوية، تصور المنتج، والنموذج التفاعلي.',
    'لا ننتقل لمرحلة قبل تحقق مؤشرات السابقة.',
  ] },
  { id: 's11', no: '11', en: 'TEAM & ASK', ar: 'الفريق', official: 'أعضاء الفريق ومسمياتهم', notes: [
    'عرّف بالفريق وأدوار كل عضو.',
    'الطلب: جامعة شريكة للتجربة وإرشاد متخصص.',
    'رِفد — لأن المهارات لا ينبغي أن تبقى فرصًا ضائعة.',
  ] },
];

/* ------------------------------------------------------------------ 01 */
export const COVER = {
  kicker: 'AI-POWERED UNIVERSITY PLATFORM',
  headline: 'من المهارات إلى الفرص',
  statement: 'منصة جامعية ذكية تحوّل احتياجات الطلبة ومهاراتهم إلى خدمات ومشاريع وخبرات موثّقة.',
  event: 'Techstars Startup Weekend · Buraimi City 2026',
};

/* ------------------------------------------------------------------ 02 */
export const PROBLEM = {
  headline: 'مهارات موجودة. احتياجات حقيقية. لكنهما لا يلتقيان.',
  frictions: [
    {
      key: 'support', who: 'طالب يحتاج مساعدة',
      title: 'الدعم الموثوق صعب الوصول',
      line: 'يسأل في مجموعات عامة وينتظر، ولا يعرف جودة من يرد.',
      fix: 'يكتب احتياجه مرة واحدة، فيصله مرشد مؤهل وموثّق.',
    },
    {
      key: 'talent', who: 'طالب موهوب',
      title: 'المهارة لا تتحول إلى فرصة',
      line: 'يملك مهارة حقيقية، لكن بلا عملاء ولا خبرة موثّقة.',
      fix: 'يقدّم خدمته داخل الجامعة، ويبني سجل خبرة معتمدًا.',
    },
    {
      key: 'fragment', who: 'الجامعة والفرص',
      title: 'الخدمات والبرامج مبعثرة',
      line: 'دورات ومشاريع وإعلانات في قنوات منفصلة، بلا رؤية موحدة.',
      fix: 'كل الفرص في مكان واحد، ولوحة أثر للمؤسسة.',
    },
  ],
};

/* ------------------------------------------------------------------ 03 */
export const VALIDATION = {
  headline: 'المجتمع المستهدف كبير — والمشكلة نختبرها بالأدلة.',
  source: 'المركز الوطني للإحصاء والمعلومات — نشرة إحصاءات التعليم 2026',
  sourceUrl: 'https://www.muscatdaily.com/2026/09/23/education-sector-expands-as-school-enrolment-grows/',
  stats: [
    { value: 145885, label: 'طالب في التعليم العالي في عُمان' },
    { value: 39194, label: 'قبول جديد في 2024/2025' },
    { value: 47.4, decimals: 1, suffix: '%', label: 'نسبة القيد للفئة 18–22 سنة' },
  ],
  hypotheses: [
    { code: 'H1', text: 'الطلبة يجدون صعوبة في الوصول إلى دعم أكاديمي موثوق في الوقت المناسب.', method: 'مقابلات مع طلبة + استبيان في جامعة واحدة' },
    { code: 'H2', text: 'طلبة موهوبون مستعدون لتقديم خدماتهم مقابل أجر وخبرة موثّقة.', method: 'مقابلات مع طلبة يملكون مهارات تقنية وإبداعية' },
    { code: 'H3', text: 'الجامعات تحتاج رؤية موحدة لأنشطة الدعم والفرص ونتائجها.', method: 'حوار مع جهات الدعم الطلابي' },
  ],
  // TODO: add real findings here once collected, e.g. { value: '24', label: 'مقابلة مع طلبة' }.
  // When this array is non-empty, an evidence row appears on the slide automatically.
  evidence: [] as { value: string; label: string }[],
  alternatives: ['مجموعات التواصل', 'المعارف الشخصية', 'منصات العمل الحر', 'إعلانات متفرقة'],
};

/* ------------------------------------------------------------------ 04 */
export const SOLUTION = {
  headline: 'منصة واحدة تغطي الرحلة كاملة.',
  modules: [
    { key: 'support', en: 'ACADEMIC SUPPORT', title: 'الدعم الأكاديمي الذكي', line: 'مطابقة مع مرشد أقران، حجز، ومتابعة.', covers: ['need', 'match', 'service', 'execution'] },
    { key: 'market', en: 'SKILLS MARKETPLACE', title: 'سوق مهارات الطلبة', line: 'تصميم وبرمجة ومونتاج بدفع آمن عند الإتمام.', covers: ['need', 'match', 'service', 'execution', 'outcome'] },
    { key: 'learn', en: 'COURSES & OPPORTUNITIES', title: 'الدورات والفرص', line: 'مسارات تعلّم ومشاريع من الشركات والأندية.', covers: ['outcome', 'opportunity'] },
    { key: 'inst', en: 'INSTITUTION DASHBOARD', title: 'لوحة المؤسسة', line: 'تنظيم الخدمات وقياس الأثر بشكل مجمّع.', covers: ['execution', 'outcome', 'opportunity'] },
  ],
  integrity: 'رِفد يدعم التعلّم المشروع — لا إنجاز الأعمال المقيّمة نيابةً عن الطلبة.',
};

/* ------------------------------------------------------------------ 05 */
export const AGENTS = [
  { key: 'needs', en: 'Needs Agent', ar: 'وكيل الاحتياج', step: 'need',
    input: '«أحتاج أفهم الدوال العودية في Python قبل اختبار الأسبوع القادم»',
    action: 'يفهم الطلب ويصنّفه: المجال، الموضوع، المستوى، والأولوية.',
    output: 'برمجة · Python · مبتدئ · خلال 5 أيام' },
  { key: 'learning', en: 'Learning Agent', ar: 'وكيل التعلّم', step: 'match',
    input: 'الموضوع والمستوى',
    action: 'يقترح مراجعة قصيرة قبل الجلسة لتكون أكثر فاعلية.',
    output: '3 موارد مختارة + تمرين تمهيدي' },
  { key: 'matching', en: 'Matching Agent', ar: 'وكيل المطابقة', step: 'match',
    input: 'الاحتياج + توفر المرشدين + تقييماتهم',
    action: 'يرتّب المرشدين حسب المهارة الموثّقة والتقييم والتوقيت.',
    output: '3 مرشدين · أفضل تطابق 94%' },
  { key: 'execution', en: 'Execution Agent', ar: 'وكيل التنفيذ', step: 'execution', human: 'تأكيد الطالب للحجز والدفع',
    input: 'المرشد والموعد المختار',
    action: 'يحجز الجلسة، يحجز المبلغ، ويرسل التذكيرات.',
    output: 'جلسة مؤكدة · الأربعاء 4:00 م' },
  { key: 'verification', en: 'Verification Agent', ar: 'وكيل التحقق', step: 'outcome', human: 'اعتماد مشرف بشري',
    input: 'الحضور + مدة الجلسة + تقييم الطالب',
    action: 'يجمع أدلة الإتمام ويعرضها على المشرف للاعتماد.',
    output: 'سجل خبرة موثّق للمرشد' },
  { key: 'opportunity', en: 'Opportunity Agent', ar: 'وكيل الفرص', step: 'opportunity',
    input: 'السجل المحدّث للطرفين',
    action: 'يرشّح الخطوة التالية لكل طرف.',
    output: 'ورشة لسارة · طلبات مشابهة ليوسف' },
] as const;

/* ------------------------------------------------------------------ 07 */
export const MARKET = {
  headline: 'نبدأ من البريمي، ونبني نموذجًا قابلًا للتوسع.',
  verified: { value: 145885, label: 'طالب في التعليم العالي في عُمان', source: 'NCSI · نشرة إحصاءات التعليم 2026' },
  entry: [
    { key: 'launch', title: 'نقطة الانطلاق', value: 'البريمي', line: 'مجتمع جامعي نعرفه، وقريب من فريقنا.' },
    { key: 'pilot', title: 'التجربة الأولى', value: 'جامعة شريكة واحدة', line: 'طلبة المواد التأسيسية: البرمجة والرياضيات والتصميم.' },
    { key: 'payers', title: 'من يدفع أولًا', value: 'الطلبة', line: 'عمولة على الخدمات المكتملة. الاشتراك المؤسسي بعد إثبات الأثر.' },
  ],
  expansion: [
    { stage: 'المرحلة 1', where: 'البريمي', trigger: 'تجربة ناجحة في جامعة واحدة' },
    { stage: 'المرحلة 2', where: 'مؤسسات عُمان', trigger: 'معدل إتمام ورضا مثبتان' },
    { stage: 'المرحلة 3', where: 'الخليج', trigger: 'اشتراكات مؤسسية متكررة' },
  ],
  presets: {
    conservative: { label: 'محافظ', students: 2000, active: 5, perSemester: 1, ticket: 6, commission: 10 },
    base: { label: 'متوسط', students: 2000, active: 10, perSemester: 2, ticket: 8, commission: 12 },
    ambitious: { label: 'طموح', students: 2000, active: 20, perSemester: 3, ticket: 10, commission: 15 },
  },
};

/* ------------------------------------------------------------------ 08 */
export type Coverage = 'core' | 'partial' | 'none';
export const COMPETITION = {
  headline: 'لماذا يختار الطالب والجامعة رِفد؟',
  reasons: [
    { title: 'الرحلة كاملة في مكان واحد', line: 'من الاحتياج حتى الفرصة التالية، بدل التنقل بين قنوات.' },
    { title: 'مصمَّم للجامعة', line: 'طلبة موثّقون، سياسات نزاهة أكاديمية، ولوحة للمؤسسة.' },
    { title: 'المهارة تصبح دخلًا وخبرة', line: 'لا نكتفي بتقييم المهارة؛ نحوّلها إلى خدمة وسجل معتمد.' },
  ],
  players: [
    { key: 'knack', name: 'Knack', kind: 'دروس بين الأقران بتمويل جامعي',
      cover: { need: 'none', match: 'core', service: 'core', execution: 'partial', outcome: 'none', opportunity: 'none' } as Record<string, Coverage>,
      evidence: 'الجامعة تضم طلبة مرشدين وتدفع للمرشد مقابل الجلسة.', source: 'https://blog.joinknack.com/why-knack-makes-sense-for-students' },
    { key: 'riipen', name: 'Riipen', kind: 'مشاريع عملية بين المعلمين وأصحاب العمل',
      cover: { need: 'none', match: 'core', service: 'core', execution: 'none', outcome: 'partial', opportunity: 'none' } as Record<string, Coverage>,
      evidence: 'منصة تعلّم قائم على العمل تربط المعلمين وأصحاب العمل بمشاريع حقيقية.', source: 'https://www.riipen.com/virtual-internships' },
    { key: 'tutorocean', name: 'TutorOcean', kind: 'سوق دروس وأدوات تشغيل',
      cover: { need: 'none', match: 'core', service: 'core', execution: 'core', outcome: 'none', opportunity: 'none' } as Record<string, Coverage>,
      evidence: 'جدولة وفوترة وفصل افتراضي، والمرشدون يحددون أسعارهم.', source: 'https://us.fitgap.com/products/058570/tutorocean' },
    { key: 'freelance', name: 'منصات العمل الحر', kind: 'أسواق خدمات عامة',
      cover: { need: 'none', match: 'core', service: 'core', execution: 'core', outcome: 'partial', opportunity: 'none' } as Record<string, Coverage>,
      evidence: 'أسواق مفتوحة غير مخصصة للمجتمع الجامعي ولا لسياساته الأكاديمية.', source: '' },
    { key: 'rifd', name: 'رِفد', kind: 'الرحلة كاملة داخل الجامعة — مقترح',
      cover: { need: 'core', match: 'core', service: 'core', execution: 'core', outcome: 'core', opportunity: 'core' } as Record<string, Coverage>,
      evidence: 'كل القدرات مقترحة وسنتحقق منها في التجربة الأولى.', source: '' },
  ],
  footnote: 'التغطية تعكس التركيز المعلن لكل جهة فقط، ولا تعني غياب ميزات أخرى. مفهوم منافس يركّز على تقييم المهارات بالذكاء الاصطناعي لم نجد له وصفًا موثّقًا، فلم ندرجه.',
};

/* ------------------------------------------------------------------ 09 */
export const BUSINESS = {
  headline: 'من يدفع؟ ولماذا؟',
  payers: [
    { key: 'b2c', tag: 'B2C', who: 'الطالب', pays: 'قيمة الخدمة عند إتمامها', rifd: 'عمولة 10–15% من كل خدمة مكتملة', why: 'دعم موثوق في وقته، بدفع آمن لا يُحرَّر إلا بعد الإتمام.' },
    { key: 'b2b', tag: 'B2B', who: 'الجامعة', pays: 'اشتراك سنوي', rifd: 'يُسعَّر حسب عدد الطلبة بعد التجربة', why: 'تنظيم خدمات الدعم والفرص وقياس أثرها في لوحة واحدة.' },
  ],
  more: [
    { who: 'الشركات', what: 'رسوم على المشاريع المعتمدة' },
    { who: 'مزودو التدريب', what: 'اشتراك أو رسوم لكل تسجيل' },
    { who: 'الجامعة', what: 'رسوم إعداد وتكامل لمرة واحدة' },
  ],
  costs: ['التطوير والاستضافة', 'تكلفة نماذج الذكاء الاصطناعي', 'المبيعات والشراكات', 'الدعم والثقة والسلامة', 'رسوم الدفع الإلكتروني'],
  canvas: [
    { ar: 'شرائح العملاء', items: ['طلبة يحتاجون دعمًا', 'طلبة يقدّمون مهاراتهم', 'الجامعات', 'الشركات ومزودو التدريب'] },
    { ar: 'القيمة المقدمة', items: ['دعم موثوق في وقته', 'مهارات تتحول إلى دخل وخبرة', 'فرص في مكان واحد', 'رؤية مؤسسية للأثر'] },
    { ar: 'القنوات', items: ['تطبيق ويب وجوال', 'شراكات الحرم الجامعي', 'الأندية والسفراء'] },
    { ar: 'العلاقة مع العملاء', items: ['خدمة ذاتية ذكية', 'تقييمات وسمعة موثّقة', 'مدير حساب للجامعات'] },
    { ar: 'مصادر الإيرادات', items: ['عمولة المعاملات', 'اشتراكات مؤسسية', 'رسوم مشاريع وتدريب'] },
    { ar: 'الموارد الرئيسية', items: ['منظومة الوكلاء', 'مجتمع المقدمين', 'بيانات المطابقة'] },
    { ar: 'الأنشطة الرئيسية', items: ['تطوير المنصة', 'التحقق والجودة', 'الشراكات الجامعية'] },
    { ar: 'الشركاء الرئيسيون', items: ['الجامعات', 'الأندية', 'الشركات', 'بوابات الدفع'] },
    { ar: 'هيكل التكاليف', items: ['التطوير والاستضافة', 'الذكاء الاصطناعي', 'المبيعات', 'الدعم والسلامة'] },
  ],
};

/* ------------------------------------------------------------------ 10 */
export const ROADMAP = {
  headline: 'نبدأ صغيرًا. نثبت القيمة. ثم نتوسع.',
  achieved: ['الهوية البصرية', 'تصور المنتج ونموذج العمل', 'نموذج تفاعلي ببيانات توضيحية'],
  phases: [
    { key: 'p1', ar: 'التحقق', window: 'الأسابيع 1–6', goal: 'تأكيد الاحتياج والاستعداد للدفع.', milestones: ['مقابلات مع طلبة ومقدمي خدمات', 'استبيان في جامعة واحدة', 'خطاب اهتمام من جهة جامعية'], metric: 'نسبة من يواجه المشكلة ونطاق السعر المقبول' },
    { key: 'p2', ar: 'النموذج الأولي', window: 'الأشهر 2–4', goal: 'إطلاق الدعم الأكاديمي وخدمات الطلبة.', milestones: ['تسجيل وملفات مهارات', 'طلب ← مطابقة ← حجز', 'دفع آمن واعتماد بشري'], metric: 'زمن الوصول لأول تطابق' },
    { key: 'p3', ar: 'التجربة', window: 'فصل دراسي', goal: 'اختبار طلبات حقيقية في جامعة شريكة.', milestones: ['تجربة في جامعة واحدة', 'لوحة متابعة للمؤسسة', 'مراجعة النزاهة الأكاديمية'], metric: 'معدل الإتمام والرضا والإيراد لكل معاملة' },
    { key: 'p4', ar: 'النمو المؤسسي', window: 'بعد التحقق', goal: 'اشتراكات جامعية وتوسع مدروس.', milestones: ['اشتراكات مؤسسية', 'مشاريع الشركات والتدريب', 'التوسع داخل عُمان ثم الخليج'], metric: 'عدد المؤسسات والاحتفاظ بها' },
  ],
};

/* ------------------------------------------------------------------ 11 */
export const TEAM = {
  headline: 'الفريق والخطوة التالية',
  // TODO: add the real team. Each entry: { name, role, capability }.
  // While empty, the slide shows the execution roles instead of placeholder cards.
  members: [] as { name: string; role: string; capability: string }[],
  roles: [
    { role: 'المنتج والشراكات', duty: 'قيادة التحقق وبناء الشراكة الجامعية الأولى' },
    { role: 'التقنية والذكاء الاصطناعي', duty: 'بناء المنصة ومنظومة الوكلاء' },
    { role: 'التصميم وتجربة الطالب', duty: 'واجهة بسيطة يثق بها الطالب' },
    { role: 'النمو والمجتمع', duty: 'استقطاب المقدمين والأندية' },
  ],
  asks: [
    { title: 'جامعة شريكة للتجربة', line: 'للوصول إلى الطلبة وقياس الأثر خلال فصل دراسي' },
    { title: 'إرشاد متخصص', line: 'في التعليم العالي والأسواق الرقمية' },
    // TODO: add a funding or support figure here only if the team confirms one.
  ],
  closing: 'لأن المهارات لا ينبغي أن تبقى فرصًا ضائعة.',
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
