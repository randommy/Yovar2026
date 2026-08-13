import React, { useState } from 'react';
import { X, Copy, Check, Share2 } from 'lucide-react';
import { AnalysisResult, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: AnalysisResult;
  language: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  result,
  language,
}) => {
  if (!isOpen) return null;

  const t = UI_TRANSLATIONS[language];
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const topTitle = result.topDirection.title[language];
  const matchPct = result.topDirection.matchPercentage;
  const clusterTitle = result.recommendedNTCCluster.title[language];

  const summaryText = `🧭 PATHFINDER Discovery Result:
• My Direction: ${topTitle} (${matchPct}% Match)
• Recommended NTC Cluster: ${clusterTitle}
• Key Insights:
${result.whyThisFitsYou.map((r) => `  - ${r}`).join('\n')}

Explore your own career path at PATHFINDER!`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#050505] p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-white/40 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 border-2 border-[#4A90E2] rotate-45 flex items-center justify-center shadow-[0_0_12px_rgba(74,144,226,0.5)]">
            <div className="w-1.5 h-1.5 bg-white"></div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              {t.shareModalTitle}
            </h3>
            <p className="text-xs text-white/50">{t.shareModalSubtitle}</p>
          </div>
        </div>

        {/* Formatted Card Preview */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 font-sans text-left">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4A90E2]">
              ЁВАР PROFILE
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#4A90E2]/20 text-white border border-[#4A90E2]">
              {matchPct}% {t.matchScore}
            </span>
          </div>

          <h4 className="text-base font-bold text-white">{topTitle}</h4>

          <p className="text-xs text-white/60">
            {t.tajikistanNtcTarget}: {clusterTitle}
          </p>

          <div className="pt-2 border-t border-white/10 space-y-1">
            {result.whyThisFitsYou.slice(0, 2).map((reason, idx) => (
              <p key={idx} className="text-xs text-white/70 truncate">
                • {reason}
              </p>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCopyText}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
          >
            {copiedSummary ? (
              <Check className="w-4 h-4 text-[#4A90E2]" />
            ) : (
              <Copy className="w-4 h-4 text-white/60" />
            )}
            <span>{copiedSummary ? t.copiedText : t.copySummaryText}</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-full text-xs font-bold text-white bg-[#4A90E2] hover:bg-[#357ABD] shadow-[0_0_16px_rgba(74,144,226,0.4)] transition-all cursor-pointer"
          >
            {copiedLink ? (
              <Check className="w-4 h-4 text-white" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
            <span>{copiedLink ? t.copiedLink : t.downloadCard}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
