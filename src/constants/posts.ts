import { TRecentPost } from "src/types";
import { formDate } from "src/utils";

import RecentPost1 from "src/assets/posts/RecentPost1.png";
import RecentPost2 from "src/assets/posts/RecentPost2.png";
import RecentPost3 from "src/assets/posts/RecentPost3.png";

export const recentPosts: TRecentPost[] = [
    {
      img: RecentPost1,
      date: formDate(),
      title: "Recent post 1",
      id: 1,
    },
    {
      img: RecentPost2,
      date: formDate(),
      title: "Recent post 2",
      id: 2,
    },
    {
      img: RecentPost3,
      date: formDate(),
      title: "Recent post 3",
      id: 3,
    },
  ];