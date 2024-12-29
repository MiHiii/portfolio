import { CalendarDays } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const educations = [
  {
    school: 'FPT Polytechnic College',
    major: 'Web Development',
    duration: 'Jul 2023 - Present',
    gpa: '3.5/4.0',
  },
  {
    school: 'CODO Foreign Language and Tourism School - CODO 外語観光専門学校',
    major: 'Japanese Language',
    duration: '2020',
  },
  {
    school: 'CODO International College - 弘堂国際学園',
    major: 'Japanese Language',
    duration: '2018',
  },
];

export const Education = () => {
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Education</h2>
      <Card className='mb-6'>
        <CardContent className='pt-6'>
          <ul className='space-y-2'>
            {educations.map((j, i) => (
              <li key={i} className='border-b last:border-b-0 pb-3 last:pb-0'>
                {/* Job Details */}
                <div className='flex items-center space-x-4'>
                  <div>
                    <h3 className='font-semibold'>{j.school}</h3>
                    <div className='flex flex-row items-center gap-10'>
                      <p className='text-sm text-muted-foreground italic'>
                        {j.major}
                      </p>
                      {j.gpa && (
                        <p className='text-sm text-muted-foreground'>
                          GPA: {j.gpa}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <p className='text-xs text-muted-foreground mt-1 flex items-center'>
                  <CalendarDays className='size-3 mr-2' />
                  {j.duration}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
