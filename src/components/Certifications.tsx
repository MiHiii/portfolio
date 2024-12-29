import { Card, CardContent } from '@/components/ui/card';

const certs = [
  {
    certification: 'JLPT N2',
    duration: '2019',
  },
];

export const Certifications = () => {
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Certifications</h2>
      <Card className='mb-6'>
        <CardContent className='pt-6'>
          <ul className='space-y-2'>
            {certs.map((j, i) => (
              <li
                key={i}
                className='border-b last:border-b-0 pb-3 last:pb-0 flex flex-row items-center gap-10'
              >
                {/* Certification Details */}
                <div className='flex items-center space-x-4'>
                  <div>
                    <h3 className='font-semibold'>{j.certification}</h3>
                  </div>
                </div>
                <p className='text-xs text-muted-foreground'>{j.duration}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
