import { Card, CardContent } from '@/components/ui/card';

const awards = [
  <>
    <strong>Top 150 Outstanding Students</strong> for the Spring 2025 semester
  </>,
  'Excellent students for the Fall 2023 and Spring 2024 semesters',
  'Good students for the Summer 2024 and Fall 2024 semesters',
];

export const Awards = () => {
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Honors & Awards</h2>
      <Card className='mb-6'>
        <CardContent className='pt-6'>
          <ul className='space-y-2'>
            {awards.map((i, index) => (
              <li key={index} className='border-b last:border-b-0 pb-3 last:pb-0 flex flex-row items-center gap-10'>
                {/*Honors & Awards Details */}
                <div className='flex items-center space-x-4'>
                  <div>
                    <p className='text-muted-foreground text-sm'>{i}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
