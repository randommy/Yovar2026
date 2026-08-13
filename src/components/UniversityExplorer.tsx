import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  CheckCircle,
  MapPin,
  Globe,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  AnalysisResult,
  Language,
} from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { NTC_CLUSTERS } from '../data/ntcData';
import { INTERNATIONAL_UNIVERSITIES } from '../data/internationalData';
import universityCampusImg from '../assets/images/university_campus_front_1786185969994.jpg';

interface UniversityExplorerProps {
  result: AnalysisResult;
  language: Language;
}

export const UniversityExplorer: React.FC<UniversityExplorerProps> = ({ result, language }) => {
  const t = UI_TRANSLATIONS[language];
  const [explorerMode, setExplorerMode] = useState<'tajikistan' | 'international'>('tajikistan');
  const [activeClusterNum, setActiveClusterNum] = useState<number>(
    result.recommendedNTCCluster.clusterNumber
  );
  const [activeRegion, setActiveRegion] = useState<string>('all');

  const selectedCluster =
    NTC_CLUSTERS.find((c) => c.clusterNumber === activeClusterNum) || result.recommendedNTCCluster;

  const filteredInternational =
    activeRegion === 'all'
      ? INTERNATIONAL_UNIVERSITIES
      : INTERNATIONAL_UNIVERSITIES.filter((u) => u.region === activeRegion);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 py-4">
      {/* Explorer Mode Selector Toggle */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
          {t.universityExplorer}
        </h2>

        {/* Mode Switcher Buttons */}
        <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 space-x-2 max-w-full overflow-x-auto backdrop-blur-md">
          <button
            onClick={() => setExplorerMode('tajikistan')}
            className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              explorerMode === 'tajikistan'
                ? 'bg-[#4A90E2] text-white shadow-[0_0_16px_rgba(74,144,226,0.4)]'
                : 'text-white/50 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>{t.tajikistanMode}</span>
          </button>

          <button
            onClick={() => setExplorerMode('international')}
            className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              explorerMode === 'international'
                ? 'bg-[#4A90E2] text-white shadow-[0_0_16px_rgba(74,144,226,0.4)]'
                : 'text-white/50 hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4 text-white" />
            <span>{t.internationalMode}</span>
          </button>
        </div>
      </div>

      {/* MODE 1: STUDY IN TAJIKISTAN (OFFICIAL NTC 2026-2027) */}
      {explorerMode === 'tajikistan' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* NTC Disclaimer Banner */}
          <div className="p-4 rounded-2xl bg-[#4A90E2]/10 border border-[#4A90E2]/30 flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#4A90E2] shrink-0 mt-0.5" />
            <p className="text-xs text-white/80 leading-relaxed">
              {t.disclaimerNTC}
            </p>
          </div>

          {/* Cluster Selector Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {NTC_CLUSTERS.map((cluster) => {
              const isRecommended = result.recommendedNTCCluster.clusterNumber === cluster.clusterNumber;
              const isActive = activeClusterNum === cluster.clusterNumber;
              const clusterLabel =
                language === 'tg'
                  ? `Кластери ${cluster.clusterNumber}`
                  : language === 'ru'
                  ? `Кластер ${cluster.clusterNumber}`
                  : `Cluster ${cluster.clusterNumber}`;

              return (
                <button
                  key={cluster.clusterNumber}
                  onClick={() => setActiveClusterNum(cluster.clusterNumber)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                    isActive
                      ? 'bg-[#4A90E2]/20 text-white border-[#4A90E2] shadow-[0_0_12px_rgba(74,144,226,0.3)]'
                      : 'bg-white/[0.03] text-white/50 border-white/10 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{clusterLabel}</span>
                    {isRecommended && (
                      <span className="px-1.5 py-0.5 rounded-full text-[9px] bg-[#4A90E2] text-white font-extrabold uppercase">
                        {t.fitBadge}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Cluster Details Card */}
          <div className="p-6 sm:p-8 rounded-3xl border border-[#4A90E2]/30 bg-white/[0.03] backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#4A90E2]/15 text-[#4A90E2] border border-[#4A90E2]/30">
                {t.recommendedNTCCluster} • {language === 'tg' ? `Кластери ${selectedCluster.clusterNumber}` : language === 'ru' ? `Кластер ${selectedCluster.clusterNumber}` : `Cluster ${selectedCluster.clusterNumber}`}
              </span>

              {selectedCluster.clusterNumber === result.recommendedNTCCluster.clusterNumber && (
                <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#4A90E2]" />
                  <span>{t.aiRecommendationBadge}</span>
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedCluster.title[language]}
            </h3>

            <p className="text-sm text-white/70 leading-relaxed mb-6">
              {selectedCluster.description[language]}
            </p>

            {/* Required NTC Exam Subjects */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <h4 className="text-xs font-mono font-bold text-[#4A90E2] uppercase tracking-wider mb-3">
                {t.examinationPath}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCluster.examinationSubjects[language].map((sub, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-white/80">
                    <CheckCircle className="w-3.5 h-3.5 text-[#4A90E2] shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tajikistan Specialties & Universities */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide">
              {t.topTajikSpecialties}
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {selectedCluster.specialties.map((spec) => (
                <div
                  key={spec.code}
                  className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-white/20 transition-all space-y-4"
                >
                  <div className="relative h-36 sm:h-44 w-full overflow-hidden rounded-2xl border border-white/10 mb-2">
                    <img
                      src={spec.imageUrl || universityCampusImg}
                      alt={spec.universityName[language]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-3 text-[11px] font-semibold text-white/90 drop-shadow">
                      {spec.universityName[language]}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center space-x-2">
                      {/* Official NTC Tag */}
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
                        {t.officialNTCBadge}: {spec.code}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#4A90E2]/15 text-[#4A90E2] border border-[#4A90E2]/30">
                        {t.aiRecommendationBadge}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-bold text-[#4A90E2]">
                      {spec.matchScore}% {t.matchScore}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {spec.name[language]}
                    </h4>
                    <p className="text-sm font-semibold text-[#4A90E2] flex items-center space-x-1.5">
                      <Building2 className="w-4 h-4 shrink-0 text-[#4A90E2]" />
                      <span>{spec.universityName[language]}</span>
                    </p>
                  </div>

                  {/* Metadata Chips: City, Format, Language, Tuition */}
                  <div className="flex flex-wrap gap-2 text-xs font-medium">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10 flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#4A90E2]" />
                      <span>{spec.city[language]}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10">
                      {t.formatLabel}: {spec.studyFormat[language]}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10">
                      {t.langLabel}: {spec.languageOfInstruction[language]}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10">
                      {t.tuitionLabel}: {spec.tuitionType[language]}
                    </span>
                  </div>

                  <p className="text-xs text-white/70 bg-white/[0.02] p-3 rounded-2xl border border-white/10 leading-relaxed italic">
                    "{spec.fitExplanation[language]}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* MODE 2: EXPLORE INTERNATIONAL OPTIONS */}
      {explorerMode === 'international' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Region Filter Buttons */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: t.allRegions },
              { id: 'central_asia', label: t.regionCentralAsia },
              { id: 'europe', label: t.regionEurope },
              { id: 'usa', label: t.regionUSA },
              { id: 'asia', label: t.regionAsia },
            ].map((reg) => (
              <button
                key={reg.id}
                onClick={() => setActiveRegion(reg.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                  activeRegion === reg.id
                    ? 'bg-[#4A90E2]/20 text-white border-[#4A90E2] shadow-[0_0_12px_rgba(74,144,226,0.3)]'
                    : 'bg-white/[0.03] text-white/50 border-white/10 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>

          {/* International University Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredInternational.map((univ) => (
              <div
                key={univ.id}
                className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {univ.imageUrl && (
                    <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-white/10 mb-3">
                      <img
                        src={univ.imageUrl}
                        alt={univ.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-3 text-[11px] font-semibold text-white/90 drop-shadow">
                        {univ.name}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
                      {univ.country[language]}
                    </span>
                    <span className="text-xs font-mono text-[#4A90E2] font-bold">
                      {univ.ranking}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {univ.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#4A90E2]">
                    {t.fieldLabel}: {univ.field[language]}
                  </p>

                  <p className="text-xs text-white/70 leading-relaxed bg-white/[0.02] p-3 rounded-2xl border border-white/10">
                    "{univ.matchReason[language]}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <p className="text-[11px] text-white/50 max-w-[70%] font-medium">
                    {univ.tuitionInfo[language]}
                  </p>

                  <a
                    href={univ.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all shrink-0 cursor-pointer"
                  >
                    <span>{t.exploreUniversity}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};
