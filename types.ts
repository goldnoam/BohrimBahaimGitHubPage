export interface ResourceLink {
  name: string;
  description: string;
  phone: string;
  website: string;
}

export interface DamageInfo {
  title: string;
  description: string;
  icon: string;
  category: 'alcohol' | 'drugs' | 'driving' | 'enforcement';
}

export interface LegalInfo {
  offense: string;
  punishment: string;
  details: string;
}

export interface FeedbackMessage {
  id: string;
  role: 'user' | 'system';
  text: string;
}

export interface EnforcementInfo {
  title: string;
  description: string;
  method: string;
  icon: string;
}