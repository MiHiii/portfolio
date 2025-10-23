import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';

export const AboutMe = () => {
  return (
    <Card className='mb-6'>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>
          I’m a Bridge System Engineer (BrSE) with a background in web development and five years of study experience in
          Japan, bridging communication between Japanese clients and development teams to deliver reliable, high-quality
          systems.
        </p>
      </CardContent>
    </Card>
  );
};
