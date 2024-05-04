import { Link } from "react-router-dom";

interface NavLogoProps {
  path?: string;
  logoText: string;
  highlightedText?: string;
}

export const NavLogo = ({
  path = "/",
  logoText,
  highlightedText,
}: NavLogoProps) => {
  return (
    <figure className="cursor-pointer">
      <Link to={path}>
        <h1 className="font-semibold py-2 text-2xl">
          {logoText}
          <span className="text-orange-400">{highlightedText}</span>
        </h1>
      </Link>
    </figure>
  );
};
