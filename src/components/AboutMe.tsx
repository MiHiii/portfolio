import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';

export const AboutMe = () => {
  return (
    <Card className='mb-6'>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>
          I am a web development student passionate about building user-friendly
          and accessible applications. I have a strong foundation in HTML, CSS,
          PHP, and JavaScript and am actively working with React for frontend
          development. Additionally, I am expanding my backend skills with
          Node.js, Express, NestJS, and MongoDB. I am eager to apply my
          knowledge to real-world projects, continuously improve my skills, and
          collaborate on innovative solutions.
        </p>
      </CardContent>
    </Card>
  );
};
