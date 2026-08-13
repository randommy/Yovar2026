export type Language = 'en' | 'ru' | 'tg';

export type ThinkingDimensionKey =
  | 'analytical'
  | 'systems'
  | 'creativity'
  | 'curiosity'
  | 'problemSolving'
  | 'leadership'
  | 'communication'
  | 'uncertaintyTolerance'
  | 'scientific'
  | 'technical'
  | 'social'
  | 'practical';

export type DimensionScoreMap = Record<ThinkingDimensionKey, number>;

export interface QuestionOption {
  id: string;
  text: Record<Language, string>;
  dimensionWeights: Partial<Record<ThinkingDimensionKey, number>>;
  rationaleTag: string; // short key used for personal explanation builder
}

export interface Question {
  id: number;
  scenarioNumber: string; // e.g. "01 / 12"
  title: Record<Language, string>;
  options: QuestionOption[];
}

export interface UserAnswer {
  questionId: number;
  optionId: string;
  optionText: string;
  dimensionWeights: Partial<Record<ThinkingDimensionKey, number>>;
  rationaleTag: string;
}

export interface NTCSpecialty {
  code: string;
  name: Record<Language, string>;
  universityName: Record<Language, string>;
  universityShort: string;
  city: Record<Language, string>;
  studyFormat: Record<Language, string>;
  languageOfInstruction: Record<Language, string>;
  tuitionType: Record<Language, string>;
  matchScore: number;
  fitExplanation: Record<Language, string>;
  officialNTCData: boolean;
  imageUrl?: string;
}

export interface NTCCluster {
  clusterNumber: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  examinationSubjects: Record<Language, string[]>;
  specialties: NTCSpecialty[];
}

export interface InternationalUniversity {
  id: string;
  name: string;
  country: Record<Language, string>;
  region: 'central_asia' | 'europe' | 'usa' | 'asia';
  field: Record<Language, string>;
  ranking: string;
  matchReason: Record<Language, string>;
  tuitionInfo: Record<Language, string>;
  website: string;
  imageUrl?: string;
}

export interface SubjectRecommendation {
  subject: Record<Language, string>;
  reason: Record<Language, string>;
}

export interface CareerDirection {
  id: string;
  title: Record<Language, string>;
  matchPercentage: number;
  summary: Record<Language, string>;
  ntcClusterNumber: number;
  keyStrengths: Record<Language, string[]>;
  recommendedSubjects: SubjectRecommendation[];
  careerFields: Record<Language, string[]>;
}

export interface AnalysisResult {
  topDirection: CareerDirection;
  otherDirections: CareerDirection[];
  whyThisFitsYou: string[];
  dimensionScores: {
    key: ThinkingDimensionKey;
    label: Record<Language, string>;
    score: number;
  }[];
  recommendedNTCCluster: NTCCluster;
  recommendedTajikSpecialties: NTCSpecialty[];
  nextSteps: Record<Language, string[]>;
  isAiGenerated?: boolean;
}
