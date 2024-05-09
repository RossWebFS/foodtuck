import { useEffect, useState } from "react";
import { Button } from "src/components/Button";
import { Link } from "src/components/Link";
import { TDishCount, TFilterObject } from "src/types";
import { cn } from "src/utils";

interface PaginationProps {
  products: TDishCount[];
  filter: TFilterObject;
  filterHandler: (value: TFilterObject) => void;
  limit: number
}

export const Pagination = ({
  products,
  filter,
  filterHandler,
  limit
}: PaginationProps) => {
  const [activePage, setActivePage] = useState<number>(0);

  const pageCount = Math.ceil(products.length / limit);

  useEffect(() => {
    filterHandler({ ...filter, pagination: activePage + 1 });
  }, [activePage]);

  const paginationItems = [...Array(pageCount)].map((page, index) => {
    return (
      <li className="border border-gray-300">
        <Button
          className={cn(
            "text-orange-400 bg-white border-0 hover:text-gray-100 hover:bg-orange-400 px-3 py-1",
            {
              "bg-orange-400 text-gray-100": index === activePage,
            }
          )}
          onClick={() => setActivePage(index)}
        >
          {index + 1}
        </Button>
      </li>
    );
  });

  return (
    <nav className="mt-20" aria-label="Page navigation example">
      <ul className="gap-3 flex justify-center relative w-fit mx-auto">
        {activePage > 0 && (
          <li className="border border-gray-300 absolute -left-3 -translate-x-full">
            <Button
              className="text-orange-400 border-0 bg-white hover:text-gray-100 hover:bg-orange-400 px-3 py-1"
              aria-label="Previous"
              onClick={() => setActivePage((activePage) => activePage - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </Button>
          </li>
        )}
        {paginationItems}
        {activePage + 1 < pageCount && (
          <li className="border border-gray-300 absolute -right-3 translate-x-full">
            <Button
              className="text-orange-400 border-0 bg-white hover:text-gray-100 hover:bg-orange-400 px-3 py-1"
              aria-label="Next"
              onClick={() => setActivePage((activePage) => activePage + 1)}
            >
              <span aria-hidden="true">&raquo;</span>
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};
