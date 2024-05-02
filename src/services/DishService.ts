import ky from "ky";

export const dishService = {
  getDishes: async () => {
    return await ky(
      "https://foodtuck-api-e276cb8c0038.herokuapp.com/menu"
    ).json();
  },
};

// export const test = await fetch(
//   "https://foodtuck-api-e276cb8c0038.herokuapp.com/menu",
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIxOTNiNWY0LTMzODMtNGU0My04MjYxLTIxOGQwZDMwOGM2NiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzE0NDU4MjA2LCJleHAiOjE3MTQ0Nzk4MDZ9.MyYQ0i8XCWmD7vorD3LUppic0j6J-UP-_p8sob-JpxY",
//       "User-Agent": "PostmanRuntime/7.37.3",
//       Accept: "*/*",
//       "Cache-Control": "no-cache",
//       "Postman-Token": "68f5eca3-ed3d-4cf9-899d-1a691a2980c8",
//       Host: "foodtuck-api-e276cb8c0038.herokuapp.com",
//       "Accept-Encoding": "gzip, deflate, br",
//       Connection: "keep-alive",
//       "Content-Length": "138",
//     },
//     body: JSON.stringify({
//       title: "Burger",
//       description: "Burger buns, good-quality beef mince, small onion, diced",
//       category: "burger",
//       price: "8.99",
//       img: "https://recipes.net/wp-content/uploads/2023/05/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e.jpeg",
//     }),
//   }
// );
