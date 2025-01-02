'use client';

import dynamic from 'next/dynamic';
console.log(
  'process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID',
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
);

const GoogleAnalytics = dynamic(() =>
  import('@next/third-parties/google').then((mod) => mod.GoogleAnalytics),
);

export const Analytics = () => {
  return (
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
  );
};
