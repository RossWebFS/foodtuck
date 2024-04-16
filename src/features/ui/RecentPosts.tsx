import { twMerge } from "tailwind-merge";
import { TRecentPost } from "src/types";

interface RecentPropsType {
    recentPosts: TRecentPost[];
    imgRadius?: string;
  }

export const RecentPosts = ({ recentPosts, imgRadius }: RecentPropsType) => {
    const posts:React.ReactNode = recentPosts.map((p) => {
      return (
        <li key={p.id} className="flex my-2">
          <img
            className={twMerge("object-contain", imgRadius)}
            src={p.img}
            alt={p.title}
          />
          <div className="ml-2">
            <p className="mb-0 mt-1">{p.title}</p>
            <span className="text-gray-400 text-sm">{p.date}</span>
          </div>
        </li>
      );
    });
  
    return (
      <nav>
        <h3 className="text-lg font-bold">Recent Post</h3>
        <ul>{posts}</ul>
      </nav>
    );
  };
  