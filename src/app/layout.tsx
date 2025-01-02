import './globals.css';

import { cn } from '@/lib/utils';
import { geistSans, geistMono } from './fonts/fonts';
import { constructMetadata } from '@/lib/metadata';
import { Analytics } from '@/lib/analytics';

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn('antialiased', geistSans.variable, geistMono.variable)}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
