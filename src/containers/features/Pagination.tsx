import { useState } from "react";
import { Button } from "src/components/Button";
import { Link } from "src/components/Link";
import { TDishCount, TFilterObject } from "src/types";
import { cn } from "src/utils";

interface PaginationProps {
  products: TDishCount[];
  filter?: TFilterObject;
  filterHandler?: (value: TFilterObject) => void;
}

export const Pagination = ({ products }: PaginationProps) => {
  const [activePage, setActivePage] = useState<number>(0);

  const pageCount = Math.ceil(products.length / 6);

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
      <ul className="gap-3 flex justify-center">
        <li className="border border-gray-300">
          <Button
            className={cn(
              "text-orange-400 border-0 bg-white hover:text-gray-100 hover:bg-orange-400 px-3 py-1",
              {
                " cursor-default": activePage <= 0,
              }
            )}
            aria-label="Previous"
            onClick={() =>
              setActivePage((activePage) =>
                activePage >= 0 ? activePage - 1 : activePage
              )
            }
          >
            <span aria-hidden="true">&laquo;</span>
          </Button>
        </li>
        {paginationItems}
        <li className="border border-gray-300">
          <Button
            className={cn(
              "text-orange-400 border-0 bg-white hover:text-gray-100 hover:bg-orange-400 px-3 py-1",
              {
                " cursor-default":
                  activePage <= pageCount,
              }
            )}
            aria-label="Next"
            onClick={() =>
              setActivePage((activePage) =>
                (activePage <= pageCount) ? activePage + 1 : activePage
              )
            }
          >
            <span aria-hidden="true">&raquo;</span>
          </Button>
        </li>
      </ul>
    </nav>
  );
};
