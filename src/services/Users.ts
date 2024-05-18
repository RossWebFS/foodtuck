import api from "src/http";

export const usersService = {
  getUsers: async () => {
    try {
      const res = await api("/users");
      return res.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  },
  getUserById: async () => {
    try {
      const res = await api("/users");
      return res.data;
    } catch (error) {
      console.error("Error fetching user by id:", error);
      return [];
    }
  },
};
