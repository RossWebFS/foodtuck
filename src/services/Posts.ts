import axios from "axios";
import { TPost } from "src/types";

const baseUrl = "https://foodtuck-api-3023b9355fd1.herokuapp.com/posts";

export const dishService = {
  getPosts: async () => {
    try {
      const res = await axios(baseUrl);
      return res.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  },
  getPostId: async (postId: string) => {
    try {
      const res = await axios(`${baseUrl}/${postId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching post by id:", error);
      return [];
    }
  },
  postPost: async (post: TPost) => {
    try {
      const res = await axios.post(baseUrl, post);
      return res.data;
    } catch (error) {
      console.error("Error creating post:", error);
      return null;
    }
  },
  deletePost: async (postId: string) => {
    try {
      const res = await axios.delete(`${baseUrl}/${postId}`);
      return res.status === 204;
    } catch (error) {
      console.error("Error deleting post:", error);
      return false;
    }
  },
};
