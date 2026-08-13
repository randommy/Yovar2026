import { Question } from '../types';

export const DISCOVERY_QUESTIONS: Question[] = [
  {
    id: 1,
    scenarioNumber: '01 / 12',
    title: {
      en: 'You inherit a small organization whose work is misunderstood by the public. What is your first priority?',
      ru: 'Вам досталась организация, работу которой не понимает общество. Каков ваш главный приоритет?',
      tg: 'Шумо ташкилотеро ба мерос гирифтед, ки корашро ҷомеа дуруст намефаҳмад. Нахустин аввалияти шумо чист?',
    },
    options: [
      {
        id: 'q1_a',
        text: {
          en: 'Diagnose people’s real human needs, health, and well-being directly',
          ru: 'Прямая диагностика потребностей людей, их здоровья и благополучия',
          tg: 'Бевасита ташхис ва эҳтиёҷоти саломативу некӯаҳволии одамонро омӯзед',
        },
        dimensionWeights: { social: 25, scientific: 20, analytical: 15 },
        rationaleTag: 'medical_diagnostics',
      },
      {
        id: 'q1_b',
        text: {
          en: 'Deconstruct the software algorithms and automated systems line by line',
          ru: 'Разобрать алгоритмы программы и код строка за строкой',
          tg: 'Алгоритмҳои нармафзор ва системаҳои автоматиро сатр ба сатр таҳлил кунед',
        },
        dimensionWeights: { systems: 25, technical: 20, problemSolving: 15 },
        rationaleTag: 'software_deconstruction',
      },
      {
        id: 'q1_c',
        text: {
          en: 'Audit the legal contracts, regulatory compliance, and citizens rights',
          ru: 'Изучить юридические нормы, права граждан и законность',
          tg: 'Шартномаҳои ҳуқуқӣ, қоидаҳо ва ҳуқуқҳои шаҳрвандонро таҳқиқ кунед',
        },
        dimensionWeights: { analytical: 25, leadership: 20, communication: 15 },
        rationaleTag: 'legal_audit',
      },
      {
        id: 'q1_d',
        text: {
          en: 'Gather the team and students to teach them core concepts and mentor them',
          ru: 'Собрать людей, чтобы обучить их ключевым концепциям и передать знания',
          tg: 'Одамонро ҷамъ карда, ба онҳо концепсияҳои асосиро омӯзонед',
        },
        dimensionWeights: { communication: 25, social: 20, curiosity: 15 },
        rationaleTag: 'pedagogical_mentorship',
      },
    ],
  },
  {
    id: 2,
    scenarioNumber: '02 / 12',
    title: {
      en: 'You are given one month to master a complex subject. What keeps you intensely motivated?',
      ru: 'У вас есть один месяц, чтобы освоить сложную дисциплину. Что вас вдохновляет?',
      tg: 'Ба шумо як моҳ вақт дода мешавад, то як фанни мураккабро омӯзед. Чӣ шуморо бештар ҳавасманд мекунад?',
    },
    options: [
      {
        id: 'q2_a',
        text: {
          en: 'Understanding biological mechanisms, human anatomy, and disease prevention',
          ru: 'Понимание биологических механизмов, анатомии человека и спасения жизней',
          tg: 'Дарки механизмҳои биологии бадани инсон, анатомия ва наҷоти ҳаёт',
        },
        dimensionWeights: { scientific: 25, social: 20, analytical: 15 },
        rationaleTag: 'biological_life_sciences',
      },
      {
        id: 'q2_b',
        text: {
          en: 'Building a working digital application or programming an automated script',
          ru: 'Создание работающего приложения или написание сложного кода',
          tg: 'Сохтани барномаи кории рақамӣ ё навиштани коди мураккаб',
        },
        dimensionWeights: { practical: 25, technical: 20, problemSolving: 15 },
        rationaleTag: 'software_building',
      },
      {
        id: 'q2_c',
        text: {
          en: 'Mastering legal statutes, court arguments, and constitutional defense',
          ru: 'Освоение законов, судебных аргументов и защиты справедливости',
          tg: 'Омӯзиши қонунҳо, далелҳои судӣ ва ҳимояи адолат',
        },
        dimensionWeights: { analytical: 25, communication: 20, leadership: 15 },
        rationaleTag: 'legal_mastery',
      },
      {
        id: 'q2_d',
        text: {
          en: 'Developing engaging teaching techniques to inspire the next generation',
          ru: 'Разработка методик преподавания для вдохновения молодежи',
          tg: 'Таҳияи усулҳои шавқовари таълим барои илҳомбахшии насли наврас',
        },
        dimensionWeights: { communication: 25, social: 20, leadership: 15 },
        rationaleTag: 'educational_empowerment',
      },
    ],
  },
  {
    id: 3,
    scenarioNumber: '03 / 12',
    title: {
      en: 'Your community faces a critical challenge. Which solution approach do you champion?',
      ru: 'Ваша община столкнулась с важным вызовом. Какое решение вы предложите?',
      tg: 'Ҷомеаи шумо бо чолиши муҳим рӯбарӯ шуд. Кадом роҳи ҳалро пешниҳод мекунед?',
    },
    options: [
      {
        id: 'q3_a',
        text: {
          en: 'Deploying a modern medical clinic and health monitoring system',
          ru: 'Открытие современной клиники и системы охраны здоровья',
          tg: 'Кушодани клиникаи замонавӣ ва системаи ҳифзи тандурустӣ',
        },
        dimensionWeights: { scientific: 25, social: 20, practical: 15 },
        rationaleTag: 'healthcare_system',
      },
      {
        id: 'q3_b',
        text: {
          en: 'Building an efficient software platform to digitize public services',
          ru: 'Создание IT-платформы для автоматизации услуг',
          tg: 'Сохтани платформаи IT барои автоматикунонии хидматҳо',
        },
        dimensionWeights: { technical: 25, systems: 20, problemSolving: 15 },
        rationaleTag: 'digital_platform',
      },
      {
        id: 'q3_c',
        text: {
          en: 'Drafting strict anti-corruption laws and legal frameworks for fairness',
          ru: 'Разработка четких законов и правовой защиты граждан',
          tg: 'Таҳияи қонунҳои шаффоф ва ҳимояи ҳуқуқии шаҳрвандон',
        },
        dimensionWeights: { analytical: 25, leadership: 20, systems: 15 },
        rationaleTag: 'legislative_reform',
      },
      {
        id: 'q3_d',
        text: {
          en: 'Establishing a top-tier modern academy to educate young minds',
          ru: 'Открытие современной школы для высококлассного образования',
          tg: 'Оғози мактаб ва академияи замонавӣ барои тарбияи насли наврас',
        },
        dimensionWeights: { social: 25, communication: 20, leadership: 15 },
        rationaleTag: 'educational_academy',
      },
    ],
  },
  {
    id: 4,
    scenarioNumber: '04 / 12',
    title: {
      en: 'You enter a state-of-the-art laboratory with advanced equipment. Where do you focus?',
      ru: 'Вы входите в суперсовременную лабораторию. Что привлекает ваше внимание?',
      tg: 'Шумо ба лабораторияи муосири дорои таҷҳизоти пешрафта ворид мешавед. Диққати шуморо чӣ ҷалб мекунад?',
    },
    options: [
      {
        id: 'q4_a',
        text: {
          en: 'Diagnostic tools for analyzing cellular biological structures and disease markers',
          ru: 'Диагностика клеток, ДНК и биологических маркеров болезней',
          tg: 'Асбобҳои диагностикаи ҳуҷайраҳо, ДНК ва маркерҳои биологӣ',
        },
        dimensionWeights: { scientific: 25, analytical: 20, practical: 15 },
        rationaleTag: 'cellular_diagnostics',
      },
      {
        id: 'q4_b',
        text: {
          en: 'High-performance servers running machine learning algorithms and neural nets',
          ru: 'Серверы с нейросетями и алгоритмами машинного обучения',
          tg: 'Серверҳои пурқувват бо шабакаҳои асабӣ ва алгоритмҳои ҲМ',
        },
        dimensionWeights: { technical: 25, systems: 20, problemSolving: 15 },
        rationaleTag: 'neural_computing',
      },
      {
        id: 'q4_c',
        text: {
          en: 'Economic forecasting systems and financial market simulation algorithms',
          ru: 'Системы экономического прогнозирования и финансовые рынки',
          tg: 'Системаҳои пешгӯии иқтисодӣ ва моделсозии бозорҳои молиявӣ',
        },
        dimensionWeights: { practical: 25, leadership: 20, analytical: 15 },
        rationaleTag: 'financial_forecasting',
      },
      {
        id: 'q4_d',
        text: {
          en: 'Interactive educational simulation systems for accelerating student learning',
          ru: 'Интерактивные образовательные тренажеры для ускорения обучения',
          tg: 'Системаҳои тренажери таълимӣ барои суръатбахшии омӯзиши донишҷӯён',
        },
        dimensionWeights: { communication: 25, curiosity: 20, social: 15 },
        rationaleTag: 'interactive_learning',
      },
    ],
  },
  {
    id: 5,
    scenarioNumber: '05 / 12',
    title: {
      en: 'A complex multi-stakeholder disagreement arises. How do you step in to resolve it?',
      ru: 'Возник сложный спор между несколькими сторонами. Как вы его решите?',
      tg: 'Дар байни чанд тараф баҳси мураккаб ба миён омад. Чӣ тавр онро ҳал мекунед?',
    },
    options: [
      {
        id: 'q5_a',
        text: {
          en: 'Act as a neutral legal mediator, examining statutory rules and legal precedents',
          ru: 'Выступить юридическим медиатором, опираясь на законы и кодексы',
          tg: 'Ҳамчун миёнарави ҳуқуқӣ баромад карда, ба қонунҳо ва кодексҳо такя кунед',
        },
        dimensionWeights: { analytical: 25, leadership: 20, communication: 15 },
        rationaleTag: 'legal_mediation',
      },
      {
        id: 'q5_b',
        text: {
          en: 'Debug the system code, eliminating logic errors objectively',
          ru: 'Устранить ошибки в логике системы и коде объективным путем',
          tg: 'Хатогиҳои мантиқии система ва кодро ба таври объективӣ бартараф кунед',
        },
        dimensionWeights: { problemSolving: 25, technical: 20, systems: 15 },
        rationaleTag: 'systemic_debugging',
      },
      {
        id: 'q5_c',
        text: {
          en: 'Explain concepts patiently with empathy, helping all participants learn and understand',
          ru: 'Терпеливо объяснить суть с эмпатией, обучая участников взаимопониманию',
          tg: 'Бо сабру эмпатия моҳиятро фаҳмонед ва иштирокчиёнро ба фаҳмиши ҳамдигар роҳнамоӣ кунед',
        },
        dimensionWeights: { communication: 25, social: 20, leadership: 15 },
        rationaleTag: 'empathic_education',
      },
      {
        id: 'q5_d',
        text: {
          en: 'Prioritize human health and psychological safety above administrative arguments',
          ru: 'Поставить здоровье людей и психологическую безопасность превыше споров',
          tg: 'Саломатии одамон ва бехатарии психологиро аз баҳсҳои маъмурӣ боло гузоред',
        },
        dimensionWeights: { social: 25, scientific: 20, practical: 15 },
        rationaleTag: 'patient_first_ethics',
      },
    ],
  },
  {
    id: 6,
    scenarioNumber: '06 / 12',
    title: {
      en: 'You win a prestigious grant to spend one year on any mission. What do you choose?',
      ru: 'Вы выиграли грант на год работы над любой миссией. Что вы выберете?',
      tg: 'Шумо гранти бузургро барои як соли кор дар ҳар кадом миссия бурдед. ЧИРО интихоб мекунед?',
    },
    options: [
      {
        id: 'q6_a',
        text: {
          en: 'Researching specialized surgical techniques or new disease treatments',
          ru: 'Исследование новых методов лечения болезней и хирургии',
          tg: 'Таҳқиқи усулҳои нави табобати бемориҳо ва ҷарроҳӣ',
        },
        dimensionWeights: { scientific: 25, practical: 20, analytical: 15 },
        rationaleTag: 'surgical_medical_research',
      },
      {
        id: 'q6_b',
        text: {
          en: 'Developing next-generation AI architectures and open-source software libraries',
          ru: 'Разработка новых архитектур ИИ и библиотек ПО с открытым кодом',
          tg: 'Таҳияи меъмории нави ҲМ ва китобхонаҳои нармафзори рақамӣ',
        },
        dimensionWeights: { technical: 25, systems: 20, problemSolving: 15 },
        rationaleTag: 'open_source_ai',
      },
      {
        id: 'q6_c',
        text: {
          en: 'Establishing international human rights standards and anti-monopoly laws',
          ru: 'Создание международных стандартов прав человека и закона',
          tg: 'Сохтани стандартҳои байналмилалии ҳуқуқи инсон ва қонунгузорӣ',
        },
        dimensionWeights: { analytical: 25, leadership: 20, communication: 15 },
        rationaleTag: 'human_rights_law',
      },
      {
        id: 'q6_d',
        text: {
          en: 'Modernizing pedagogical methodologies to elevate rural schools and literacy',
          ru: 'Модернизация методов обучения для повышения уровня образования',
          tg: 'Замонавӣ кардани усулҳои таълим барои баланд бардоштани сатҳи маориф',
        },
        dimensionWeights: { communication: 25, social: 20, leadership: 15 },
        rationaleTag: 'literacy_pedagogy',
      },
    ],
  },
  {
    id: 7,
    scenarioNumber: '07 / 12',
    title: {
      en: 'When evaluating a proposed project, what detail catches your critical eye first?',
      ru: 'Изучая проект, на какой аспект вы обращаете внимание в первую очередь?',
      tg: 'Ҳангоми омӯзиши лоиҳа, нахуст ба кадом ҷанба диққати махсус медиҳед?',
    },
    options: [
      {
        id: 'q7_a',
        text: {
          en: 'Safety protocols, medical risks, and biological impact on human health',
          ru: 'Медицинские риски, безопасность и влияние на здоровье людей',
          tg: 'Хатарҳои тиббӣ, бехатарӣ ва таъсир ба саломатии одамон',
        },
        dimensionWeights: { scientific: 25, social: 20, analytical: 15 },
        rationaleTag: 'health_safety_audit',
      },
      {
        id: 'q7_b',
        text: {
          en: 'Code structure, algorithm efficiency, database indexing, and scalability',
          ru: 'Структура кода, эффективность алгоритмов и масштабируемость',
          tg: 'Сохтори код, самаранокии алгоритмҳо ва имконияти васеъшавии система',
        },
        dimensionWeights: { systems: 25, technical: 20, problemSolving: 15 },
        rationaleTag: 'code_scalability_audit',
      },
      {
        id: 'q7_c',
        text: {
          en: 'Legal compliance, regulatory liabilities, and contractual loopholes',
          ru: 'Юридическая чистота, риски нарушений и точность формулировок',
          tg: 'Покизагии ҳуқуқӣ, хатарҳои хатогӣ ва дақиқии бандҳои қонун',
        },
        dimensionWeights: { analytical: 25, leadership: 20, systems: 15 },
        rationaleTag: 'contract_risk_audit',
      },
      {
        id: 'q7_d',
        text: {
          en: 'Clarity of presentation, ease of comprehension, and learning outcomes',
          ru: 'Понятность изложения, легкость восприятия и результаты обучения',
          tg: 'Шаффофият ва ошкории баён, осонии фаҳмиш ва натиҷаи омӯзиш',
        },
        dimensionWeights: { communication: 25, social: 20, curiosity: 15 },
        rationaleTag: 'educational_clarity_audit',
      },
    ],
  },
  {
    id: 8,
    scenarioNumber: '08 / 12',
    title: {
      en: 'How do you handle a scenario where there are no instructions available?',
      ru: 'Как вы поступаете, когда нет готовых инструкций?',
      tg: 'Дар ҳолате, ки дастурҳои тайёр вуҷуд надоранд, чӣ гуна амал мекунед?',
    },
    options: [
      {
        id: 'q8_a',
        text: {
          en: 'Apply fundamental scientific methods and empirical medical testing',
          ru: 'Применить научный подход и медицинское тестирование',
          tg: 'Муносибати илмӣ ва санҷишҳои тиббиро истифода баред',
        },
        dimensionWeights: { scientific: 25, analytical: 20, practical: 15 },
        rationaleTag: 'empirical_medical_method',
      },
      {
        id: 'q8_b',
        text: {
          en: 'Write modular code, run test cases, and iteratively fix bugs',
          ru: 'Написать модульный код, запустить тесты и исправить баги',
          tg: 'Коди модулиро навишта, тестҳоро оғоз кунед ва хатогиҳоро ислоҳ кунед',
        },
        dimensionWeights: { practical: 25, technical: 20, problemSolving: 15 },
        rationaleTag: 'iterative_coding',
      },
      {
        id: 'q8_c',
        text: {
          en: 'Analyze precedent cases and legal statutes to construct a solid argument',
          ru: 'Изучить аналогичные дела и законы для построения логики',
          tg: 'Парвандаҳои шабеҳ ва қонунҳоро таҳлил карда, мантиқи устувор созед',
        },
        dimensionWeights: { analytical: 25, leadership: 20, communication: 15 },
        rationaleTag: 'precedent_analysis',
      },
      {
        id: 'q8_d',
        text: {
          en: 'Break down the complex material into simple step-by-step guidance for others',
          ru: 'Разбить сложный материал на простые пошаговые уроки для людей',
          tg: 'Маводи мураккабро ба дарсҳои соддаи марҳилавӣ барои дигарон ҷудо кунед',
        },
        dimensionWeights: { communication: 25, social: 20, leadership: 15 },
        rationaleTag: 'curriculum_structuring',
      },
    ],
  },
  {
    id: 9,
    scenarioNumber: '09 / 12',
    title: {
      en: 'In a major city simulation requiring immediate action, which station do you take command of?',
      ru: 'В симуляции города, требующей немедленных действий, какую станцию вы возглавите?',
      tg: 'Дар моделисозии шаҳр, ки амалиёти фаврӣ металабад, кадом марказро роҳбарӣ мекунед?',
    },
    options: [
      {
        id: 'q9_a',
        text: {
          en: 'Emergency medical triage and trauma surgery response',
          ru: 'Медицинский центр экстренной помощи и хирургии',
          tg: 'Маркази тиббии кӯмаки фаврӣ ва ҷарроҳӣ',
        },
        dimensionWeights: { scientific: 25, practical: 20, social: 15 },
        rationaleTag: 'medical_emergency_command',
      },
      {
        id: 'q9_b',
        text: {
          en: 'Cyber-security and IT network command center',
          ru: 'Центр кибербезопасности и серверной инфраструктуры',
          tg: 'Маркази киберамният ва инфрасохтори серверӣ',
        },
        dimensionWeights: { technical: 25, systems: 20, problemSolving: 15 },
        rationaleTag: 'cyber_command',
      },
      {
        id: 'q9_c',
        text: {
          en: 'Supreme legal council and crisis governance headquarters',
          ru: 'Штаб правопорядка и юридического регулирования',
          tg: 'Сарштаби тартиботи ҳуқуқӣ ва танзими қонунӣ',
        },
        dimensionWeights: { analytical: 25, leadership: 20, communication: 15 },
        rationaleTag: 'legal_governance_command',
      },
      {
        id: 'q9_d',
        text: {
          en: 'Educational information hub guiding and informing citizens',
          ru: 'Информационно-просветительский центр обучения граждан',
          tg: 'Маркази ахбориву маърифатӣ ва омӯзиши шаҳрвандон',
        },
        dimensionWeights: { communication: 25, social: 20, leadership: 15 },
        rationaleTag: 'educational_outreach',
      },
    ],
  },
  {
    id: 10,
    scenarioNumber: '10 / 12',
    title: {
      en: 'What kind of lasting legacy would give you the ultimate professional satisfaction?',
      ru: 'Какое профессиональное наследие принесет вам наибольшее удовлетворение?',
      tg: 'Кадом мероси касбӣ ба шумо бузургтарин қаноатмандиро мебахшад?',
    },
    options: [
      {
        id: 'q10_a',
        text: {
          en: 'Curing a major medical illness or saving thousands of lives through healing',
          ru: 'Победа над тяжелым заболеванием и спасение тысяч жизней',
          tg: 'Ғолибият бар бемории вазнин ва наҷоти ҳазорон ҳаёти одамон',
        },
        dimensionWeights: { scientific: 25, social: 20, practical: 15 },
        rationaleTag: 'medical_healing_legacy',
      },
      {
        id: 'q10_b',
        text: {
          en: 'Creating a globally impactful software product or operating system used by millions',
          ru: 'Создание программы или операционной системы, используемой миллионами',
          tg: 'Офаридани нармафзор ё системаи оператсионие, ки миллионҳо нафар истифода мебаранд',
        },
        dimensionWeights: { technical: 25, systems: 20, problemSolving: 15 },
        rationaleTag: 'software_impact_legacy',
      },
      {
        id: 'q10_c',
        text: {
          en: 'Establishing historic legal protections and upholding justice in court',
          ru: 'Защита справедливости в судах и создание исторических законов',
          tg: 'Ҳимояи адолат дар судҳо ва сохтани қонунҳои таърихӣ',
        },
        dimensionWeights: { analytical: 25, leadership: 20, communication: 15 },
        rationaleTag: 'legal_justice_legacy',
      },
      {
        id: 'q10_d',
        text: {
          en: 'Nurturing generations of brilliant minds and inspiring future leaders',
          ru: 'Взращивание поколений талантливых учеников и лидеров',
          tg: 'Тарбияи насли шогирдони боистеъдод ва роҳбарони оянда',
        },
        dimensionWeights: { social: 25, communication: 20, leadership: 15 },
        rationaleTag: 'pedagogical_legacy',
      },
    ],
  },
  {
    id: 11,
    scenarioNumber: '11 / 12',
    title: {
      en: 'At an international academic congress, which specialized symposium do you attend?',
      ru: 'На международном конгрессе какую специальную секцию вы посетите?',
      tg: 'Дар конгресси байналмилалии илмӣ, кадом бахши соҳавиро интихоб мекунед?',
    },
    options: [
      {
        id: 'q11_a',
        text: {
          en: 'Frontiers in Clinical Surgery, Genomics and Pharmacology',
          ru: 'Достижения клинической хирургии, геномики и фармакологии',
          tg: 'Пешрафтҳои ҷарроҳии клиникӣ, геномика ва фармакология',
        },
        dimensionWeights: { scientific: 25, analytical: 20, practical: 15 },
        rationaleTag: 'clinical_symposium',
      },
      {
        id: 'q11_b',
        text: {
          en: 'Software Architecture, Distributed Cloud Systems and Artificial Intelligence',
          ru: 'Архитектура ПО, распределенные облачные системы и ИИ',
          tg: 'Меъмории нармафзор, системаҳои абрӣ ва Ҳуши Муътадил',
        },
        dimensionWeights: { technical: 25, systems: 20, problemSolving: 15 },
        rationaleTag: 'software_symposium',
      },
      {
        id: 'q11_c',
        text: {
          en: 'Constitutional Law, International Treaties and Human Rights Advocacy',
          ru: 'Конституционное право, международные договоры и защита прав',
          tg: 'Ҳуқуқи конститутсионӣ, шартномаҳои байналмилалӣ ва ҳимояи ҳуқуқ',
        },
        dimensionWeights: { analytical: 25, leadership: 20, communication: 15 },
        rationaleTag: 'jurisprudence_symposium',
      },
      {
        id: 'q11_d',
        text: {
          en: 'Pedagogical Innovations, Modern Education and Cognitive Linguistics',
          ru: 'Педагогические инновации, современное образование и лингвистика',
          tg: 'Инноватсияҳои педагогӣ, маорифи замонавӣ ва лингвистика',
        },
        dimensionWeights: { communication: 25, social: 20, curiosity: 15 },
        rationaleTag: 'pedagogical_symposium',
      },
    ],
  },
  {
    id: 12,
    scenarioNumber: '12 / 12',
    title: {
      en: 'Late at night, working on your core passion, what breakthrough gives you total thrill?',
      ru: 'Поздно ночью, работая над своим призванием, какой момент принесет вам восторг?',
      tg: 'Дар ними шаб, ҳангоми кор рӯи касби дӯстдоштаи худ, кадом лаҳза ба шумо нишоти бениҳоят мебахшад?',
    },
    options: [
      {
        id: 'q12_a',
        text: {
          en: 'Accurately identifying a rare medical condition and creating a cure plan',
          ru: 'Точно поставить сложный диагноз и спасти пациента',
          tg: 'Гузоштани диагнози дақиқи бемории мураккаб ва таҳияи нақшаи табобат',
        },
        dimensionWeights: { scientific: 25, analytical: 20, practical: 15 },
        rationaleTag: 'medical_diagnosis_breakthrough',
      },
      {
        id: 'q12_b',
        text: {
          en: 'When your code compiles cleanly and executes a complex algorithm seamlessly',
          ru: 'Когда код компилируется без единой ошибки и алгоритм работает идеально',
          tg: 'Вақте ки коди нармафзор бе ҳеҷ хатогӣ компилятсия шуда, алгоритм комил кор мекунад',
        },
        dimensionWeights: { practical: 25, technical: 20, problemSolving: 15 },
        rationaleTag: 'clean_code_breakthrough',
      },
      {
        id: 'q12_c',
        text: {
          en: 'Uncovering the legal precedent or constitutional clause that wins the case',
          ru: 'Найти юридический прецедент или норму закона, побеждающую в суде',
          tg: 'Ёфтани прецеденти ҳуқуқӣ ё моддаи қонуне, ки дар суд пирӯзӣ меорад',
        },
        dimensionWeights: { analytical: 25, leadership: 20, communication: 15 },
        rationaleTag: 'legal_precedent_breakthrough',
      },
      {
        id: 'q12_d',
        text: {
          en: 'Seeing a struggling student suddenly grasp a difficult concept with joy',
          ru: 'Увидеть, как тяжело учившийся ученик с радостью понял тему',
          tg: 'Дидани он, ки шогирд мавзӯи душворро бо хурсандӣ фаҳмид',
        },
        dimensionWeights: { communication: 25, social: 20, leadership: 15 },
        rationaleTag: 'student_lightbulb_breakthrough',
      },
    ],
  },
];
