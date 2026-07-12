export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
  date: string;
  category: string;
  featured: boolean;
  screenshots: string[];
}
