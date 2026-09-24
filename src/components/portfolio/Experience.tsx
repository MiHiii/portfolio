import Image from 'next/image';

import { CalendarDays } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { JobImages } from '@/components/portfolio/JobImages';
import type { ExperienceContent } from '@/content/types';

export const Experience = ({ experience }: { experience: ExperienceContent }) => {
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>{experience.heading}</h2>
      <Card className='mb-6'>
        <CardContent className='pt-6'>
          <ul className='space-y-8'>
            {experience.items.map((j, i) => (
              <li key={i} className='border-b last:border-b-0 pb-8 last:pb-0'>
                <div className='flex items-center space-x-4'>
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className='rounded-md border shadow-md object-cover'
                  />
                  <div>
                    <h3 className='font-semibold'>{j.role}</h3>
                    <p className='text-sm text-muted-foreground'>{j.company}</p>
                  </div>
                </div>
                <p className='text-xs text-muted-foreground mt-2 flex items-center'>
                  <CalendarDays className='size-3 mr-2' />
                  {j.duration}
                </p>
                <p className='text-sm mt-2'>{j.summary}</p>
                {j.highlights.length > 0 && (
                  <ul className='mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground'>
                    {j.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}
                {j.images && j.images.length > 0 && (
                  <JobImages
                    role={j.role}
                    link={j.companyHref}
                    images={j.images}
                    duration={j.duration}
                    visitLabel={experience.visitCompanyLabel}
                  />
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
