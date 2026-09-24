'use client';

import Link from 'next/link';
import { Download, Eye } from 'lucide-react';

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { ResumeContent } from '@/content/types';

interface ResumeMenuProps {
  resume: ResumeContent;
}

export const ResumeMenu = ({ resume }: ResumeMenuProps) => {
  if (resume.documents.length === 1) {
    const doc = resume.documents[0];
    return (
      <Button className='mt-4 w-full' asChild>
        <Link href={doc.href} target='_blank' rel='noopener noreferrer' className='font-semibold'>
          {resume.ctaLabel.toUpperCase()}
        </Link>
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mt-4 w-full font-semibold'>{resume.ctaLabel}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{resume.dialogTitle}</DialogTitle>
        </DialogHeader>
        {resume.note && <p className='text-sm text-muted-foreground'>{resume.note}</p>}
        <ul className='space-y-3'>
          {resume.documents.map((doc) => (
            <li
              key={doc.key}
              className='flex items-center justify-between gap-4 rounded-md border p-3'
            >
              <span className='text-sm font-medium'>{doc.label}</span>
              <div className='flex items-center gap-2'>
                <Button variant='outline' size='sm' asChild>
                  <Link href={doc.href} target='_blank' rel='noopener noreferrer' aria-label={`${resume.viewLabel} ${doc.label}`}>
                    <Eye className='mr-1.5 size-3.5' />
                    {resume.viewLabel}
                  </Link>
                </Button>
                <Button variant='outline' size='sm' asChild>
                  <Link href={doc.href} download={doc.downloadName} aria-label={`${resume.downloadLabel} ${doc.label}`}>
                    <Download className='mr-1.5 size-3.5' />
                    {resume.downloadLabel}
                  </Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};
