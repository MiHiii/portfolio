export interface SeoContent {
  title: string;
  description: string;
  keywords: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  username: string;
}

export interface ProfileContent {
  name: string;
  title: string;
  positioning: string;
  supportingLine: string;
  location: string;
  socials: SocialLink[];
}

export interface AboutContent {
  heading: string;
  paragraph: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyHref?: string;
  logo: string;
  duration: string;
  summary: string;
  highlights: string[];
  images?: string[];
}

export interface ExperienceContent {
  heading: string;
  visitCompanyLabel: string;
  items: ExperienceItem[];
}

export interface EducationItem {
  school: string;
  major: string;
  duration: string;
  gpa?: string;
}

export interface EducationContent {
  heading: string;
  items: EducationItem[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  meta: string;
  description: string;
  tech: string[];
  links?: ProjectLink[];
}

export interface ProjectsContent {
  heading: string;
  items: ProjectItem[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SkillsContent {
  heading: string;
  groups: SkillGroup[];
}

export interface CertificationItem {
  name: string;
  date: string;
}

export interface CertificationsContent {
  heading: string;
  items: CertificationItem[];
}

export interface AwardsContent {
  heading: string;
  items: string[];
}

export interface ResumeDocument {
  key: string;
  label: string;
  href: string;
  downloadName: string;
}

export interface ResumeContent {
  ctaLabel: string;
  dialogTitle: string;
  viewLabel: string;
  downloadLabel: string;
  note?: string;
  documents: ResumeDocument[];
}

export interface UiContent {
  languageSwitcherLabel: string;
}

export interface PortfolioContent {
  htmlLang: string;
  seo: SeoContent;
  profile: ProfileContent;
  about: AboutContent;
  experience: ExperienceContent;
  education: EducationContent;
  projects: ProjectsContent;
  skills: SkillsContent;
  certifications: CertificationsContent;
  awards?: AwardsContent;
  resume: ResumeContent;
  ui: UiContent;
}
