import { Skills } from '@/components/portfolio/Skills';
import { Profile } from '@/components/portfolio/Profile';
import type { ProfileContent, ResumeContent, SkillsContent, UiContent } from '@/content/types';
import type { Locale } from '@/i18n/config';

interface SidebarProps {
  profile: ProfileContent;
  resume: ResumeContent;
  skills: SkillsContent;
  ui: UiContent;
  locale: Locale;
}

export const Sidebar = ({ profile, resume, skills, ui, locale }: SidebarProps) => {
  return (
    <aside className='md:col-span-1'>
      <Profile profile={profile} resume={resume} ui={ui} locale={locale} />
      <Skills skills={skills} />
    </aside>
  );
};
