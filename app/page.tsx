import dynamic from 'next/dynamic';

const QuickTixPrototype = dynamic(() => import('./components/QuickTix').then(mod => mod.QuickTixPrototype), {
  ssr: false
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <QuickTixPrototype />
    </main>
  );
}
