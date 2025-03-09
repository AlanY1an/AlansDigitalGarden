"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "./ui/pagination";
import { cn } from "@/lib/utils";

interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}

export function QueryPagination({
  totalPages,
  className,
}: QueryPaginationProps) {
  // 1. Get the current page number and parameters from the URL
  const pathname = usePathname();  // get the current pathname "/thoughts"
  const searchParams = useSearchParams(); // get the current search params

  // 2. Calculate the previous and next page numbers
  const currentPage = Number(searchParams.get("page") || 1);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  // 3. Create a function to generate the URL for a given page number
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);// copy the current search params
    params.set("page", pageNumber.toString()); // update the page number “/thoughts?page=1"
    return `${pathname}?${params.toString()}`; // return the new URL
  };

  // 4. Render the pagination component
  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        {prevPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious href={createPageURL(prevPage)} />
          </PaginationItem>
        ) : null}
        {Array(totalPages)
          .fill("")
          .map((_, index) => (
            <PaginationItem
              className="hidden sm:inline-block"
              key={`page-button-${index}`}
            >
              <PaginationLink
                isActive={currentPage === index + 1}
                href={createPageURL(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={createPageURL(nextPage)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}
