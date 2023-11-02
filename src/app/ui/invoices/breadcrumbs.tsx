import Link from 'next/link';

import { lusitana } from '@/app/ui/fonts';
import { cn } from '@/utils';

type Breadcrumb = {
  label: string;
  href: string;
  acitve?: boolean;
};

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={cn(lusitana.className, 'flex text-xl md:text-2xl')}>
        {breadcrumbs.map((crumb, index) => (
          <li
            key={crumb.href}
            aria-current={crumb.active}
            className={cn(crumb.active ? 'text-gray-900' : 'text-gray-500')}
          >
            <Link href={crumb.href}>{crumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
