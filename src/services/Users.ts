import api from "src/http";
import { TUser } from "src/types";

const url = '/users'

export const usersService = {
  getUsers: async () => {
    try {
      const res = await api(url);
      return res.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  },
  getUserById: async (userId: string) => {
    try {
      const res = await api(`${url}/${userId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching user by id:", error);
      return [];
    }
  },
  checkUser: async (token: string, userId: string) => {
    try {
      const res = await api(`${url}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data)
      return res.data
    } catch(error) {
      console.log("Error check user", error)
      return null
    }
  } ,
  updateUser: async (userId: string, updatedUser: TUser) => {
    try {
      const res = await api.patch(`${url}/${userId}`, updatedUser);
      return res.data;
    } catch (error) {
      console.error("Error updating dish:", error);
      return null;
    }
  },
};
