import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Language, Question, QuestionOption, UserAnswer } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface DiscoveryScreenProps {
  questions: Question[];
  language: Language;
  onComplete: (answers: UserAnswer[]) => void;
  onBackToLanding: () => void;
}

export const DiscoveryScreen: React.FC<DiscoveryScreenProps> = ({
  questions,
  language,
  onComplete,
  onBackToLanding,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answersMap, setAnswersMap] = useState<Record<number, UserAnswer>>({});

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const currentAnswer = answersMap[currentQuestion.id];

  const handleSelectOption = (option: QuestionOption) => {
    const userAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      optionId: option.id,
      optionText: option.text[language],
      dimensionWeights: option.dimensionWeights,
      rationaleTag: option.rationaleTag,
    };

    const newMap = { ...answersMap, [currentQuestion.id]: userAnswer };
    setAnswersMap(newMap);

    // Auto-advance after brief delay for smooth interaction
    setTimeout(() => {
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        const answersList = Object.values(newMap);
        onComplete(answersList);
      }
    }, 280);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      onBackToLanding();
    }
  };

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col min-h-[80vh] justify-between">
      {/* Top Navigation & Progress Bar */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePrev}
            className="inline-flex items-center space-x-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 text-[#4A90E2]" />
            <span>{t.back}</span>
          </button>

          <div className="flex items-center space-x-2 font-mono text-xs font-bold text-[#4A90E2] bg-[#4A90E2]/10 px-3.5 py-1 rounded-full border border-[#4A90E2]/30">
            <span>{t.questionProgress}</span>
            <span className="text-white">{currentQuestion.scenarioNumber}</span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/10 mb-8">
          <motion.div
            className="h-full bg-[#4A90E2] shadow-[0_0_8px_rgba(74,144,226,0.6)]"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Main Question & Scenario Options */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35 }}
          className="my-auto py-4"
        >
          {/* Question Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F0F0F0] leading-snug sm:leading-tight mb-8">
            {currentQuestion.title[language]}
          </h2>

          {/* 4 Option Cards */}
          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = currentAnswer?.optionId === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option)}
                  className={`group relative text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start space-x-4 backdrop-blur-md ${
                    isSelected
                      ? 'bg-[#4A90E2]/15 border-[#4A90E2] shadow-[0_0_16px_rgba(74,144,226,0.25)] text-white'
                      : 'bg-white/[0.03] hover:bg-white/[0.07] border-white/10 hover:border-white/20 text-white/80 hover:text-white'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'bg-[#4A90E2] text-white shadow-[0_0_8px_rgba(74,144,226,0.6)]'
                        : 'bg-white/10 text-white/60 group-hover:bg-white/20 group-hover:text-white'
                    }`}
                  >
                    {isSelected ? (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    ) : (
                      String.fromCharCode(65 + idx)
                    )}
                  </div>

                  <span className="text-base sm:text-lg font-medium leading-relaxed">
                    {option.text[language]}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Helper Text */}
      <div className="pt-6 text-center text-xs font-mono text-white/40 uppercase tracking-wider">
        <span>{t.selectOptionToContinue}</span>
      </div>
    </div>
  );
};
