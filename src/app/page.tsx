import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Leadership from '@/components/Leadership';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import ErrorBoundary from '@/components/ErrorBoundary';
import LoadingSpinner from '@/components/LoadingSpinner';

function PageContent() {
  return (
    <main className="min-h-screen pt-20">
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-screen" />}>
          <Hero />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[400px]" />}>
          <Services />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[400px]" />}>
          <Leadership />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[400px]" />}>
          <Events />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[400px]" />}>
          <Testimonials />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner size="lg" className="min-h-[300px]" />}>
          <CTA />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}

export default function Home() {
  return <PageContent />;
}
