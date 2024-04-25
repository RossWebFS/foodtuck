import { Link } from "react-router-dom";

import { IconList } from "./IconList";

import { TRecentPost } from "src/types";
import { blogIconLinks } from "src/constants";
import { linkVariants } from "src/styles/LinkStyles";

export const BlogCard = ({ img, title, date }: TRecentPost) => {
  return (
    <li className="border border-white w-1/4">
      <img src={img} alt={img} />
      <section className="p-6">
        <div>
          <span className="text-sm text-orange-400">{date}</span>
          <h5 className="font-semibold text-lg mt-4">{title}</h5>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link className={linkVariants({ variant: "colored" })} to="/">
            Learn More
          </Link>
          <IconList
            iconStyles="w-5 h-5"
            listItemStyles="m-1"
            icons={blogIconLinks}
          />
        </div>
      </section>
    </li>
  );
};
