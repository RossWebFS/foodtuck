import api from "src/http";
import { TDish } from "src/types";

const url = "/dishes"

export const dishService = {
  getDishes: async () => {
    try {
      const res = await api(url);
      return res.data;
    } catch (error) {
      console.error("Error fetching dishes:", error);
      return [];
    }
  },
  getDishById: async (dishId: string | undefined) => {
    try {
      const res = await api(`${url}/${dishId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching dish by id:", error);
      return [];
    }
  },
  postDish: async (dish: TDish) => {
    try {
      const res = await api.post(url, dish);
      return res.data;
    } catch (error) {
      console.error("Error creating dish:", error);
      return null;
    }
  },
  updateDish: async (dishId: string, updatedDish: TDish) => {
    try {
      const res = await api.put(`${url}/${dishId}`, updatedDish);
      return res.data;
    } catch (error) {
      console.error("Error updating dish:", error);
      return null;
    }
  },
  deleteDish: async (dishId: string) => {
    try {
      const res = await api.delete(`${url}/${dishId}`);
      return res.status === 204;
    } catch (error) {
      console.error("Error deleting dish:", error);
      return false;
    }
  },
};
