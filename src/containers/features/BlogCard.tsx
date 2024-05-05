import { Link } from "src/components/Link";

import { TRecentPost } from "src/types";
import { icons } from "src/constants";
import { Icon } from "src/components/Icon";

export const BlogCard = ({ img, title, date }: TRecentPost) => {
  const shareLink = async (link: string) => {
    await navigator.share({
      title: "Share this site link",
      url: link,
    });
  };

  return (
    <li className="border border-white w-1/4">
      <img src={img} alt={img} />
      <section className="p-6">
        <div>
          <span className="text-sm text-orange-400">{date}</span>
          <h5 className="font-semibold text-lg mt-4">{title}</h5>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link variant="colored" to="/">
            Learn More
          </Link>
          <ul className="flex gap-2">
            <li>
              <Icon IconComponent={icons.comment.icon} />
            </li>
            <li>
              <Icon
                IconComponent={icons.share.icon}
                onClick={() => shareLink("https://foodtuck-two.vercel.app")}
              />
            </li>
          </ul>
        </div>
      </section>
    </li>
  );
};
