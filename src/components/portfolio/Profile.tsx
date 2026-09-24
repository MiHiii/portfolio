import Link from 'next/link';
import Image from 'next/image';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Card, CardContent } from '@/components/ui/card';
import { ResumeMenu } from '@/components/portfolio/ResumeMenu';
import { LanguageSwitcher } from '@/components/portfolio/LanguageSwitcher';
import type { ProfileContent, ResumeContent, UiContent } from '@/content/types';
import type { Locale } from '@/i18n/config';

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <FaGithub className='size-4' />,
  LinkedIn: <FaLinkedin className='size-4' />,
};

interface ProfileProps {
  profile: ProfileContent;
  resume: ResumeContent;
  ui: UiContent;
  locale: Locale;
}

export const Profile = ({ profile, resume, ui, locale }: ProfileProps) => {
  return (
    <Card>
      <CardContent className='pt-6'>
        <div className='flex flex-col items-start gap-2'>
          <div className='flex flex-row md:flex-col items-center md:items-start w-full gap-4'>
            <Image
              width={150}
              height={150}
              quality={100}
              src='/avatar.jpg'
              alt={`Portrait of ${profile.name}`}
              className='rounded-full size-12 md:w-full h-auto object-cover border-2'
            />
            <div className='flex flex-col items-start justify-center'>
              <h1 className='font-bold md:mt-4 text-xl md:text-2xl'>{profile.name}</h1>
              <p className='text-sm md:text-base text-muted-foreground'>{profile.title}</p>
            </div>
          </div>
          <p className='mt-2 text-start text-sm text-muted-foreground'>{profile.positioning}</p>
          <p className='text-start text-xs text-muted-foreground'>{profile.supportingLine}</p>
          <p className='text-start text-xs text-muted-foreground'>{profile.location}</p>
          <ResumeMenu resume={resume} />
          <div className='mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full'>
            {profile.socials.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${s.name} — ${profile.name}`}
                className='cursor-pointer flex items-center gap-2 group'
              >
                {socialIcons[s.name]}
                <p className='text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear'>
                  /{s.username}
                </p>
              </Link>
            ))}
          </div>
          <div className='mt-2 border-t border-border pt-4 w-full flex justify-center md:justify-start'>
            <LanguageSwitcher locale={locale} label={ui.languageSwitcherLabel} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
