import { Link, useLocation } from "react-router-dom";

import { TRoute } from "src/types";
import { linkVariants } from "src/styles/LinkStyles";
import { cn } from "src/utils";

interface BreadCrumbsProps {
  listItems: TRoute[];
}

export const BreadCrumbs = ({ listItems }: BreadCrumbsProps) => {
  const { pathname } = useLocation();

  const links = listItems.map((item, index) => {
    const isActiveLink = pathname === item.path;

    return (
      <li className="mx-1 text-lg">
        <Link
          className={cn(linkVariants(), {
            "text-orange-400": isActiveLink,
          })}
          to={item.path}
        >
          {item.routeName}
        </Link>
        {listItems.length > 1 && index !== listItems.length - 1 && (
          <span className="ml-2">{">"}</span>
        )}
      </li>
    );
  });

  return <ul className="flex">{links}</ul>;
};
