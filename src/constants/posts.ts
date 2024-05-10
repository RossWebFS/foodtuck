import { TBlog, TRecentPost } from "src/types";
import { formDate } from "src/utils";

import RecentPost1 from "src/assets/posts/RecentPost1.png";
import RecentPost2 from "src/assets/posts/RecentPost2.png";
import RecentPost3 from "src/assets/posts/RecentPost3.png";

import BlogIntro1 from "src/assets/posts/BlogIntro1.png";
import BlogIntro2 from "src/assets/posts/BlogIntro2.png";
import BlogIntro3 from "src/assets/posts/BlogIntro3.png";

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

export const blogCards: TRecentPost[] = [
  {
    img: BlogIntro1,
    date: formDate(),
    title:
      "Morbi Solades Tellus Ilit in Hb Lkn Morbi Solades Tellus Ilit in Hb Lkn;",
    id: 4,
  },
  {
    img: BlogIntro2,
    date: formDate(),
    title:
      "Morbi Solades Morbi Solades Tellus Ilit in Hb Lkn ades Tellus Ilit in Hb Lkn",
    id: 5,
  },
  {
    img: BlogIntro3,
    date: formDate(),
    title:
      "Morbi Solades TeMorbi Solades Tellus Ilit in Hb Lknllus Ilit in Hb Lkn;",
    id: 6,
  },
];

export const blogs: TBlog[] = [
  {
    title: "10 Reasons To Do A Digital Detox Challenge",
    date: formDate(),
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste mollitia
    cum sed ex maiores quidem placeat molestias sapiente enim, quaerat
    tempore quam optio suscipit sint odit quibusdam non officiis excepturi,
    impedit, quisquam quo repellat alias assumenda voluptatibus. Facilis
    consequatur`,
    id: "brhfbgoi",
    img: "https://i.imgur.com/WSkTUzi.jpg",
    comments: [],
    user: "",
    tags: ["facts"],
  },
  {
    title: "10 Reasons To Do A Digital Detox Challenge",
    date: formDate(),
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste mollitia
    cum sed ex maiores quidem placeat molestias sapiente enim, quaerat
    tempore quam optio suscipit sint odit quibusdam non officiis excepturi,
    impedit, quisquam quo repellat alias assumenda voluptatibus. Facilis
    consequatur`,
    id: "brhfbgoi",
    img: "https://i.imgur.com/WSkTUzi.jpg",
    comments: [],
    user: "",
    tags: ["facts"],
  },
  {
    title: "10 Reasons To Do A Digital Detox Challenge",
    date: formDate(),
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste mollitia
    cum sed ex maiores quidem placeat molestias sapiente enim, quaerat
    tempore quam optio suscipit sint odit quibusdam non officiis excepturi,
    impedit, quisquam quo repellat alias assumenda voluptatibus. Facilis
    consequatur`,
    id: "brhfbgoi",
    img: "https://i.imgur.com/WSkTUzi.jpg",
    comments: [],
    user: "",
    tags: ["facts"],
  },
];
