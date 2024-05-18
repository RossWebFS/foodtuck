import axios from "axios";
import { TTeamMember } from "src/types";

const baseUrl = "https://foodtuck-api-3023b9355fd1.herokuapp.com/dishes";

export const dishService = {
  getTeamMembers: async () => {
    try {
      const res = await axios(baseUrl);
      return res.data;
    } catch (error) {
      console.error("Error fetching members:", error);
      return [];
    }
  },
  getTeamMemberById: async (memberId: string) => {
    try {
      const res = await axios(`${baseUrl}/${memberId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching member by id:", error);
      return [];
    }
  },
  postTeamMember: async (member: TTeamMember) => {
    try {
      const res = await axios.post(baseUrl, member);
      return res.data;
    } catch (error) {
      console.error("Error creating member:", error);
      return null;
    }
  },
  deleteTeamMember: async (memberId: string) => {
    try {
      const res = await axios.delete(`${baseUrl}/${memberId}`);
      return res.status === 204;
    } catch (error) {
      console.error("Error deleting member:", error);
      return false;
    }
  },
};
