import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import type { AboutContent } from '@/content/types';

export const About = ({ about }: { about: AboutContent }) => {
  return (
    <Card className='mb-6'>
      <CardHeader>
        <CardTitle>{about.heading}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>{about.paragraph}</p>
      </CardContent>
    </Card>
  );
};
