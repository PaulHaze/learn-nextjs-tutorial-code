/* eslint-disable */

'use client';

import Link from 'next/link';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import { cn } from '@/utils';
import { generatePagination } from '@/app/lib/utils';

type PaginationProps = {
  totalPages: number;
};

export function Pagination({ totalPages }: PaginationProps) {
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      {/* <div className="inline-flex">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div> */}
    </>
  );
}

/* type PaginationProps = {
  totalPages: number;
};

export function Pagination({totalPages}: PaginationProps) {
  return (
    <div>
      <p>Pagination Placeholder</p>
    </div>
  );
} */
