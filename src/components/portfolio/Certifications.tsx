import { Card, CardContent } from '@/components/ui/card';
import type { CertificationsContent } from '@/content/types';

export const Certifications = ({ certifications }: { certifications: CertificationsContent }) => {
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>{certifications.heading}</h2>
      <Card className='mb-6'>
        <CardContent className='pt-6'>
          <ul className='space-y-2'>
            {certifications.items.map((c, i) => (
              <li
                key={i}
                className='border-b last:border-b-0 pb-3 last:pb-0 flex flex-row items-center gap-10'
              >
                <div className='flex items-center space-x-4'>
                  <div>
                    <h3 className='font-semibold'>{c.name}</h3>
                  </div>
                </div>
                <p className='text-xs text-muted-foreground'>{c.date}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
