import ky from "ky";

export const dishService = {
  getDishes: async () => {
    return await ky(
      "https://foodtuck-api-e276cb8c0038.herokuapp.com/dish"
    ).json();
  },
};
