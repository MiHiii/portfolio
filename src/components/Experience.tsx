import Image from 'next/image';

import { CalendarDays } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { JobImages } from '@/components/JobImages';

const jobs = [
  {
    role: 'Bridge Software Engineer (BrSE)',
    company: 'Viet Nhat General Joint Stock Company (VINICORP)',
    logo: '/vinicorp-logo.png',
    duration: 'May 2025 - Present',
    description: (
      <>
        Bridged communication between Japanese clients and Vietnamese developers in the <strong>banking domain</strong>,
        translated system specifications, reviewed technical designs, managed schedules, and reported project progress
        to clients.
      </>
    ),
    link: 'https://www.vinicorp.com.vn/home',
    images: ['/vinicorp.jpg'],
  },
  {
    role: 'Creator', // TODO: Replace with actual role
    company: 'RIKI EDU TRADE JSC', // TODO: Replace with actual company name
    logo: '/riki-logo.png', // TODO: Replace with actual logo
    duration: 'Aug 2023 - May 2025',
    description:
      'Edited video for JLPT N1, N2, and N3 courses, designed UX/UI interfaces using Figma, and created landing pages for major campaigns.',
    link: 'https://riki.edu.vn',
    images: ['/riki.png'],
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Work Experience</h2>
      <Card className='mb-6'>
        <CardContent className='pt-6'>
          <ul className='space-y-8'>
            {jobs.map((j, i) => (
              <li key={i} className='border-b last:border-b-0 pb-8 last:pb-0'>
                {/* Job Details */}
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
                <p className='text-sm mt-2'>{j.description}</p>
                {/* Job Images */}
                <JobImages role={j.role} link={j.link} images={j.images} duration={j.duration} />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
