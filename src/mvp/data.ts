/* RIFD MVP — demo data. Everything here is ILLUSTRATIVE: names, ratings and prices are
   sample data for the prototype, not real users or transactions. */

export const SUBJECTS: Record<string, string[]> = {
  'برمجة Python': ['Loops (الحلقات)', 'Functions (الدوال)', 'Lists & Dictionaries', 'OOP (البرمجة الكائنية)'],
  'تفاضل وتكامل': ['النهايات', 'المشتقات', 'التكامل', 'المتسلسلات'],
  'فيزياء': ['الميكانيكا', 'الكهرباء والمغناطيسية', 'الموجات'],
  'الدوائر الكهربائية': ['قانونا أوم وكيرشوف', 'التيار المتردد', 'المحولات'],
  'الإحصاء': ['الاحتمالات', 'الاختبارات الإحصائية', 'الانحدار'],
  'اللغة الإنجليزية': ['Writing', 'Grammar', 'Presentation Skills'],
  'قواعد البيانات': ['SQL', 'التطبيع (Normalization)', 'ER Diagrams'],
};

export type SessionMode = 'online' | 'inperson';
export interface Tutor {
  id: number; name: string; sub: string[]; topics: string[]; rate: number; rating: number; n: number;
  uni: string; modes: SessionMode[]; hours: string[];
}

export const TUTORS: Tutor[] = [
  { id: 1, name: 'سالم الحارثي', sub: ['برمجة Python', 'قواعد البيانات'], topics: ['Loops (الحلقات)', 'Functions (الدوال)', 'SQL'], rate: 6, rating: 4.9, n: 48, uni: 'جامعة السلطان قابوس', modes: ['online', 'inperson'], hours: ['16:00', '18:00', '20:00'] },
  { id: 2, name: 'مريم البلوشية', sub: ['برمجة Python', 'الإحصاء'], topics: ['Lists & Dictionaries', 'OOP (البرمجة الكائنية)', 'الاحتمالات', 'الانحدار'], rate: 5, rating: 4.8, n: 31, uni: 'جامعة السلطان قابوس', modes: ['online'], hours: ['17:00', '19:00', '21:00'] },
  { id: 3, name: 'خالد الراشدي', sub: ['برمجة Python'], topics: ['Loops (الحلقات)', 'Functions (الدوال)'], rate: 4, rating: 4.5, n: 12, uni: 'جامعة نزوى', modes: ['online', 'inperson'], hours: ['15:00', '16:00', '20:00'] },
  { id: 4, name: 'أمل الكندية', sub: ['تفاضل وتكامل', 'فيزياء'], topics: ['النهايات', 'المشتقات', 'التكامل', 'الميكانيكا'], rate: 7, rating: 4.9, n: 57, uni: 'جامعة السلطان قابوس', modes: ['online', 'inperson'], hours: ['16:00', '18:00', '19:00'] },
  { id: 5, name: 'يوسف الشكيلي', sub: ['الدوائر الكهربائية', 'فيزياء'], topics: ['قانونا أوم وكيرشوف', 'التيار المتردد', 'المحولات', 'الكهرباء والمغناطيسية'], rate: 6, rating: 4.7, n: 26, uni: 'جامعة صحار', modes: ['online', 'inperson'], hours: ['17:00', '18:00', '21:00'] },
  { id: 6, name: 'ريم الهنائية', sub: ['اللغة الإنجليزية'], topics: ['Writing', 'Grammar', 'Presentation Skills'], rate: 5, rating: 4.8, n: 40, uni: 'جامعة السلطان قابوس', modes: ['online'], hours: ['16:00', '17:00', '20:00'] },
  { id: 7, name: 'ناصر العامري', sub: ['تفاضل وتكامل', 'الإحصاء'], topics: ['المتسلسلات', 'التكامل', 'الاختبارات الإحصائية'], rate: 4, rating: 4.4, n: 9, uni: 'جامعة نزوى', modes: ['online'], hours: ['18:00', '20:00', '22:00'] },
  { id: 8, name: 'هدى المعمرية', sub: ['قواعد البيانات', 'برمجة Python'], topics: ['SQL', 'التطبيع (Normalization)', 'ER Diagrams', 'Functions (الدوال)'], rate: 6, rating: 4.9, n: 35, uni: 'جامعة صحار', modes: ['online', 'inperson'], hours: ['16:00', '19:00', '21:00'] },
];

export const LEVELS: [number, string][] = [[1, 'مبتدئ تمامًا'], [2, 'أساسيات ضعيفة'], [3, 'متوسط'], [4, 'جيد'], [5, 'متقدم']];
export type Goal = 'understand' | 'practice' | 'review';
export const GOALS: Record<Goal, string> = { understand: 'فهم المفهوم من الصفر', practice: 'تدريب على تمارين', review: 'مراجعة قبل الاختبار' };
export const DAYS_OPTIONS = [1, 2, 3, 5, 7, 14];

/** Platform commission — inside the 10–15% range stated on the business-model slide. */
export const FEE = 0.15;
/** Demo wallet opening balance (simulation only). */
export const START_BALANCE = 40;

export const INSTITUTIONS: Record<string, string[]> = {
  'الجامعات الحكومية': ['جامعة السلطان قابوس', 'جامعة التقنية والعلوم التطبيقية (UTAS)'],
  'الجامعات الخاصة': ['جامعة نزوى', 'جامعة صحار', 'جامعة ظفار', 'جامعة مسقط', 'جامعة البريمي', 'جامعة الشرقية', 'الجامعة الألمانية للتكنولوجيا (GUtech)', 'جامعة الباطنة'],
  'الكليات': ['كلية البريمي الجامعية', 'كلية مزون', 'كلية الشرق الأوسط', 'كلية الخليج', 'كلية مجان', 'كلية عمان البحرية الدولية', 'كلية العلوم الشرعية', 'كلية الدراسات المصرفية والمالية', 'كلية عمان للعلوم الصحية'],
  'الكليات المهنية': ['الكلية المهنية بالسيب', 'الكلية المهنية بصحم', 'الكلية المهنية بصلالة', 'الكلية المهنية بصور', 'الكلية المهنية بعبري', 'الكلية المهنية بشناص', 'الكلية المهنية بالبريمي', 'الكلية المهنية بالخابورة'],
  'أخرى': ['مؤسسة أخرى'],
};

export const RATING_TAGS = ['شرح واضح', 'أمثلة مفيدة', 'التزام بالموعد', 'صبر وتشجيع', 'تمارين مناسبة'];

/* ------------------------------------------------------------ Digital Institute */
export interface QuizQ { q: string; options: string[]; answer: number }
export interface Course {
  id: string; title: string; trainer: string; trainerNote: string; hours: number; price: number; rating: number;
  subject?: string; topics?: string[]; skill: string; lessons: string[]; quiz: QuizQ[];
}

export const COURSES: Course[] = [
  {
    id: 'py101', title: 'أساسيات Python للمبتدئين', trainer: 'يوسف الخاطري', trainerNote: 'مدرب طالب · سنة رابعة حاسوب',
    hours: 6, price: 5, rating: 4.8, subject: 'برمجة Python', topics: ['Loops (الحلقات)', 'Functions (الدوال)', 'Lists & Dictionaries'], skill: 'برمجة Python',
    lessons: ['المتغيرات وأنواع البيانات', 'الشروط والحلقات', 'الدوال وإعادة الاستخدام', 'القوائم والقواميس'],
    quiz: [
      { q: 'ما ناتج len([1, 2, 3]) ؟', options: ['2', '3', '4'], answer: 1 },
      { q: 'أي كلمة تُعرّف دالة في Python؟', options: ['func', 'function', 'def'], answer: 2 },
      { q: 'كم مرة تُنفَّذ الحلقة for i in range(3) ؟', options: ['مرتان', '3 مرات', '4 مرات'], answer: 1 },
    ],
  },
  {
    id: 'calc1', title: 'التفاضل خطوة بخطوة', trainer: 'شيماء البادية', trainerNote: 'مدربة طالبة · رياضيات',
    hours: 5, price: 5, rating: 4.7, subject: 'تفاضل وتكامل', topics: ['النهايات', 'المشتقات', 'التكامل'], skill: 'تفاضل وتكامل',
    lessons: ['فكرة النهاية', 'قواعد الاشتقاق', 'تطبيقات المشتقة', 'مدخل إلى التكامل'],
    quiz: [
      { q: 'مشتقة x² هي:', options: ['x', '2x', 'x³ / 3'], answer: 1 },
      { q: 'قيمة النهاية lim (x+3) عندما x ← 2 :', options: ['5', '6', '3'], answer: 0 },
      { q: '∫ 2x dx يساوي:', options: ['2', 'x² + C', '2x² + C'], answer: 1 },
    ],
  },
  {
    id: 'eng-w', title: 'الكتابة الأكاديمية بالإنجليزية', trainer: 'نوال السعيدية', trainerNote: 'مدربة طالبة · لغة إنجليزية',
    hours: 4, price: 4, rating: 4.8, subject: 'اللغة الإنجليزية', topics: ['Writing', 'Grammar'], skill: 'كتابة وتدقيق إنجليزي',
    lessons: ['بناء الجملة الكاملة', 'الفقرة والفكرة الرئيسية', 'Thesis Statement', 'التدقيق الذاتي'],
    quiz: [
      { q: 'أي مما يلي جملة كاملة؟', options: ['Because it rained.', 'The lecture started late.', 'After the exam.'], answer: 1 },
      { q: 'أين تأتي جملة الأطروحة (Thesis) عادةً؟', options: ['في المقدمة', 'في الخاتمة فقط', 'في المراجع'], answer: 0 },
      { q: 'اختر الصحيح:', options: ['There results were clear.', "They're results were clear.", 'Their results were clear.'], answer: 2 },
    ],
  },
  {
    id: 'brand', title: 'تصميم الهوية البصرية', trainer: 'سالم الشامسي', trainerNote: 'مدرب طالب · تصميم جرافيكي',
    hours: 6, price: 5, rating: 4.9, skill: 'تصميم جرافيك',
    lessons: ['ما هي الهوية البصرية؟', 'الشعار والألوان والخطوط', 'دليل الهوية', 'تجهيز الملفات للتسليم'],
    quiz: [
      { q: 'الغرض الأساسي من دليل الهوية هو:', options: ['توحيد استخدام الشعار والألوان والخطوط', 'زيادة عدد الألوان', 'تغيير الشعار في كل منشور'], answer: 0 },
      { q: 'أي صيغة أنسب لشعار يُكبَّر دون فقد الجودة؟', options: ['JPG', 'SVG', 'GIF'], answer: 1 },
      { q: 'التباين العالي بين النص والخلفية يحسّن:', options: ['حجم الملف', 'قابلية القراءة', 'سرعة الطباعة'], answer: 1 },
    ],
  },
];

/* ------------------------------------------------------------ Mini Market */
export const SKILLS = ['تصميم جرافيك', 'برمجة Python', 'مونتاج فيديو', 'كتابة وتدقيق إنجليزي', 'عروض تقديمية'];

export interface Opportunity {
  id: string; title: string; client: string; clientType: string; skill: string; budget: number; days: number;
  brief: string; deliverables: string[];
  /** Integrity screen: graded coursework is rejected automatically. */
  blocked?: string;
}

export const OPPORTUNITIES: Opportunity[] = [
  { id: 'o1', title: 'هوية بصرية لفعالية «أسبوع الابتكار»', client: 'نادي الابتكار', clientType: 'نادٍ طلابي', skill: 'تصميم جرافيك', budget: 28, days: 5,
    brief: 'شعار للفعالية وثلاثة قوالب منشورات بمقاسات التواصل الاجتماعي، بألوان النادي.', deliverables: ['شعار الفعالية (SVG + PNG)', '3 قوالب منشورات', 'دليل ألوان مختصر'] },
  { id: 'o2', title: 'سكربت Python لتنظيم بيانات الحضور', client: 'نادي البرمجة', clientType: 'نادٍ طلابي', skill: 'برمجة Python', budget: 20, days: 4,
    brief: 'سكربت يقرأ ملف حضور الفعاليات (CSV) ويخرج تقريرًا بعدد الحضور لكل فعالية.', deliverables: ['ملف السكربت مع تعليقات', 'تقرير تجريبي', 'تعليمات تشغيل'] },
  { id: 'o3', title: 'قالب عرض لمشروع تخرّج', client: 'منى العبرية', clientType: 'طالبة هندسة', skill: 'عروض تقديمية', budget: 15, days: 3,
    brief: 'قالب عرض احترافي من 10 شرائح بهوية موحّدة — المحتوى العلمي تكتبه الطالبة بنفسها.', deliverables: ['قالب 10 شرائح', 'أيقونات ورسوم بيانية قابلة للتعديل'] },
  { id: 'o4', title: 'فيديو تعريفي قصير بالنادي', client: 'مكتب الأنشطة الطلابية', clientType: 'جهة جامعية', skill: 'مونتاج فيديو', budget: 18, days: 6,
    brief: 'مونتاج فيديو مدته 60 ثانية من لقطات مصوّرة مسبقًا، مع ترجمة نصية.', deliverables: ['فيديو 60 ثانية (MP4)', 'نسخة عمودية للتواصل الاجتماعي'] },
  { id: 'o5', title: 'تدقيق لغوي لنشرة النادي الإنجليزية', client: 'نادي اللغة الإنجليزية', clientType: 'نادٍ طلابي', skill: 'كتابة وتدقيق إنجليزي', budget: 10, days: 2,
    brief: 'مراجعة لغوية لنشرة النادي الشهرية (4 صفحات) وتصحيح الأخطاء النحوية والإملائية.', deliverables: ['النشرة بعد التدقيق', 'قائمة بالتعديلات'] },
  { id: 'o6', title: 'حل واجب مقرر البرمجة 2', client: 'طلب مجهول', clientType: 'طالب', skill: 'برمجة Python', budget: 15, days: 1,
    brief: 'حل الواجب المقيّم وتسليمه باسم الطالب.', deliverables: [], blocked: 'رُفض تلقائيًا: إنجاز عمل مقيّم نيابةً عن طالب يخالف سياسة النزاهة الأكاديمية.' },
];
