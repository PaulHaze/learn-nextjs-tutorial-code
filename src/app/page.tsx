import { InvoicesTableSkeleton } from '@/app/ui';

export default function Home() {
  return (
    <div className="h-screen bg-gray-300 p-5">
      <InvoicesTableSkeleton />
    </div>
  );
}
