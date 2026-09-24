import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ProjectsContent } from '@/content/types';

export const Projects = ({ projects }: { projects: ProjectsContent }) => {
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>{projects.heading}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
        {projects.items.map((p, i) => (
          <Card key={i}>
            <CardContent className='pt-6 h-full'>
              <div className='flex flex-col h-full'>
                <span className='font-semibold text-primary'>{p.title}</span>
                <span className='text-xs text-muted-foreground mb-2'>{p.meta}</span>
                <p className='text-sm text-muted-foreground mb-4'>{p.description}</p>
                <div className='flex flex-wrap gap-1.5 mb-3'>
                  {p.tech.map((t) => (
                    <Badge key={t} variant='secondary' className='text-xs'>
                      {t}
                    </Badge>
                  ))}
                </div>
                {p.links && p.links.length > 0 && (
                  <div className='mt-auto flex items-center gap-4'>
                    {p.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-sm text-primary hover:underline'
                      >
                        {l.label}
                        <ExternalLink className='inline-block size-3' />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
