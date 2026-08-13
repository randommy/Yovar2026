import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Route, RefreshCw, Share2 } from 'lucide-react';
import { AnalysisResult, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { ShareModal } from './ShareModal';

interface RoadmapSectionProps {
  result: AnalysisResult;
  language: Language;
  onRetake: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  result,
  language,
  onRetake,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [isShareOpen, setIsShareOpen] = useState(false);
  const steps = result.nextSteps[language];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 py-4">
      {/* SCREEN 8 — PERSONAL ROADMAP: YOUR NEXT 3 STEPS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-10 shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-9 h-9 rounded-xl bg-[#4A90E2]/15 text-[#4A90E2] flex items-center justify-center border border-[#4A90E2]/30">
            <Route className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            {t.yourNextSteps}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((stepText, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 relative flex flex-col justify-between space-y-4 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-[#4A90E2]">
                  0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#4A90E2] shadow-[0_0_6px_rgba(74,144,226,0.6)]" />
              </div>

              <p className="text-sm font-medium text-white/80 leading-relaxed">
                {stepText}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons: Retake & Share */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRetake}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 text-[#4A90E2]" />
            <span>{t.retakeAssessment}</span>
          </button>

          <button
            onClick={() => setIsShareOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#4A90E2] hover:bg-[#357ABD] shadow-[0_0_20px_rgba(74,144,226,0.4)] transition-all cursor-pointer hover:scale-[1.02]"
          >
            <Share2 className="w-4 h-4" />
            <span>{t.shareResult}</span>
          </button>
        </div>
      </motion.div>

      {/* Share Modal Dialog */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        result={result}
        language={language}
      />
    </div>
  );
};
