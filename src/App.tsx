import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Header } from './components/Header';
import { LandingScreen } from './components/LandingScreen';
import { DiscoveryScreen } from './components/DiscoveryScreen';
import { AnalysisLoadingScreen } from './components/AnalysisLoadingScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { UniversityExplorer } from './components/UniversityExplorer';
import { RoadmapSection } from './components/RoadmapSection';
import { DISCOVERY_QUESTIONS } from './data/questions';
import { AnalysisResult, Language, UserAnswer } from './types';
import { fetchAiEnhancedAnalysis } from './utils/analysisEngine';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentScreen, setCurrentScreen] = useState<
    'landing' | 'discovery' | 'analysis' | 'results'
  >('landing');
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleStartDiscovery = () => {
    setUserAnswers([]);
    setAnalysisResult(null);
    setCurrentScreen('discovery');
  };

  const handleCompleteDiscovery = async (answers: UserAnswer[]) => {
    setUserAnswers(answers);
    setCurrentScreen('analysis');

    // Trigger calculation + optional server-side Gemini enhancement
    const result = await fetchAiEnhancedAnalysis(answers, language);
    setAnalysisResult(result);
  };

  const handleFinishLoadingAnimation = () => {
    setCurrentScreen('results');
  };

  const handleResetToLanding = () => {
    setCurrentScreen('landing');
    setUserAnswers([]);
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Dynamic Animated Convergent Path Canvas */}
      <BackgroundCanvas />

      {/* Global Application Header */}
      <Header
        language={language}
        onLanguageChange={(newLang) => {
          setLanguage(newLang);
          // Re-evaluate current result if on results screen
          if (analysisResult && userAnswers.length > 0) {
            fetchAiEnhancedAnalysis(userAnswers, newLang).then(setAnalysisResult);
          }
        }}
        onReset={handleResetToLanding}
        currentScreen={currentScreen}
      />

      {/* Main Content View Container */}
      <main className="relative z-10 min-h-[calc(100vh-80px)] pb-20">
        {currentScreen === 'landing' && (
          <LandingScreen
            language={language}
            onStart={handleStartDiscovery}
          />
        )}

        {currentScreen === 'discovery' && (
          <DiscoveryScreen
            questions={DISCOVERY_QUESTIONS}
            language={language}
            onComplete={handleCompleteDiscovery}
            onBackToLanding={handleResetToLanding}
          />
        )}

        {currentScreen === 'analysis' && (
          <AnalysisLoadingScreen
            language={language}
            onFinishLoading={handleFinishLoadingAnimation}
          />
        )}

        {currentScreen === 'results' && analysisResult && (
          <div className="space-y-12 px-4 sm:px-6">
            {/* Screen 4, 5, 6: Career Direction, WHY Fits, Profile, Subjects */}
            <ResultsScreen
              result={analysisResult}
              language={language}
            />

            {/* Screen 7: University Explorer (Tajikistan NTC & International) */}
            <UniversityExplorer
              result={analysisResult}
              language={language}
            />

            {/* Screen 8: Personal 3-Step Roadmap & Share */}
            <RoadmapSection
              result={analysisResult}
              language={language}
              onRetake={handleStartDiscovery}
            />
          </div>
        )}
      </main>
    </div>
  );
}
