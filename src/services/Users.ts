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
  getUserById: async (userId: string) => {
    try {
      const res = await api(`/users/${userId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching user by id:", error);
      return [];
    }
  },
};
