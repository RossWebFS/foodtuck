import api from "src/http";
import { TPost } from "src/types";

const url = "/posts";

export const dishService = {
  getPosts: async () => {
    try {
      const res = await api(url);
      return res.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  },
  getPostId: async (postId: string) => {
    try {
      const res = await api(`${url}/${postId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching post by id:", error);
      return [];
    }
  },
  postPost: async (post: TPost) => {
    try {
      const res = await api.post(url, post);
      return res.data;
    } catch (error) {
      console.error("Error creating post:", error);
      return null;
    }
  },
  deletePost: async (postId: string) => {
    try {
      const res = await api.delete(`${url}/${postId}`);
      return res.status === 204;
    } catch (error) {
      console.error("Error deleting post:", error);
      return false;
    }
  },
};
