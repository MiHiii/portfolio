import { Sidebar } from '@/components/portfolio/Sidebar';
import { About } from '@/components/portfolio/About';
import { Experience } from '@/components/portfolio/Experience';
import { Education } from '@/components/portfolio/Education';
import { Projects } from '@/components/portfolio/Projects';
import { Certifications } from '@/components/portfolio/Certifications';
import type { PortfolioContent } from '@/content/types';
import type { Locale } from '@/i18n/config';

interface PortfolioProps {
  content: PortfolioContent;
  locale: Locale;
}

export const Portfolio = ({ content, locale }: PortfolioProps) => {
  return (
    <div className='bg-background min-h-screen'>
      <div className='container max-w-screen-lg mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Sidebar
            profile={content.profile}
            resume={content.resume}
            skills={content.skills}
            ui={content.ui}
            locale={locale}
          />
          <main className='md:col-span-2'>
            <About about={content.about} />
            <Experience experience={content.experience} />
            <Education education={content.education} />
            <Projects projects={content.projects} />
            <Certifications certifications={content.certifications} />
          </main>
        </div>
      </div>
    </div>
  );
};
