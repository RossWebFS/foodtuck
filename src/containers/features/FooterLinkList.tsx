import { Link } from "react-router-dom";

import { TRoutes } from "src/types";
import { cn } from "src/utils";

interface FooterLinksProps {
  links: TRoutes[];
  listTitle?: string;
  listStyles?: string;
  linkStyles?: string
  listItemStyles?: string;
}

export const FooterLinkList = ({
  listTitle,
  links,
  linkStyles,
  listStyles,
  listItemStyles,
}: FooterLinksProps) => {
  const additionLinks = links.map((link) => {
    return (
      <li key={link.path} className={listItemStyles}>
        <Link className={cn("transition-all duration-200", linkStyles)} to={link.path}>
          {link.routeName}
        </Link>
      </li>
    );
  });

  return (
    <nav>
      {listTitle && <h3 className="text-lg font-bold">{listTitle}</h3>}
      <ul className={listStyles}>{additionLinks}</ul>
    </nav>
  );
};
