import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, GraduationCap, ShieldCheck, Cpu, Users, Building2, Quote } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

// Image imports
import studentsHeroImg from '../assets/images/students_hero_banner_1786185955751.jpg';
import universityCampusImg from '../assets/images/university_campus_front_1786185969994.jpg';
import maleStudentImg from '../assets/images/student_success_avatar_1786185981877.jpg';
import femaleStudentImg from '../assets/images/female_student_avatar_1786185997481.jpg';

interface LandingScreenProps {
  language: Language;
  onStart: () => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({ language, onStart }) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col items-center text-center">
      {/* Immersive Floating Badge Pill */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#4A90E2]/10 border border-[#4A90E2]/30 text-[#4A90E2] shadow-[0_0_12px_rgba(74,144,226,0.2)] mb-8"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#4A90E2] animate-pulse" />
        <span>{t.tagline}</span>
        <span className="w-1 h-1 rounded-full bg-[#4A90E2]"></span>
        <span className="text-white/60">Tajikistan NTC 2026–2027</span>
      </motion.div>

      {/* Hero Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F0F0F0] max-w-4xl leading-[1.15]"
      >
        {t.landingTitle}
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl font-light leading-relaxed"
      >
        {t.landingSubtitle}
      </motion.p>

      {/* Visual Photo Banner & Converging Path */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="my-10 relative w-full max-w-3xl rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] shadow-2xl group"
      >
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={studentsHeroImg}
            alt="Students studying together"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>

          {/* Floating Campus Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/10 text-xs text-white/90">
            <Building2 className="w-4 h-4 text-[#4A90E2]" />
            <span className="font-semibold">
              {language === 'tg'
                ? 'Донишгоҳҳо ва Маркази Миллии Тестӣ'
                : language === 'ru'
                ? 'Университеты и НЦТ Таджикистана'
                : 'Universities & Tajikistan NTC'}
            </span>
          </div>

          {/* Floating Student Count Badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-left">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#4A90E2] font-mono font-bold">
                {language === 'tg' ? 'Роҳнамои Зеҳнӣ' : language === 'ru' ? 'Интеллектуальная навигация' : 'Smart Navigation'}
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {language === 'tg' ? 'Пайдо кардани ояндаи дурахшони академӣ' : language === 'ru' ? 'Твой путь к успеху и лучшим ВУЗам' : 'Discover Your Academic Future'}
              </h3>
            </div>

            <div className="flex items-center -space-x-2">
              <img src={maleStudentImg} alt="Student" className="w-8 h-8 rounded-full border-2 border-[#050505] object-cover" referrerPolicy="no-referrer" />
              <img src={femaleStudentImg} alt="Student" className="w-8 h-8 rounded-full border-2 border-[#050505] object-cover" referrerPolicy="no-referrer" />
              <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-[#4A90E2] text-white flex items-center justify-center text-[10px] font-bold">
                +1K
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Start Discovery CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <button
          onClick={onStart}
          className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[#4A90E2] hover:bg-[#357ABD] shadow-[0_0_24px_rgba(74,144,226,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
        >
          <span>{t.startDiscovery}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </motion.div>

      {/* Feature Value Props Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left w-full max-w-4xl"
      >
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#4A90E2]/15 text-[#4A90E2] flex items-center justify-center mb-4 border border-[#4A90E2]/30">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white mb-1.5">
            {language === 'en'
              ? 'Scenario Experiments'
              : language === 'ru'
              ? 'Сценарии и Эксперименты'
              : 'Сценарияҳо ва Таҷрибаҳо'}
          </h3>
          <p className="text-xs text-white/50 leading-relaxed">
            {language === 'en'
              ? '12 non-obvious thought problems measuring how you analyze, deconstruct, and solve under uncertainty.'
              : language === 'ru'
              ? '12 нестандартных задач, измеряющих то, как вы думаете и решаете сложные кейсы.'
              : '12 вазифаи ғайристандартӣ, ки тарзи фикрронӣ ва ҳалли мушкилоти шуморо месанҷанд.'}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#4A90E2]/15 text-[#4A90E2] flex items-center justify-center mb-4 border border-[#4A90E2]/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white mb-1.5">
            {language === 'en'
              ? 'Official Tajikistan NTC 2026–2027'
              : language === 'ru'
              ? 'Официальный НЦТ 2026–2027'
              : 'ММТ-и расмии 2026–2027'}
          </h3>
          <p className="text-xs text-white/50 leading-relaxed">
            {language === 'en'
              ? 'Direct match with official National Testing Center Clusters (1–5), specialties, and exam subjects.'
              : language === 'ru'
              ? 'Прямое сопоставление с Кластерами НЦТ (1–5), специальностями ВУЗов РТ и экзаменами.'
              : 'Мутобиқсозии мустақим бо Кластерҳои ММТ (1–5), ихтисосҳои ДМТ, ДТТ ва имтиҳонҳо.'}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#4A90E2]/15 text-[#4A90E2] flex items-center justify-center mb-4 border border-[#4A90E2]/30">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white mb-1.5">
            {language === 'en'
              ? 'Global Universities'
              : language === 'ru'
              ? 'Мировые программы'
              : 'Барномаҳои байналмилалӣ'}
          </h3>
          <p className="text-xs text-white/50 leading-relaxed">
            {language === 'en'
              ? 'Explore scholarships and university paths in Central Asia, Europe, USA, and Asia.'
              : language === 'ru'
              ? 'Подбор академических программ и грантов в Центральной Азии, Европе, США и Азии.'
              : 'Интихоби барномаҳои академӣ ва грантҳо дар Осиёи Марказӣ, Урупо ва ИМА.'}
          </p>
        </div>
      </motion.div>

      {/* Student Success Stories & University Showcase Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 w-full max-w-4xl space-y-8 text-left"
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-[#4A90E2]/20 text-[#4A90E2] flex items-center justify-center border border-[#4A90E2]/30">
            <Users className="w-4 h-4" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {language === 'tg'
              ? 'Донишҷӯён ва Донишгоҳҳо'
              : language === 'ru'
              ? 'Студенты и Университеты'
              : 'Students & University Campuses'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Student Story */}
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-4 flex flex-col justify-between">
            <div className="flex items-start space-x-4">
              <img
                src={maleStudentImg}
                alt="Student portrait"
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-2xl object-cover border border-[#4A90E2]/40 shadow-md shrink-0"
              />
              <div>
                <h4 className="text-base font-bold text-white">Фарҳод Самадов</h4>
                <p className="text-xs text-[#4A90E2] font-semibold">
                  {language === 'tg'
                    ? 'Донишҷӯи ДМТ (Кластери 1)'
                    : language === 'ru'
                    ? 'Студент ТНУ (Кластер 1)'
                    : 'TNU Student (Cluster 1)'}
                </p>
                <p className="text-[11px] text-white/40 mt-0.5">Инженерияи нармафзор</p>
              </div>
            </div>

            <p className="text-xs text-white/70 italic leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/5">
              <Quote className="w-4 h-4 text-[#4A90E2] mb-1 opacity-60 inline-block mr-1" />
              {language === 'tg'
                ? 'Платформаи "Ёвар" ба ман кӯмак кард, ки дар НЦТ кадом кластер ва кадом ихтисосро интихоб кунам. Ҳоло ман дар бахши барномасозии ДМТ таҳсил мекунам!'
                : language === 'ru'
                ? 'Платформа "Ёвар" помогла мне определить точный кластер НЦТ и специальность. Сейчас я успешно учусь на факультете программной инженерии!'
                : 'Yovar platform helped me precisely identify my NTC cluster and university major. Now studying Software Engineering!'}
            </p>
          </div>

          {/* Card 2: Student Story 2 */}
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-4 flex flex-col justify-between">
            <div className="flex items-start space-x-4">
              <img
                src={femaleStudentImg}
                alt="Student portrait"
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-2xl object-cover border border-[#4A90E2]/40 shadow-md shrink-0"
              />
              <div>
                <h4 className="text-base font-bold text-white">Мадина Каримова</h4>
                <p className="text-xs text-[#4A90E2] font-semibold">
                  {language === 'tg'
                    ? 'Донишҷӯи UCA / Гранти байналмилалӣ'
                    : language === 'ru'
                    ? 'Студентка UCA / Международный грант'
                    : 'UCA Student / Global Scholar'}
                </p>
                <p className="text-[11px] text-white/40 mt-0.5">Компьютер ва Data Science</p>
              </div>
            </div>

            <p className="text-xs text-white/70 italic leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/5">
              <Quote className="w-4 h-4 text-[#4A90E2] mb-1 opacity-60 inline-block mr-1" />
              {language === 'tg'
                ? 'Ман тавонистам имкониятҳои таҳсил дар донишгоҳҳои байналмилалиро омӯзам ва барои стипендияи пурра ҳуҷҷат супорам. Ташаккур ба "Ёвар"!'
                : language === 'ru'
                ? 'Я открыла для себя программы международных университетов и выиграла полный грант на обучение. Огромное спасибо "Ёвар"!'
                : 'I discovered international scholarship opportunities and secured a full grant to study Computer Science. Thank you Yovar!'}
            </p>
          </div>
        </div>

        {/* Featured Campus Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] p-6 flex flex-col sm:flex-row items-center gap-6">
          <img
            src={universityCampusImg}
            alt="University Campus"
            referrerPolicy="no-referrer"
            className="w-full sm:w-1/2 h-44 rounded-2xl object-cover border border-white/10"
          />
          <div className="space-y-2 text-left">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#4A90E2]/20 text-[#4A90E2] border border-[#4A90E2]/30">
              {language === 'tg' ? 'Кампусҳои муосир' : language === 'ru' ? 'Современные кампусы' : 'Modern Campuses'}
            </span>
            <h3 className="text-lg font-bold text-white">
              {language === 'tg'
                ? 'Кампусҳо ва биноҳои таълимии Тоҷикистон ва ҷаҳон'
                : language === 'ru'
                ? 'Университетские кампусы Таджикистана и мира'
                : 'University Campuses in Tajikistan & Overseas'}
            </h3>
            <p className="text-xs text-white/60 leading-relaxed">
              {language === 'tg'
                ? 'Шумо метавонед ихтисосҳо ва донишгоҳҳои Душанбе, Хуҷанд, Хоруғ ва кишварҳои хориҷиро омӯзед.'
                : language === 'ru'
                ? 'Исследуйте специальности и кампусы в Душанбе, Худжанде, Хороге и ведущих мировых вузах.'
                : 'Explore majors and campus environments in Dushanbe, Khujand, Khorog, and international universities.'}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

