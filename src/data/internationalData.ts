import { InternationalUniversity } from '../types';

export const INTERNATIONAL_UNIVERSITIES: InternationalUniversity[] = [
  // Central Asia
  {
    id: 'uca_khorog',
    name: 'University of Central Asia (UCA)',
    country: { en: 'Tajikistan / Kyrgyzstan', ru: 'Таджикистан / Кыргызстан', tg: 'Тоҷикистон / Қирғизистон' },
    region: 'central_asia',
    field: {
      en: 'Computer Science & Environmental Earth Sciences',
      ru: 'Компьютерные науки и науки об окружающей среде',
      tg: 'Илмҳои компютерӣ ва илмҳои атрофи муҳит',
    },
    ranking: 'Top Regional Liberal Arts & Sciences',
    matchReason: {
      en: 'Liberal arts curriculum with state-of-the-art residential campuses in Khorog and Naryn.',
      ru: 'Англоязычная программа мирового уровня с кампусами в Хороге и Нарыне.',
      tg: 'Барномаи байналмилалии англисизабон бо кампусҳои муосир дар Хоруғ ва Норин.',
    },
    tuitionInfo: {
      en: 'Generous financial aid & full merit scholarships available',
      ru: 'Доступны щедрые гранты и 100% стипендии по результатам экзаменов',
      tg: 'Грантҳо ва стипендияҳои 100% барои донишҷӯёни аълохон дастрасанд',
    },
    website: 'https://ucentralasia.org',
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'nu_kazakhstan',
    name: 'Nazarbayev University',
    country: { en: 'Kazakhstan (Astana)', ru: 'Казахстан (Астана)', tg: 'Қазоқистон (Остона)' },
    region: 'central_asia',
    field: {
      en: 'Robotics, Data Science, Chemical & Civil Engineering',
      ru: 'Робототехника, Data Science, химическая инженерия',
      tg: 'Робототехника, Data Science ва инженерияи кимиёвӣ',
    },
    ranking: '#1 Research University in Central Asia',
    matchReason: {
      en: 'English-taught research institution with top-tier labs and direct ties to MIT and Cambridge.',
      ru: 'Исследовательский университет №1 в регионе с лабораториями мирового уровня.',
      tg: 'Донишгоҳи таҳқиқотии рақами 1 дар минтақа бо лабораторияҳои сатҳи ҷаҳонӣ.',
    },
    tuitionInfo: {
      en: 'Full Abai & NU State Grants covering tuition and housing',
      ru: 'Полные государственные гранты, покрывающие обучение и проживание',
      tg: 'Грантҳои пӯрраи давлатӣ, ки таҳсил ва хобгоҳро таъмин мекунанд',
    },
    website: 'https://nu.edu.kz',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'wiut_tashkent',
    name: 'Westminster International University in Tashkent (WIUT)',
    country: { en: 'Uzbekistan (Tashkent)', ru: 'Узбекистан (Ташкент)', tg: 'Ӯзбекистон (Тошканд)' },
    region: 'central_asia',
    field: {
      en: 'Business Information Systems & Global Finance',
      ru: 'Бизнес-информационные системы и мировые финансы',
      tg: 'Системаҳои иттилоотии бизнес ва молияи ҷаҳонӣ',
    },
    ranking: 'Official UK University of Westminster Degree',
    matchReason: {
      en: 'Direct British degree structure in Central Asia focused on commercial analytics.',
      ru: 'Британский диплом университета Вестминстера в центре Ташкента.',
      tg: 'Дипломи бритониёии Донишгоҳи Вестминстер дар маркази Тошканд.',
    },
    tuitionInfo: {
      en: 'Merit-based tuition discounts & scholarship quotas',
      ru: 'Стипендиальные квоты и скидки за высокие академические балы',
      tg: 'Квотаҳои стипендиявӣ ва тахфифҳо барои баҳоҳои баланд',
    },
    website: 'https://wiut.uz',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  },

  // Europe
  {
    id: 'tum_germany',
    name: 'Technical University of Munich (TUM)',
    country: { en: 'Germany (Munich)', ru: 'Германия (Мюнхен)', tg: 'Олмон (Мюнхен)' },
    region: 'europe',
    field: {
      en: 'Informatics, Mechanical Engineering & Bio-Engineering',
      ru: 'Информатика, машиностроение и биоинженерия',
      tg: 'Информатика, мошинсозӣ ва биоинженерия',
    },
    ranking: '#28 Global University (QS World Rankings)',
    matchReason: {
      en: 'Europe’s leading tech university, renowned for industrial partnerships with BMW and Siemens.',
      ru: 'Ведущий технический вуз Европы с тесными связями с индустрией ИИ и автопрома.',
      tg: 'Донишгоҳи техникии пешрафтаи Урупо бо робитаҳои мустақим бо саноат.',
    },
    tuitionInfo: {
      en: 'Tuition-free / minimal administrative fee for eligible students',
      ru: 'Минимальный семестровый взнос (практически бесплатное обучение)',
      tg: 'Пардохти ҳадди ақали семестравӣ (таҳсили амалан ройгон)',
    },
    website: 'https://tum.de',
    imageUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'polimi_italy',
    name: 'Politecnico di Milano',
    country: { en: 'Italy (Milan)', ru: 'Италия (Милан)', tg: 'Италия (Милан)' },
    region: 'europe',
    field: {
      en: 'Architecture, Industrial Design & Cybernetics',
      ru: 'Архитектура, промышленный дизайн и кибернетика',
      tg: 'Меъморӣ, дизайни саноатӣ ва кибернетика',
    },
    ranking: '#1 Technical University in Italy',
    matchReason: {
      en: 'Combines Italian aesthetic design mastery with rigorous scientific computing.',
      ru: 'Объединяет итальянский эстетический дизайн с математической вышиной.',
      tg: 'Дизайни эстетикии италиявиро бо ҳисоббарории дақиқи илмӣ муттаҳид мекунад.',
    },
    tuitionInfo: {
      en: 'DSU Need-based scholarships up to €7,000/year + free canteen',
      ru: 'Гранты DSU до 7000€ в год + бесплатное питание для студентов',
      tg: 'Грантҳои DSU то 7000€ дар як сол + хӯроки ройгон',
    },
    website: 'https://polimi.it',
    imageUrl: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80',
  },

  // USA
  {
    id: 'mit_usa',
    name: 'Massachusetts Institute of Technology (MIT)',
    country: { en: 'USA (Cambridge, MA)', ru: 'США (Кембридж, Массачусетс)', tg: 'ИМА (Кембриҷ, Массачусетс)' },
    region: 'usa',
    field: {
      en: 'Artificial Intelligence, Physics & Electrical Engineering',
      ru: 'Искусственный интеллект, физика и электротехника',
      tg: 'Ҳуши Муътадил, физика ва электротехника',
    },
    ranking: '#1 Global STEM Institution',
    matchReason: {
      en: 'The world gold standard for frontier science, inventive engineering, and startup creation.',
      ru: 'Мировой эталон передовой науки, инженерной мысли и технологического предпринимательства.',
      tg: 'Стандарти тиллоии ҷаҳонӣ барои илми пешрафта ва инженерия.',
    },
    tuitionInfo: {
      en: '100% Need-blind admission for ALL international students',
      ru: '100% финансовая помощь без учета платежеспособности для всех студентов мира',
      tg: '100% кӯмаки молиявӣ барои ҳамаи донишҷӯёни байналмилалӣ',
    },
    website: 'https://mit.edu',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'minerva_usa',
    name: 'Minerva University',
    country: { en: 'USA / Global Rotation (7 Countries)', ru: 'США / Ротация по 7 странам мира', tg: 'ИМА / Ротатсия дар 7 кишвари ҷаҳон' },
    region: 'usa',
    field: {
      en: 'Computational Sciences, Philosophy & Systems Thinking',
      ru: 'Компьютерные науки, философия и системное мышление',
      tg: 'Илмҳои компютерӣ, философия ва тафаккури системӣ',
    },
    ranking: '#1 Most Innovative University in the World',
    matchReason: {
      en: 'Unique global rotation across San Francisco, Berlin, Seoul, and Hyderabad focusing on practical systems thinking.',
      ru: 'Инновационное обучение с проживанием в 7 мировых столицах и упором на системное мышление.',
      tg: 'Омӯзиши инноватсионӣ бо зиндагӣ дар 7 пойтахти ҷаҳон ва тафаккури системӣ.',
    },
    tuitionInfo: {
      en: 'Robust financial aid & work-study programs',
      ru: 'Щедрые программы финансовой помощи и работы на кампусе',
      tg: 'Барномаҳои кӯмаки молиявӣ ва кор дар кампус',
    },
    website: 'https://minerva.edu',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  },

  // Asia
  {
    id: 'nus_singapore',
    name: 'National University of Singapore (NUS)',
    country: { en: 'Singapore', ru: 'Сингапур', tg: 'Сингапур' },
    region: 'asia',
    field: {
      en: 'Bio-Informatics, FinTech & Smart City Engineering',
      ru: 'Биоинформатика, ФинТех и инженерия умных городов',
      tg: 'Биоинформатика, ФинТех ва инженерияи шаҳрҳои ҳушманд',
    },
    ranking: '#8 Global University (QS World)',
    matchReason: {
      en: 'Asia’s premier academic hub linking East and West in technological innovation.',
      ru: 'Главный академический центр Азии, связывающий передовую науку и технологии.',
      tg: 'Маркази пешрафтаи академии Осиё дар соҳаи технологияҳои нави рақамӣ.',
    },
    tuitionInfo: {
      en: 'MOE Tuition Grant Scheme for international students',
      ru: 'Правительственные гранты MOE с обязательством работы в Сингапуре 3 года',
      tg: 'Грантҳои ҳукуматии MOE барои донишҷӯёни хориҷӣ',
    },
    website: 'https://nus.edu.sg',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kaist_korea',
    name: 'KAIST (Korea Advanced Institute of Science & Technology)',
    country: { en: 'South Korea (Daejeon)', ru: 'Южная Корея (Дэджон)', tg: 'Кореяи Ҷанубӣ (Дэҷон)' },
    region: 'asia',
    field: {
      en: 'AI & Robotics, Semiconductor Physics & Cybernetics',
      ru: 'ИИ и Робототехника, физика полупроводников',
      tg: 'ҲМ ва Робототехника, физикаи нимноқилҳо',
    },
    ranking: '#1 Tech University in South Korea',
    matchReason: {
      en: 'All classes taught in English with world-renowned AI laboratories.',
      ru: '100% англоязычное обучение в эпицентре корейских высоких технологий.',
      tg: 'Таҳсил 100% ба забони англисӣ дар маркази технологияҳои Корея.',
    },
    tuitionInfo: {
      en: 'Full KAIST International Scholarship + monthly living stipend',
      ru: 'Полная стипендия KAIST + ежемесячные выплаты на проживание',
      tg: 'Стипендияи пурраи KAIST + пардохти моҳона барои зиндагӣ',
    },
    website: 'https://kaist.ac.kr',
    imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80',
  },
];
