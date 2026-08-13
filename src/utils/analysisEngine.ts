import {
  AnalysisResult,
  CareerDirection,
  DimensionScoreMap,
  Language,
  NTCCluster,
  NTCSpecialty,
  ThinkingDimensionKey,
  UserAnswer,
} from '../types';
import { NTC_CLUSTERS } from '../data/ntcData';

export const DIMENSION_LABELS: Record<ThinkingDimensionKey, Record<Language, string>> = {
  analytical: { en: 'Analytical Thinking', ru: 'Аналитическое мышление', tg: 'Тафаккури аналитикӣ' },
  systems: { en: 'Systems Architecture', ru: 'Системная архитектура', tg: 'Меъмории системӣ' },
  creativity: { en: 'Creativity & Innovation', ru: 'Творчество и инновации', tg: 'Эҷодкорӣ ва инноватсия' },
  curiosity: { en: 'Intellectual Curiosity', ru: 'Интеллектуальное любопытство', tg: 'Завқи кунҷковӣ' },
  problemSolving: { en: 'Complex Problem Solving', ru: 'Решение сложных задач', tg: 'Ҳалли мушкилоти мураккаб' },
  leadership: { en: 'Strategic Leadership', ru: 'Стратегическое лидерство', tg: 'Роҳбарии стратегӣ' },
  communication: { en: 'Communication & Empathy', ru: 'Коммуникация и эмпатия', tg: 'Муошират ва эмпатия' },
  uncertaintyTolerance: { en: 'Tolerance for Uncertainty', ru: 'Толерантность к неопределенности', tg: 'Устуворӣ дар номуайянӣ' },
  scientific: { en: 'Scientific Orientation', ru: 'Научная ориентация', tg: 'Тамоюли илмӣ' },
  technical: { en: 'Technical & Engineering', ru: 'Техническая ориентация', tg: 'Тамоюли техникӣ' },
  social: { en: 'Social & Human Impact', ru: 'Социальная ориентация', tg: 'Тамоюли иҷтимоӣ' },
  practical: { en: 'Practical Execution', ru: 'Практическое исполнение', tg: 'Иҷрои амалӣ' },
};

export function calculateDimensionScores(answers: UserAnswer[]): DimensionScoreMap {
  const totals: Record<ThinkingDimensionKey, number> = {
    analytical: 0,
    systems: 0,
    creativity: 0,
    curiosity: 0,
    problemSolving: 0,
    leadership: 0,
    communication: 0,
    uncertaintyTolerance: 0,
    scientific: 0,
    technical: 0,
    social: 0,
    practical: 0,
  };

  const counts: Record<ThinkingDimensionKey, number> = { ...totals };

  answers.forEach((ans) => {
    Object.entries(ans.dimensionWeights).forEach(([key, weight]) => {
      const dimKey = key as ThinkingDimensionKey;
      if (weight) {
        totals[dimKey] += weight;
        counts[dimKey] += 25; // max possible weight per answer
      }
    });
  });

  const normalizedScores: DimensionScoreMap = { ...totals };
  (Object.keys(totals) as ThinkingDimensionKey[]).forEach((dim) => {
    const raw = totals[dim];
    const score = Math.min(98, Math.max(45, Math.round((raw / Math.max(1, counts[dim])) * 100) + 35));
    normalizedScores[dim] = score;
  });

  return normalizedScores;
}

export function generatePersonalizedWhyList(
  answers: UserAnswer[],
  scores: DimensionScoreMap,
  lang: Language
): string[] {
  const rationaleTags = new Set(answers.map((a) => a.rationaleTag));
  const whyPoints: string[] = [];

  // Tailored explanations based on choice patterns
  if (rationaleTags.has('deconstruct_systems') || rationaleTags.has('mapping_feedback_loops') || scores.systems > 75) {
    if (lang === 'en') {
      whyPoints.push('You consistently approach complex problems by breaking down internal mechanisms and mapping system dependencies before taking action.');
    } else if (lang === 'ru') {
      whyPoints.push('Вы системно подходите к неизвестным задачам, декомпозируя внутренние механизмы и связывая зависимости до начала действий.');
    } else {
      whyPoints.push('Шумо ба масъалаҳои мураккаб системно муносибат карда, пеш аз амал механизмҳо ва алоқаҳои дохилиро меомӯзед.');
    }
  }

  if (rationaleTags.has('data_diagnosis') || rationaleTags.has('critical_assumption_audit') || scores.analytical > 75) {
    if (lang === 'en') {
      whyPoints.push('Your choices reveal a strong analytical instinct that relies on data verification and empirical logic rather than guesswork.');
    } else if (lang === 'ru') {
      whyPoints.push('Ваши ответы демонстрируют аналитический инстинкт, опирающийся на факты и эмпирическую логику вместо догадок.');
    } else {
      whyPoints.push('Ҷавобҳои шумо инстинкти қавии аналитикиро нишон медиҳанд, ки ба факту рақамҳо такя мекунад.');
    }
  }

  if (rationaleTags.has('unconventional_pivoting') || rationaleTags.has('thriving_in_ambiguity') || scores.uncertaintyTolerance > 75) {
    if (lang === 'en') {
      whyPoints.push('You show a high tolerance for ambiguity, preferring to experiment through action rather than being paralyzed by incomplete instructions.');
    } else if (lang === 'ru') {
      whyPoints.push('Вы обладаете высокой устойчивостью к неопределенности и предпочитаете эксперимент страху перед неизвестностью.');
    } else {
      whyPoints.push('Шумо ба номуайянӣ устувор ҳастед ва таҷрибаи амалиро аз тарси ноаён афзалтар медонед.');
    }
  }

  if (rationaleTags.has('building_working_tools') || rationaleTags.has('flawless_execution') || scores.practical > 75) {
    if (lang === 'en') {
      whyPoints.push('You are deeply driven by tangible execution—you measure true progress by whether a tool or prototype actually works.');
    } else if (lang === 'ru') {
      whyPoints.push('Вас мотивирует реальный результат: вы измеряете успех созданием работающих прототипов и инструментов.');
    } else {
      whyPoints.push('Шуморо натиҷаи воқеӣ ҳавасманд мекунад: муваффақиятро дар сохтани прототипҳои кории воқеӣ мебинед.');
    }
  }

  if (rationaleTags.has('empowering_others') || rationaleTags.has('humanitarian_impact') || scores.social > 75) {
    if (lang === 'en') {
      whyPoints.push('You evaluate solutions based on their tangible human benefit and their capacity to empower others in your community.');
    } else if (lang === 'ru') {
      whyPoints.push('Вы оцениваете решения через призму реальной пользы для людей и возможности помогать окружающим.');
    } else {
      whyPoints.push('Шумо қарорҳоро аз рӯи манфиати воқеӣ барои одамон ва имконияти ёрӣ расонидан ба дигарон баҳо медиҳед.');
    }
  }

  // Fallback defaults if fewer than 3 tags matched
  if (whyPoints.length < 3) {
    if (lang === 'en') {
      whyPoints.push('You show a natural balance between intellectual curiosity and structured problem solving.');
      whyPoints.push('You prioritize high-integrity solutions that remain sustainable over long periods.');
    } else if (lang === 'ru') {
      whyPoints.push('Вы демонстрируете гармоничный баланс между куражом исследований и чётким решением проблем.');
      whyPoints.push('Вы отдаете приоритет надежным решениям, сохраняющим устойчивость на долгой дистанции.');
    } else {
      whyPoints.push('Шумо мувозинати байни кунҷковии илмӣ ва ҳалли дақиқи мушкилотро нишон медиҳед.');
      whyPoints.push('Шумо қарорҳои эътимоднокеро, ки дар дарозмуддат устувор мемонанд, афзал медонед.');
    }
  }

  return whyPoints.slice(0, 4);
}

export function buildLocalAnalysis(answers: UserAnswer[], lang: Language): AnalysisResult {
  const scores = calculateDimensionScores(answers);
  const rationaleTags = new Set(answers.map((a) => a.rationaleTag));

  // Compute domain profile scores with rationale tag bonuses
  let medicalBonus = 0;
  if (rationaleTags.has('medical_diagnostics')) medicalBonus += 20;
  if (rationaleTags.has('biological_life_sciences')) medicalBonus += 20;
  if (rationaleTags.has('healthcare_system')) medicalBonus += 20;
  if (rationaleTags.has('cellular_diagnostics')) medicalBonus += 20;
  if (rationaleTags.has('patient_first_ethics')) medicalBonus += 20;
  if (rationaleTags.has('surgical_medical_research')) medicalBonus += 20;
  if (rationaleTags.has('health_safety_audit')) medicalBonus += 20;
  if (rationaleTags.has('empirical_medical_method')) medicalBonus += 20;
  if (rationaleTags.has('medical_emergency_command')) medicalBonus += 20;
  if (rationaleTags.has('medical_healing_legacy')) medicalBonus += 20;
  if (rationaleTags.has('clinical_symposium')) medicalBonus += 20;
  if (rationaleTags.has('medical_diagnosis_breakthrough')) medicalBonus += 20;

  let legalBonus = 0;
  if (rationaleTags.has('legal_audit')) legalBonus += 20;
  if (rationaleTags.has('legal_mastery')) legalBonus += 20;
  if (rationaleTags.has('legislative_reform')) legalBonus += 20;
  if (rationaleTags.has('legal_mediation')) legalBonus += 20;
  if (rationaleTags.has('human_rights_law')) legalBonus += 20;
  if (rationaleTags.has('contract_risk_audit')) legalBonus += 20;
  if (rationaleTags.has('precedent_analysis')) legalBonus += 20;
  if (rationaleTags.has('legal_governance_command')) legalBonus += 20;
  if (rationaleTags.has('legal_justice_legacy')) legalBonus += 20;
  if (rationaleTags.has('jurisprudence_symposium')) legalBonus += 20;
  if (rationaleTags.has('legal_precedent_breakthrough')) legalBonus += 20;

  let pedagogyBonus = 0;
  if (rationaleTags.has('pedagogical_mentorship')) pedagogyBonus += 20;
  if (rationaleTags.has('educational_empowerment')) pedagogyBonus += 20;
  if (rationaleTags.has('educational_academy')) pedagogyBonus += 20;
  if (rationaleTags.has('interactive_learning')) pedagogyBonus += 20;
  if (rationaleTags.has('empathic_education')) pedagogyBonus += 20;
  if (rationaleTags.has('literacy_pedagogy')) pedagogyBonus += 20;
  if (rationaleTags.has('educational_clarity_audit')) pedagogyBonus += 20;
  if (rationaleTags.has('curriculum_structuring')) pedagogyBonus += 20;
  if (rationaleTags.has('educational_outreach')) pedagogyBonus += 20;
  if (rationaleTags.has('pedagogical_legacy')) pedagogyBonus += 20;
  if (rationaleTags.has('pedagogical_symposium')) pedagogyBonus += 20;
  if (rationaleTags.has('student_lightbulb_breakthrough')) pedagogyBonus += 20;

  let programmerBonus = 0;
  if (rationaleTags.has('software_deconstruction')) programmerBonus += 20;
  if (rationaleTags.has('software_building')) programmerBonus += 20;
  if (rationaleTags.has('digital_platform')) programmerBonus += 20;
  if (rationaleTags.has('neural_computing')) programmerBonus += 20;
  if (rationaleTags.has('systemic_debugging')) programmerBonus += 20;
  if (rationaleTags.has('open_source_ai')) programmerBonus += 20;
  if (rationaleTags.has('code_scalability_audit')) programmerBonus += 20;
  if (rationaleTags.has('iterative_coding')) programmerBonus += 20;
  if (rationaleTags.has('cyber_command')) programmerBonus += 20;
  if (rationaleTags.has('software_impact_legacy')) programmerBonus += 20;
  if (rationaleTags.has('software_symposium')) programmerBonus += 20;
  if (rationaleTags.has('clean_code_breakthrough')) programmerBonus += 20;

  let rawMedical = scores.scientific * 1.2 + scores.social * 1.1 + scores.analytical + scores.practical + medicalBonus;
  let rawLegal = scores.analytical * 1.2 + scores.communication * 1.1 + scores.leadership + scores.systems + legalBonus;
  let rawPedagogy = scores.communication * 1.2 + scores.social * 1.1 + scores.curiosity + scores.leadership + pedagogyBonus;
  let rawProgrammer = scores.technical * 1.2 + scores.systems * 1.1 + scores.problemSolving + scores.analytical + programmerBonus;
  let rawEconomics = scores.leadership * 1.2 + scores.practical * 1.1 + scores.analytical + scores.systems;
  let rawEngineering = scores.technical * 1.2 + scores.practical * 1.1 + scores.systems + scores.problemSolving;

  // Career Direction Profiles Definitions
  const PROFILE_PROGRAMMER: CareerDirection = {
    id: 'cs_ai',
    title: {
      en: 'SOFTWARE ENGINEERING, PROGRAMMING & AI',
      ru: 'ПРОГРАММНАЯ ИНЖЕНЕРИЯ, ПРОГРАММИРОВАНИЕ И ИИ',
      tg: 'БАРНОМАСОЗӢ, ИНЖЕНЕРИЯИ НАРОМФЗОР ВА ҲУШИ МӮЪТАДИЛ',
    },
    matchPercentage: Math.min(98, Math.max(75, Math.round((rawProgrammer / 480) * 100) + 12)),
    summary: {
      en: 'Creating algorithms, web & mobile applications, software architecture, and intelligent automated tools.',
      ru: 'Проектирование алгоритмов, мобильных и веб-приложений, архитектуры ПО и систем ИИ.',
      tg: 'Лоиҳакашии алгоритмҳо, барномаҳои мобилӣ ва веб, меъмории нармафзор ва системаҳои ҲМ.',
    },
    ntcClusterNumber: 1,
    keyStrengths: {
      en: ['Algorithmic Logic', 'Software Architecture', 'Systemic Problem Solving'],
      ru: ['Алгоритмическая логика', 'Архитектура ПО', 'Решение сложных задач'],
      tg: ['Мантиқи алгоритмӣ', 'Меъмории нармафзор', 'Ҳалли мушкилоти мураккаб'],
    },
    recommendedSubjects: [
      {
        subject: { en: 'Informatics & Coding', ru: 'Информатика и программирование', tg: 'Информатика ва барномасозӣ' },
        reason: { en: 'Essential foundation for writing code, algorithms, and managing databases.', ru: 'Основа для создания кода, алгоритмов и баз данных.', tg: 'Асоси муҳим барои коднависӣ, алгоритмҳо ва пойгоҳҳои маълумот.' },
      },
      {
        subject: { en: 'Mathematics & Logic', ru: 'Математика и логика', tg: 'Математика ва мантиқ' },
        reason: { en: 'Trains discrete mathematics, linear algebra, and neural network calculations.', ru: 'Развивает дискретную математику, линейную алгебру и расчеты ИИ.', tg: 'Омӯзиши математикаи дискретӣ, алгебраи хаттӣ ва ҳисобҳои ҲМ.' },
      },
      {
        subject: { en: 'Technical English', ru: 'Технический английский', tg: 'Забони англисии техникӣ' },
        reason: { en: 'Required for global developer documentation, GitHub collaboration, and tech stack updates.', ru: 'Необходим для мировой документации ПО и работы на GitHub.', tg: 'Барои дастрасӣ ба ҳуҷҷатҳои техникии ҷаҳонӣ ва GitHub зарур аст.' },
      },
    ],
    careerFields: {
      en: ['Full-Stack Software Developer', 'AI & Machine Learning Engineer', 'Mobile App Developer (iOS/Android)', 'Cybersecurity Analyst'],
      ru: ['Full-Stack разработчик ПО', 'Инженер ИИ и машинного обучения', 'Разработчик мобильных приложений', 'Аналитик кибербезопасности'],
      tg: ['Барномасози Full-Stack', 'Инженери Ҳуши Муътадил (AI/ML)', 'Таҳиягари барномаҳои мобилӣ', 'Мутахассиси киберамният'],
    },
  };

  const PROFILE_DOCTOR: CareerDirection = {
    id: 'medicine_doctor',
    title: {
      en: 'CLINICAL MEDICINE, SURGERY & HEALTHCARE (DOCTOR)',
      ru: 'КЛИНИЧЕСКАЯ МЕДИЦИНА, ХИРУРГИЯ И ВРАЧЕБНОЕ ДЕЛО (ВРАЧ)',
      tg: 'ТИББИ КЛИНИКӢ, ҶАРРОҲӢ ВА ТАБОБАТӢ (ДУХТУР)',
    },
    matchPercentage: Math.min(98, Math.max(75, Math.round((rawMedical / 480) * 100) + 12)),
    summary: {
      en: 'Diagnosing diseases, conducting clinical treatments, performing surgery, and saving human lives.',
      ru: 'Диагностика заболеваний, проведение лечения, хирургические операции и спасение жизней людей.',
      tg: 'Ташхиси бемориҳо, табобати клиникӣ, амалиёти ҷарроҳӣ ва наҷоти ҳаёти одамон.',
    },
    ntcClusterNumber: 5,
    keyStrengths: {
      en: ['Clinical Diagnostics', 'Scientific Rigor', 'Empathy & Patient Care'],
      ru: ['Клиническая диагностика', 'Научная точность', 'Эмпатия и забота о пациенте'],
      tg: ['Ташхиси клиникӣ', 'Дақиқии илмӣ', 'Эмпатия ва ғамхорӣ ба бемор'],
    },
    recommendedSubjects: [
      {
        subject: { en: 'Advanced Chemistry', ru: 'Профильная химия', tg: 'Химияи соҳавӣ' },
        reason: { en: 'Core foundation for pharmacology, biochemistry, and molecular pathology.', ru: 'Фундамент фармакологии, биохимии и патологии.', tg: 'Асоси фармакология, биохимия ва патология.' },
      },
      {
        subject: { en: 'Human Biology & Anatomy', ru: 'Биология человека и анатомия', tg: 'Биологияи инсон ва анатомия' },
        reason: { en: 'Crucial for understanding bodily organ systems, cellular genetics, and clinical medicine.', ru: 'Ключевой предмет для понимания анатомии и физиологии.', tg: 'Фанни асосӣ барои дарки анатомия, физиология ва тибб.' },
      },
      {
        subject: { en: 'Physics & Biomechanics', ru: 'Физика и биомеханика', tg: 'Физика ва биомеханика' },
        reason: { en: 'Underpins diagnostic imaging (MRI, Ultrasound) and physiological mechanics.', ru: 'Основа для лучевой диагностики (МРТ, УЗИ) и биомеханики.', tg: 'Асос барои диагностикаи шуоӣ (МРТ, УЗИ) ва биомеханика.' },
      },
    ],
    careerFields: {
      en: ['General Practitioner / Physician', 'Clinical Surgeon', 'Pediatric Specialist', 'Medical Diagnostics & Radiology'],
      ru: ['Врач-терапевт / Семейный врач', 'Хирург', 'Врач-педиатр', 'Врач лучевой диагностики'],
      tg: ['Духтури терапевт / Оилавӣ', 'Ҷарроҳ (Хирург)', 'Духтури кӯдакона (Педиатр)', 'Ташхисгар (Диагностика ва МРТ)'],
    },
  };

  const PROFILE_LAWYER: CareerDirection = {
    id: 'lawyer_jurisprudence',
    title: {
      en: 'LAW, JURISPRUDENCE & LEGAL ADVOCACY (LAWYER)',
      ru: 'ЮРИСПРУДЕНЦИЯ, ПРАВО И АДВОКАТУРА (ЮРИСТ)',
      tg: 'ҲУҚУҚШИНОСӢ, ЮРИСПРУДЕНСИЯ ВА АДВОКАТУРА (ЮРИСТ)',
    },
    matchPercentage: Math.min(98, Math.max(75, Math.round((rawLegal / 480) * 100) + 12)),
    summary: {
      en: 'Upholding constitutional justice, defending rights in court, drafting laws, and advising organizations.',
      ru: 'Защита прав граждан в суде, разработка законов, юридический консалтинг и справедливость.',
      tg: 'Ҳимояи ҳуқуқҳои шаҳрвандон дар суд, таҳияи қонунҳо, машварати ҳуқуқӣ ва таъмини адолат.',
    },
    ntcClusterNumber: 4,
    keyStrengths: {
      en: ['Legal Analysis & Argumentation', 'Statutory Precision', 'Public Rhetoric'],
      ru: ['Правовой анализ и аргументация', 'Точность формулировок', 'Ораторское мастерство'],
      tg: ['Таҳлили ҳуқуқӣ ва далеловарӣ', 'Дақиқии бандҳои қонун', 'Маҳорати суханварӣ'],
    },
    recommendedSubjects: [
      {
        subject: { en: 'State & Law Principles', ru: 'Основы государства и права', tg: 'Асосҳои давлат ва ҳуқуқ' },
        reason: { en: 'Direct foundation for constitutional law, criminal codes, and civil rights.', ru: 'Прямая основа для конституционного, уголовного и гражданского права.', tg: 'Асоси мустақим барои ҳуқуқи конститутсионӣ, ҷиноятӣ ва шаҳрвандӣ.' },
      },
      {
        subject: { en: 'History & World Civics', ru: 'История и обществознание', tg: 'Таърих ва ҷомеашиносӣ' },
        reason: { en: 'Provides historical legal precedent, international treaties, and political structures.', ru: 'Дает понимание прецедентов, международных договоров и политики.', tg: 'Фаҳмиши прецедентҳо, шартномаҳои байналмилалӣ ва сиёсатро медиҳад.' },
      },
      {
        subject: { en: 'Foreign Languages & Logic', ru: 'Иностранный язык и логика', tg: 'Забонҳои хориҷӣ ва мантиқ' },
        reason: { en: 'Vital for international trade contracts, arbitration, and diplomatic negotiations.', ru: 'Необходим для международных договоров и арбитража.', tg: 'Барои шартномаҳои байналмилалӣ ва арбитраж зарур аст.' },
      },
    ],
    careerFields: {
      en: ['Criminal Defense Attorney / Prosecutor', 'Corporate Legal Counsel', 'International Law Specialist', 'Judge & Judicial Magistrate'],
      ru: ['Адвокат по уголовным делам / Прокурор', 'Корпоративный юрист', 'Специалист по международному праву', 'Судья / Нотариус'],
      tg: ['Адвокат / Прокурор', 'Юристи корпоративӣ (Корхонаҳо)', 'Мутахассиси ҳуқуқи байналмилалӣ', 'Судя / Нотариус'],
    },
  };

  const PROFILE_TEACHER: CareerDirection = {
    id: 'pedagogy_teacher',
    title: {
      en: 'PEDAGOGY, TEACHING & EDUCATIONAL LEADERSHIP (TEACHER)',
      ru: 'ПЕДАГОГИКА, ПРЕПОДАВАНИЕ И ОБРАЗОВАНИЕ (УЧИТЕЛЬ)',
      tg: 'ПЕДАГОГИКА, ОМӮЗГОРӢ ВА МАОРИФ (ОМӮЗГОР)',
    },
    matchPercentage: Math.min(98, Math.max(75, Math.round((rawPedagogy / 480) * 100) + 12)),
    summary: {
      en: 'Educating young minds, developing modern curricula, mentoring students, and transforming education.',
      ru: 'Обучение молодежи, разработка учебных программ, наставничество и развитие маорифа.',
      tg: 'Таълиму тарбияи насли наврас, таҳияи барномаҳои дарсӣ, роҳнамоӣ ва рушди маориф.',
    },
    ntcClusterNumber: 3,
    keyStrengths: {
      en: ['Instructional Clarity', 'Empathic Mentorship', 'Educational Leadership'],
      ru: ['Понятность изложения', 'Эмпатичное наставничество', 'Лидерство в образовании'],
      tg: ['Баёни соддаву фаҳмо', 'Роҳнамоии боэътимод', 'Роҳбарӣ дар соҳаи маориф'],
    },
    recommendedSubjects: [
      {
        subject: { en: 'Tajik Language & Literature', ru: 'Таджикский язык и литература', tg: 'Забон ва адабиёти тоҷик' },
        reason: { en: 'Develops rich linguistic mastery, rhetoric, and cultural pedagogy.', ru: 'Развивает грамотность, ораторское искусство и педагогику.', tg: 'Саводнокӣ, суханварӣ ва педагогикаро инкишоф медиҳад.' },
      },
      {
        subject: { en: 'Foreign Languages (English/German)', ru: 'Иностранные языки (Английский/Немецкий)', tg: 'Забонҳои хориҷӣ (Англисӣ/Олмонӣ)' },
        reason: { en: 'Unlocks international modern teaching methodologies and language immersion.', ru: 'Открывает современные методики преподавания и языковое обучение.', tg: 'Усулҳои замонавии таълим ва омӯзиши забонҳоро мекушояд.' },
      },
      {
        subject: { en: 'Psychology & Pedagogy', ru: 'Психология и педагогика', tg: 'Психология ва педагогика' },
        reason: { en: 'Essential for age-appropriate child psychology, cognitive learning, and classroom dynamics.', ru: 'Основа возрастной психологии и методик обучения.', tg: 'Асоси психологияи синнусолӣ ва усулҳои дарсдиҳӣ.' },
      },
    ],
    careerFields: {
      en: ['STEM Subject Teacher (Math/Physics/IT)', 'Foreign Language Pedagogue', 'School Principal & Educational Director', 'Curriculum Design Specialist'],
      ru: ['Учитель точных наук (Математика/Физика/ИТ)', 'Преподаватель иностранных языков', 'Директор школы / Методист', 'Разработчик учебных программ'],
      tg: ['Омӯзгори фанҳои дақиқ (Математика/Физика/ИТ)', 'Омӯзгори забонҳои хориҷӣ', 'Директори мактаб / Методчи', 'Таҳиягари барномаҳои таълимӣ'],
    },
  };

  const PROFILE_ECONOMIST: CareerDirection = {
    id: 'economics_business',
    title: {
      en: 'BUSINESS, ECONOMICS & DIGITAL FINANCE',
      ru: 'БИЗНЕС, ЭКОНОМИКА И ЦИФРОВЫЕ ФИНАНСЫ',
      tg: 'ИҚТИСОДИЁТ, БИЗНЕС ВА МОЛИЯИ РАҚАМӢ',
    },
    matchPercentage: Math.min(98, Math.max(75, Math.round((rawEconomics / 480) * 100) + 12)),
    summary: {
      en: 'Managing commercial enterprises, analyzing global trade markets, financial investments, and banking.',
      ru: 'Управление коммерческими компаниями, анализ рынков, финансовые инвестиции и банки.',
      tg: 'Идораи ширкатҳои тиҷоратӣ, таҳлили бозорҳо, сармоягузории молиявӣ ва бонкдорӣ.',
    },
    ntcClusterNumber: 2,
    keyStrengths: {
      en: ['Resource Optimization', 'Financial Modeling', 'Strategic Commercial Vision'],
      ru: ['Оптимизация ресурсов', 'Финансовое моделирование', 'Коммерческая стратегия'],
      tg: ['Оптимизатсияи ресурсҳо', 'Моделисозии молиявӣ', 'Стратегияи тиҷоратӣ'],
    },
    recommendedSubjects: [
      {
        subject: { en: 'Applied Economics & Math', ru: 'Прикладная экономика и математика', tg: 'Иқтисоди татбиқӣ ва математика' },
        reason: { en: 'Teaches market balance, interest rates, accounting, and quantitative financial models.', ru: 'Основа расчета баланса, процентов и бухгалтерского учета.', tg: 'Асоси ҳисоби мувозинат, фоизҳо ва баҳисобгирии муҳосибӣ.' },
      },
      {
        subject: { en: 'Geography & Global Commerce', ru: 'География и мировая торговля', tg: 'География ва тиҷорати ҷаҳонӣ' },
        reason: { en: 'Crucial for understanding trade logistics, resources, and international markets.', ru: 'Важно для понимания торговой логистики и рынков.', tg: 'Барои фаҳмидани логистикаи тиҷоратӣ ва бозорҳо муҳим аст.' },
      },
    ],
    careerFields: {
      en: ['Financial Analyst / Auditor', 'Bank Manager / Investment Banker', 'International Business Entrepreneur', 'Digital Commerce Manager'],
      ru: ['Финансовый аналитик / Аудитор', 'Управляющий банком / Инвестор', 'Предприниматель международного бизнеса', 'Менеджер цифровой коммерции'],
      tg: ['Таҳлилгари молиявӣ / Муҳосиб', 'Идоракунандаи бонк / Сармоягузор', 'Соҳибкор (Бизнесмени байналмилалӣ)', 'Менеҷери тиҷорати рақамӣ'],
    },
  };

  const PROFILE_ENGINEER: CareerDirection = {
    id: 'engineering_architecture',
    title: {
      en: 'CIVIL & MECHANICAL ENGINEERING & ARCHITECTURE',
      ru: 'ИНЖЕНЕРИЯ СТРОИТЕЛЬСТВА, МЕХАНИКА И АРХИТЕКТУРА',
      tg: 'ИНЖЕНЕРИЯИ СОХТМОН, МЕХАНИКА ВА МЕЪМОРӢ',
    },
    matchPercentage: Math.min(98, Math.max(75, Math.round((rawEngineering / 480) * 100) + 12)),
    summary: {
      en: 'Designing modern buildings, bridges, energy grids, mechanical devices, and urban architecture.',
      ru: 'Проектирование зданий, мостов, энергосетей, механизмов и городской архитектуры.',
      tg: 'Лоиҳакашии биноҳо, пулҳо, шабакаҳои барқ, механизмҳо ва меъмории шаҳрӣ.',
    },
    ntcClusterNumber: 1,
    keyStrengths: {
      en: ['Structural Mechanics', 'Spatial Architecture', 'Physical Problem Solving'],
      ru: ['Строительная механика', 'Пространственная архитектура', 'Технические расчеты'],
      tg: ['Механикаи сохтмон', 'Меъмории фазоӣ', 'Ҳисобҳои техникӣ'],
    },
    recommendedSubjects: [
      {
        subject: { en: 'Physics & Mechanics', ru: 'Физика и механика', tg: 'Физика ва механика' },
        reason: { en: 'Foundation for structural strength, electricity, thermodynamics, and physical design.', ru: 'Основа прочности конструкций и электротехники.', tg: 'Асоси устувории сохторҳо ва электротехника.' },
      },
      {
        subject: { en: 'Advanced Geometry & Math', ru: 'Геометрия и математика', tg: 'Геометрия ва математика' },
        reason: { en: 'Essential for architectural blueprints, spatial calculations, and CAD modeling.', ru: 'Необходима для чертежей, расчетов и CAD-моделирования.', tg: 'Барои нақшаҳо, ҳисобҳо ва моделисозии CAD зарур аст.' },
      },
    ],
    careerFields: {
      en: ['Civil Construction Engineer', 'Urban Architect & CAD Specialist', 'Electrical & Energy Systems Engineer', 'Automotive & Mechanical Engineer'],
      ru: ['Инженер-строитель', 'Архитектор и CAD-проектировщик', 'Инженер энергетик / электротехник', 'Инженер-механик'],
      tg: ['Инженер-сохтмончӣ', 'Меъмор (Архитектор)', 'Инженери энергетика ва барқ', 'Инженери механик'],
    },
  };

  // Rank profiles based on score
  const allProfiles = [
    { profile: PROFILE_PROGRAMMER, score: rawProgrammer },
    { profile: PROFILE_DOCTOR, score: rawMedical },
    { profile: PROFILE_LAWYER, score: rawLegal },
    { profile: PROFILE_TEACHER, score: rawPedagogy },
    { profile: PROFILE_ECONOMIST, score: rawEconomics },
    { profile: PROFILE_ENGINEER, score: rawEngineering },
  ].sort((a, b) => b.score - a.score);

  const topProfileItem = allProfiles[0];
  const topDir = topProfileItem.profile;
  const recommendedCluster = NTC_CLUSTERS.find((c) => c.clusterNumber === topDir.ntcClusterNumber) || NTC_CLUSTERS[0];

  const otherDirs: CareerDirection[] = [];

  const whyFits = generatePersonalizedWhyList(answers, scores, lang);

  const dimensionScoresList = (Object.keys(scores) as ThinkingDimensionKey[]).map((key) => ({
    key,
    label: DIMENSION_LABELS[key],
    score: scores[key],
  }));

  const recommendedTajikSpecialties = recommendedCluster.specialties;

  const nextSteps: Record<Language, string[]> = {
    en: [
      `Strengthen key foundational subjects (${topDir.recommendedSubjects.map((s) => s.subject.en).join(', ')})`,
      'Build a tangible personal project (practical research, community initiative, or portfolio)',
      `Explore official NTC Cluster ${recommendedCluster.clusterNumber} university options in Tajikistan or international scholarship deadlines`,
    ],
    ru: [
      `Укрепите ключевые предметы (${topDir.recommendedSubjects.map((s) => s.subject.ru).join(', ')})`,
      'Создайте собственный практический проект (исследование, социальную инициативу или портфолио)',
      `Изучите специальности Кластера ${recommendedCluster.clusterNumber} НЦТ Таджикистана и международные программы`,
    ],
    tg: [
      `Фанҳои асосиро мустаҳкам кунед (${topDir.recommendedSubjects.map((s) => s.subject.tg).join(', ')})`,
      'Лоиҳаи амалии шахсии худро созед (таҳқиқоти амалӣ, ташаббуси ҷамъиятӣ ё портфолио)',
      `Ихтисосҳои Кластери ${recommendedCluster.clusterNumber}-и ММТ Тоҷикистон ва барномаҳои байналмилалиро омӯзед`,
    ],
  };

  return {
    topDirection: topDir,
    otherDirections: otherDirs,
    whyThisFitsYou: whyFits,
    dimensionScores: dimensionScoresList,
    recommendedNTCCluster: recommendedCluster,
    recommendedTajikSpecialties,
    nextSteps,
    isAiGenerated: false,
  };
}


export async function fetchAiEnhancedAnalysis(
  answers: UserAnswer[],
  lang: Language
): Promise<AnalysisResult> {
  const localResult = buildLocalAnalysis(answers, lang);

  try {
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers, lang, localResult }),
    });

    if (!res.ok) {
      console.warn('API route /api/analyze returned non-200. Using deterministic fallback engine.');
      return localResult;
    }

    const data = await res.json();
    if (data && data.topDirection) {
      return {
        ...localResult,
        ...data,
        isAiGenerated: true,
      };
    }
  } catch (err) {
    console.warn('Network or server error contacting /api/analyze. Falling back to local engine.', err);
  }

  return localResult;
}
