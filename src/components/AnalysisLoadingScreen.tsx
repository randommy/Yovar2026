import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface AnalysisLoadingScreenProps {
  language: Language;
  onFinishLoading: () => void;
}

export const AnalysisLoadingScreen: React.FC<AnalysisLoadingScreenProps> = ({
  language,
  onFinishLoading,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    t.connectingDots,
    t.mappingStrengths,
    t.exploringDirections,
    t.analyzingNTC,
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 650);

    const finishTimeout = setTimeout(() => {
      onFinishLoading();
    }, 2800);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(finishTimeout);
    };
  }, []);

  return (
    <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center justify-center text-center min-h-[70vh]">
      {/* Central Pulsing Geometric Graphic */}
      <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
        {/* Outer Glowing Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-[#4A90E2]/40"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 rounded-full border border-white/20"
        />
        <div className="absolute inset-0 bg-[#4A90E2]/15 rounded-full blur-xl animate-pulse" />

        {/* Center Diamond Icon */}
        <div className="relative w-12 h-12 border-2 border-[#4A90E2] rotate-45 flex items-center justify-center bg-[#050505] shadow-[0_0_20px_rgba(74,144,226,0.6)]">
          <div className="w-2 h-2 bg-white animate-ping" />
        </div>
      </div>

      {/* Dynamic Animated Status Messages */}
      <div className="h-16 flex items-center justify-center">
        <motion.div
          key={stepIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center space-x-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_12px_rgba(74,144,226,0.2)]"
        >
          <Sparkles className="w-4 h-4 text-[#4A90E2] animate-spin" />
          <span className="text-base font-bold text-white tracking-wide">
            {steps[stepIndex]}
          </span>
        </motion.div>
      </div>

      <p className="mt-8 text-[10px] font-mono text-white/40 uppercase tracking-widest">
        ЁВАР COGNITIVE ENGINE v2.6
      </p>
    </div>
  );
};
