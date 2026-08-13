import React from 'react';
import { RefreshCw, Globe } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onReset: () => void;
  currentScreen: 'landing' | 'discovery' | 'analysis' | 'results';
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onReset,
  currentScreen,
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between border-b border-white/10 bg-[#050505]/60 backdrop-blur-md">
      {/* Brand Identity - Immersive UI Diamond Logo */}
      <button
        onClick={onReset}
        className="flex items-center space-x-3 group text-left focus:outline-none cursor-pointer"
      >
        <div className="w-6 h-6 border-2 border-[#4A90E2] rotate-45 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_12px_rgba(74,144,226,0.5)]">
          <div className="w-1.5 h-1.5 bg-white"></div>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-widest text-white font-sans">
              {t.brandName}
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#4A90E2]/15 text-[#4A90E2] border border-[#4A90E2]/30">
              NTC 2026
            </span>
          </div>
        </div>
      </button>

      {/* Controls: Language Switcher Pill & Action Mode Button */}
      <div className="flex items-center space-x-4 text-[11px] font-semibold tracking-tighter">
        {/* Trilingual Pill Container */}
        <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 space-x-3 backdrop-blur-md">
          {(['en', 'ru', 'tg'] as Language[]).map((lang) => {
            const labelMap: Record<Language, string> = {
              en: 'EN',
              ru: 'РУ',
              tg: 'ТҶ',
            };
            const isActive = language === lang;
            return (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`cursor-pointer transition-colors px-1 py-0.5 rounded ${
                  isActive
                    ? 'text-white font-bold text-[#4A90E2]'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {labelMap[lang]}
              </button>
            );
          })}
        </div>

        {/* Restart Button */}
        {currentScreen !== 'landing' && (
          <button
            onClick={onReset}
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2 rounded-full text-white transition-all cursor-pointer font-medium text-xs tracking-normal"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#4A90E2]" />
            <span className="hidden md:inline">{t.retakeAssessment}</span>
          </button>
        )}
      </div>
    </header>
  );
};
