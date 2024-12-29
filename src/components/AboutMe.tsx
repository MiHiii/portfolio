import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';

export const AboutMe = () => {
  return (
    <Card className='mb-6'>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>
          I am a student passionate about learning web development and creating
          user-friendly, accessible web applications. I have a solid foundation
          in HTML, CSS, PHP, and JavaScript and am actively exploring libraries
          and frameworks like React. I am also learning backend technologies
          such as Node.js, Express, RestJS and MongoDB. I am eager to gain
          hands-on experience and contribute to exciting projects as I continue
          to develop my skills.
        </p>
      </CardContent>
    </Card>
  );
};
