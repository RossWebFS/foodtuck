import { Link } from "src/components/Link";
import { TBlog } from "src/types";
import { cn } from "src/utils";

interface RecentPropsType {
  recentPosts: TBlog[];
  imgStyles?: string;
  itemStyles?: string;
  listStyles?: string;
}

export const RecentPosts = ({
  recentPosts,
  imgStyles,
  itemStyles,
  listStyles,
}: RecentPropsType) => {
  const posts = recentPosts.map((post) => {
    return (
      <li key={post._id} className={cn("my-4 hover:bg-gray-200", itemStyles)}>
        <Link to={`/blog-details/${post._id}`} className={cn("flex", itemStyles)}>
          <img
            className={cn("object-cover aspect-square w-20 rounded", imgStyles)}
            src={post.img[0]}
            alt={post.title}
          />
          <div className="ml-2">
            <h4 className="mb-0 mt-1">{post.title}</h4>
            <span className="text-gray-400 text-sm">{post.date}</span>
          </div>
        </Link>
      </li>
    );
  });

  return <ul className={listStyles}>{posts}</ul>;
};
