import api from "src/http";
import { TBlog } from "src/types";

const url = "/posts";

export const blogService = {
  getBlogs: async () => {
    try {
      const res = await api(url);
      return res.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
  },
  getBlogById: async (blogId: string) => {
    try {
      const res = await api(`${url}/${blogId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching blog by id:", error);
      return [];
    }
  },
  postBlog: async (blog: TBlog) => {
    try {
      const res = await api.post(url, blog);
      return res.data;
    } catch (error) {
      console.error("Error creating blog:", error);
      return null;
    }
  },
  deleteBlog: async (blogId: string) => {
    try {
      const res = await api.delete(`${url}/${blogId}`);
      return res.status === 204;
    } catch (error) {
      console.error("Error deleting blog:", error);
      return false;
    }
  },
};
