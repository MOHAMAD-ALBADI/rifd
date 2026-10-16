/* Synthetic data for the interactive MVP demo. Every name here is fictional. */

export type Category = 'programming' | 'math' | 'design' | 'writing' | 'video';

export const CATEGORY_LABEL: Record<Category, string> = {
  programming: 'برمجة',
  math: 'رياضيات',
  design: 'تصميم',
  writing: 'كتابة أكاديمية',
  video: 'مونتاج',
};

const KEYWORDS: Record<Category, string[]> = {
  programming: ['python', 'بايثون', 'java', 'جافا', 'برمج', 'كود', 'دوال', 'recursion', 'عودي', 'خوارزم', 'sql', 'قاعدة بيانات', 'c++', 'javascript', 'react', 'تطبيق', 'موقع'],
  math: ['رياضيات', 'تفاضل', 'تكامل', 'جبر', 'إحصاء', 'احصاء', 'calculus', 'statistics', 'معادل', 'مصفوف'],
  design: ['تصميم', 'شعار', 'هوية', 'بوستر', 'figma', 'فيجما', 'design', 'logo', 'ui', 'واجهة'],
  writing: ['كتابة', 'تقرير', 'مراجع', 'بحث', 'إنجليزي', 'انجليزي', 'essay', 'writing', 'عرض تقديمي'],
  video: ['فيديو', 'مونتاج', 'تصوير', 'video', 'premiere', 'ريلز', 'reels'],
};

const TOPIC_HINTS: { re: RegExp; topic: string }[] = [
  { re: /recursion|عودي/i, topic: 'الدوال العودية' },
  { re: /python|بايثون/i, topic: 'Python' },
  { re: /sql|قاعدة بيانات/i, topic: 'SQL' },
  { re: /تفاضل|تكامل|calculus/i, topic: 'التفاضل والتكامل' },
  { re: /إحصاء|احصاء|statistics/i, topic: 'الإحصاء' },
  { re: /شعار|logo|هوية/i, topic: 'هوية بصرية' },
  { re: /figma|فيجما|ui|واجهة/i, topic: 'تصميم واجهات' },
  { re: /مونتاج|فيديو|reels|ريلز/i, topic: 'مونتاج فيديو' },
  { re: /تقرير|بحث|مراجع/i, topic: 'كتابة التقارير' },
];

/** Assignment-completion red flags → academic-integrity guard. */
const INTEGRITY_RE = /(حل|اكتب|اعمل|سوّ|سو)\s*(لي)?\s*(الواجب|الاختبار|الامتحان|المشروع النهائي)|نيابة|بدالي|assignment for me|do my (homework|exam)/i;

export interface Analysis {
  category: Category;
  confidence: number;
  topic: string;
  urgency: 'عاجل' | 'هذا الأسبوع' | 'مرن';
  mode: 'جلسة إرشاد' | 'خدمة';
  integrityFlag: boolean;
}

export function analyzeRequest(text: string): Analysis {
  const t = text.toLowerCase();
  let best = 'programming' as Category;
  let bestScore = 0;
  let total = 0;
  (Object.keys(KEYWORDS) as Category[]).forEach((c) => {
    const s = KEYWORDS[c].reduce((n, k) => n + (t.includes(k.toLowerCase()) ? 1 : 0), 0);
    total += s;
    if (s > bestScore) { bestScore = s; best = c; }
  });
  const topic = TOPIC_HINTS.find((h) => h.re.test(text))?.topic ?? CATEGORY_LABEL[best];
  const urgency = /اليوم|غدا|غدًا|بكرة|عاجل|urgent/.test(text) ? 'عاجل' : /الأسبوع|اسبوع|أسبوع|اختبار|امتحان/.test(text) ? 'هذا الأسبوع' : 'مرن';
  const mode = best === 'design' || best === 'video' ? 'خدمة' : 'جلسة إرشاد';
  const confidence = bestScore === 0 ? 0.55 : Math.min(0.97, 0.7 + (bestScore / Math.max(total, 1)) * 0.25 + bestScore * 0.02);
  return { category: best, confidence, topic, urgency, mode, integrityFlag: INTEGRITY_RE.test(text) };
}

export interface Provider {
  id: string;
  name: string;
  major: string;
  year: string;
  skills: Category[];
  tags: string[];
  rating: number;
  sessions: number;
  rate: number; // OMR — synthetic
  slots: string[];
  initials: string;
}

export const PROVIDERS: Provider[] = [
  { id: 'p1', name: 'يوسف الحارثي', major: 'علوم الحاسوب', year: 'السنة الرابعة', skills: ['programming'], tags: ['Python', 'الدوال العودية', 'هياكل البيانات'], rating: 4.9, sessions: 23, rate: 6, slots: ['الثلاثاء 6:00 م', 'الأربعاء 4:00 م', 'الخميس 10:00 ص'], initials: 'ي ح' },
  { id: 'p2', name: 'مريم البلوشية', major: 'هندسة البرمجيات', year: 'السنة الثالثة', skills: ['programming', 'math'], tags: ['Python', 'SQL', 'الخوارزميات'], rating: 4.8, sessions: 17, rate: 5, slots: ['الأربعاء 2:00 م', 'الخميس 5:00 م'], initials: 'م ب' },
  { id: 'p3', name: 'أحمد الكعبي', major: 'نظم المعلومات', year: 'السنة الرابعة', skills: ['programming'], tags: ['Java', 'Python', 'قواعد البيانات'], rating: 4.6, sessions: 9, rate: 5, slots: ['الأحد 7:00 م', 'الإثنين 3:00 م'], initials: 'أ ك' },
  { id: 'p4', name: 'هاجر السعدية', major: 'الرياضيات', year: 'السنة الثالثة', skills: ['math'], tags: ['التفاضل والتكامل', 'الإحصاء'], rating: 4.9, sessions: 31, rate: 6, slots: ['الإثنين 5:00 م', 'الأربعاء 11:00 ص'], initials: 'ه س' },
  { id: 'p5', name: 'سالم الشامسي', major: 'التصميم الجرافيكي', year: 'السنة الرابعة', skills: ['design'], tags: ['هوية بصرية', 'Figma', 'بوستر'], rating: 4.9, sessions: 14, rate: 25, slots: ['تسليم خلال 5 أيام', 'تسليم خلال 7 أيام'], initials: 'س ش' },
  { id: 'p6', name: 'نور المعمرية', major: 'الوسائط المتعددة', year: 'السنة الثالثة', skills: ['design', 'video'], tags: ['مونتاج فيديو', 'تصميم واجهات'], rating: 4.7, sessions: 11, rate: 20, slots: ['تسليم خلال 4 أيام', 'تسليم خلال 6 أيام'], initials: 'ن م' },
  { id: 'p7', name: 'عائشة الغيثية', major: 'اللغة الإنجليزية', year: 'السنة الرابعة', skills: ['writing'], tags: ['كتابة التقارير', 'التوثيق والمراجع'], rating: 4.8, sessions: 19, rate: 5, slots: ['الثلاثاء 1:00 م', 'الخميس 3:00 م'], initials: 'ع غ' },
];

export function matchProviders(a: Analysis): (Provider & { score: number })[] {
  return PROVIDERS.filter((p) => p.skills.includes(a.category))
    .map((p) => {
      const topicHit = p.tags.some((t) => a.topic.includes(t) || t.includes(a.topic)) ? 1 : 0;
      const score = Math.round(Math.min(98, 62 + topicHit * 18 + (p.rating - 4.5) * 24 + Math.min(p.sessions, 30) * 0.35));
      return { ...p, score };
    })
    .sort((x, y) => y.score - x.score)
    .slice(0, 3);
}

export const SAMPLE_REQUESTS = [
  'أحتاج أفهم الدوال العودية (recursion) في Python قبل اختبار الأسبوع القادم.',
  'عندي صعوبة في التفاضل والتكامل وأحتاج جلستين مراجعة هذا الأسبوع.',
  'نادي الابتكار يحتاج تصميم شعار وهوية بصرية لفعالية الشهر القادم.',
];

/* Mini-demo 2: club design project */
export const CLUB_PROJECT = {
  club: 'نادي الابتكار الطلابي (توضيحي)',
  brief: 'شعار وهوية مصغّرة لفعالية «أسبوع الابتكار»',
  budget: 30,
  offers: [
    { id: 'o1', name: 'سالم الشامسي', days: 5, price: 28, note: '3 مقترحات + ملف هوية مصغّر', rating: 4.9 },
    { id: 'o2', name: 'نور المعمرية', days: 4, price: 25, note: 'مقترحان + قوالب سوشال', rating: 4.7 },
  ],
  milestones: ['اعتماد الموجز', 'مسودات الشعار', 'المراجعة والتعديل', 'التسليم النهائي'],
};
