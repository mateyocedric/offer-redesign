import Hero from '@/components/hero';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-800 via-slate-900 to-slate-900">
      <Hero />
    </main>
  );
}
