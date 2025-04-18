'use client';

import dynamic from 'next/dynamic';

const QuickTixPrototype = dynamic(
  () => import('./QuickTix').then(mod => mod.QuickTixPrototype),
  { ssr: false }
);

export default function ClientWrapper() {
  return <QuickTixPrototype />;
} 