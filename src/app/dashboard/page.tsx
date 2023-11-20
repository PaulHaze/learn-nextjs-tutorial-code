import { Card, RevenueChart, LatestInvoices } from '@/components/dashboard';

import { lusitana } from '@/components/ui';

export default function DashboardPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 `}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
        Cards Placeholder
      </div>
      <div className="grid-grid-cols-1 mt-6 gap-6 md:grid-cols-5 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
        Revenue Placeholder
      </div>
    </main>
  );
}
