import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { SkillsContent } from '@/content/types';

export const Skills = ({ skills }: { skills: SkillsContent }) => {
  return (
    <Card className='mt-6'>
      <CardHeader>
        <CardTitle>{skills.heading}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {skills.groups.map((group) => (
          <div key={group.label}>
            <p className='text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide'>
              {group.label}
            </p>
            <div className='flex flex-wrap gap-2'>
              {group.items.map((s) => (
                <Badge key={s} variant='secondary'>
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
