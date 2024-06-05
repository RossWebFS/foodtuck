import api from "src/http";
import { TComment } from "src/types";

const url = "/comments";

export const commentService = {
  getComments: async () => {
    try {
      const res = await api(url);
      return res.data;
    } catch (error) {
      console.error("Error fetching comments:", error);
      return [];
    }
  },
  getCommentById: async (commentId: string) => {
    try {
      const res = await api(`${url}/${commentId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching comment by id:", error);
      return [];
    }
  },
  postComment: async (comment: TComment) => {
    try {
      const res = await api.post(url, comment);
      return res.data;
    } catch (error) {
      console.error("Error creating comment:", error);
      return null;
    }
  },
  deleteComment: async (commentId: string) => {
    try {
      const res = await api.delete(`${url}/${commentId}`);
      return res.status === 204;
    } catch (error) {
      console.error("Error deleting comment:", error);
      return false;
    }
  },
};
