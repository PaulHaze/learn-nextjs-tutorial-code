import { Suspense } from 'react';
import { Card, RevenueChart, LatestInvoices } from '@/components/dashboard';

import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  lusitana,
} from '@/components/ui';

import { fetchCardData } from '@/lib/data';

// export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  // const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 `}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
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
