export interface SkillGroup {
  category: string;
  items: string[];
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}
