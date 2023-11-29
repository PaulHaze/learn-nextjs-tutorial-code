import { Suspense } from 'react';
import {
  RevenueChart,
  LatestInvoices,
  CardWrapper,
} from '@/components/dashboard';

import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
  lusitana,
} from '@/components/ui';

export default async function DashboardPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 `}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="grid-grid-cols-1 mt-6 gap-6 md:grid-cols-5 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
