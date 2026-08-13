import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle, Brain, BookOpen, Target, Award } from 'lucide-react';
import { AnalysisResult, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface ResultsScreenProps {
  result: AnalysisResult;
  language: Language;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ result, language }) => {
  const t = UI_TRANSLATIONS[language];
  const { topDirection, otherDirections, whyThisFitsYou, dimensionScores } = result;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 py-4">
      {/* SCREEN 4 — YOUR DIRECTION HERO CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-[#4A90E2]/40 bg-white/[0.03] backdrop-blur-md p-8 sm:p-12 shadow-[0_0_30px_rgba(74,144,226,0.15)]"
      >
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#4A90E2]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#4A90E2]/15 text-[#4A90E2] border border-[#4A90E2]/30">
            <Target className="w-3.5 h-3.5 text-[#4A90E2]" />
            <span>{t.yourDirection}</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#4A90E2]/20 border border-[#4A90E2] text-white font-bold text-sm sm:text-base shadow-[0_0_12px_rgba(74,144,226,0.3)]">
            <Award className="w-4 h-4 text-[#4A90E2]" />
            <span>
              {topDirection.matchPercentage}% {t.matchScore}
            </span>
          </div>
        </div>

        {/* Direction Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F0F0F0] tracking-tight mb-4 leading-tight">
          {topDirection.title[language]}
        </h1>

        <p className="text-base sm:text-lg text-white/70 max-w-3xl font-light leading-relaxed mb-8">
          {topDirection.summary[language]}
        </p>

        {/* Key Strengths Pills */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
          {topDirection.keyStrengths[language].map((strength, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/15"
            >
              • {strength}
            </span>
          ))}
        </div>
      </motion.div>

      {/* WHY THIS FITS YOU SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-[#4A90E2]/15 text-[#4A90E2] flex items-center justify-center border border-[#4A90E2]/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            {t.whyThisFitsYou}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whyThisFitsYou.map((reason, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start space-x-3.5 hover:border-white/20 transition-colors"
            >
              <CheckCircle className="w-5 h-5 text-[#4A90E2] shrink-0 mt-0.5" />
              <p className="text-sm text-white/80 font-medium leading-relaxed">
                "{reason}"
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* VISUAL COGNITIVE & THINKING PROFILE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-[#4A90E2]/15 text-[#4A90E2] flex items-center justify-center border border-[#4A90E2]/30">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              {t.cognitiveProfile}
            </h2>
            <p className="text-xs text-white/50">
              {language === 'en'
                ? 'Indirectly measured across 12 scenario-based decisions'
                : language === 'ru'
                ? 'Измерено по 12 сценарным решениям'
                : 'Аз рӯи 12 қарори сценариявӣ баҳо дода шудааст'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {dimensionScores.map((dim) => (
            <div key={dim.key} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-white/80">{dim.label[language]}</span>
                <span className="font-mono text-[#4A90E2] font-bold">{dim.score}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden border border-white/10">
                <motion.div
                  className="h-full bg-[#4A90E2] shadow-[0_0_8px_rgba(74,144,226,0.6)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${dim.score}%` }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* SCREEN 5 — RECOMMENDED DIRECTIONS */}
      {otherDirections.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide mb-6">
            {t.recommendedDirections}
          </h2>

          <div className="space-y-4">
            {otherDirections.map((dir, idx) => (
              <div
                key={dir.id}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="font-mono text-xs font-bold text-white/40">
                      0{idx + 2}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {dir.title[language]}
                    </h3>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed max-w-2xl">
                    {dir.summary[language]}
                  </p>
                </div>

                <div className="shrink-0 px-3.5 py-1 rounded-full bg-[#4A90E2]/15 border border-[#4A90E2]/40 text-[#4A90E2] font-mono font-bold text-xs">
                  {dir.matchPercentage}% {t.matchScore}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* SCREEN 6 — EDUCATION PATH: WHAT TO STUDY & WHERE IT TAKES YOU */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Recommended Subjects */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#4A90E2]/15 text-[#4A90E2] flex items-center justify-center border border-[#4A90E2]/30">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                {t.whatToStudy}
              </h2>
            </div>

            <div className="space-y-4">
              {topDirection.recommendedSubjects.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/10"
                >
                  <h3 className="text-sm font-bold text-[#4A90E2] mb-1">
                    {sub.subject[language]}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {sub.reason[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Where This Takes You */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#4A90E2]/15 text-[#4A90E2] flex items-center justify-center border border-[#4A90E2]/30">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                {t.whereThisTakesYou}
              </h2>
            </div>

            <div className="space-y-3">
              {topDirection.careerFields[language].map((field, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center space-x-3"
                >
                  <span className="w-2 h-2 rounded-full bg-[#4A90E2] shrink-0 shadow-[0_0_6px_rgba(74,144,226,0.6)]" />
                  <span className="text-sm font-semibold text-white/80">
                    {field}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
