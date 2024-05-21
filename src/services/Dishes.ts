import axios from "axios";
import { TDish } from "src/types";

const baseUrl = "https://foodtuck-api-3023b9355fd1.herokuapp.com/dishes";

export const dishService = {
  getDishes: async () => {
    try {
      const res = await axios(baseUrl);
      return res.data;
    } catch (error) {
      console.error("Error fetching dishes:", error);
      return [];
    }
  },
  getDishById: async (dishId: string | undefined) => {
    try {
      const res = await axios(`${baseUrl}/${dishId}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching dish by id:", error);
      return [];
    }
  },
  postDish: async (dish: TDish) => {
    try {
      const res = await axios.post(baseUrl, dish);
      return res.data;
    } catch (error) {
      console.error("Error creating dish:", error);
      return null;
    }
  },
  updateDish: async (dishId: string, updatedDish: TDish) => {
    try {
      const res = await axios.put(`${baseUrl}/${dishId}`, updatedDish);
      return res.data;
    } catch (error) {
      console.error("Error updating dish:", error);
      return null;
    }
  },
  deleteDish: async (dishId: string) => {
    try {
      const res = await axios.delete(`${baseUrl}/${dishId}`);
      return res.status === 204;
    } catch (error) {
      console.error("Error deleting dish:", error);
      return false;
    }
  },
};
