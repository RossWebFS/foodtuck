import { TRecentPost } from "src/types";
import { cn } from "src/utils";

interface RecentPropsType {
  recentPosts: TRecentPost[];
  listTitle?: string;
  imgRadius?: string;
}

export const RecentPosts = ({ recentPosts, imgRadius, listTitle }: RecentPropsType) => {
  const posts = recentPosts.map((post) => {
    return (
      <li key={post.id} className="flex my-2">
        <img
          className={cn("object-contain", imgRadius)}
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
    <nav>
      {listTitle && <h3 className="text-lg font-bold">{listTitle}</h3>}
      <ul>{posts}</ul>
    </nav>
  );
};
