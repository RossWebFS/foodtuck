import { Link } from "src/components/Link";
import { TRoutes } from "src/types";

interface FooterLinksProps {
  links: TRoutes[];
  listTitle?: string;
}

export const FooterLinkList = ({ listTitle, links }: FooterLinksProps) => {
    const additionLinks: React.ReactNode[] = links.map((l) => {
      return (
        <li key={l.path} className="my-5">
          <Link variant="colored" path={l.path}>
            {l.routeName}
          </Link>
        </li>
      );
    });
  
    return (
      <nav>
        <h3 className="text-lg font-bold">{listTitle}</h3>
        <ul>{additionLinks}</ul>
      </nav>
    );
  };