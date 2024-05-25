import api from "src/http";
import { TTeamMember } from "src/types";

const url = "/team-members";

export const dishService = {
  getTeamMembers: async () => {
    try {
      const res = await api(url);
      return res.data;
    } catch (error) {
      console.error("Error fetching members:", error);
      return [];
    }
  },
  getTeamMemberById: async (memberId: string) => {
    try {
      const res = await api(`${url}/${memberId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching member by id:", error);
      return [];
    }
  },
  postTeamMember: async (member: TTeamMember) => {
    try {
      const res = await api.post(url, member);
      return res.data;
    } catch (error) {
      console.error("Error creating member:", error);
      return null;
    }
  },
  deleteTeamMember: async (memberId: string) => {
    try {
      const res = await api.delete(`${url}/${memberId}`);
      return res.status === 204;
    } catch (error) {
      console.error("Error deleting member:", error);
      return false;
    }
  },
};
