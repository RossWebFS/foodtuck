import { TRecentPost } from "src/types";
import { cn } from "src/utils";

interface RecentPropsType {
  recentPosts: TRecentPost[];
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
      <li key={post.id} className={cn("flex my-4", itemStyles)}>
        <img
          className={cn("object-cover aspect-square w-20 rounded", imgStyles)}
          src={post.img}
          alt={post.title}
        />
        <div className="ml-2">
          <p className="mb-0 mt-1">{post.title}</p>
          <span className="text-gray-400 text-sm">{post.date}</span>
        </div>
      </li>
    );
  });

  return (
      <ul className={listStyles}>{posts}</ul>
  );
};
