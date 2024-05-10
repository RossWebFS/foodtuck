import { PageIntro } from "src/containers/features/PageIntro";
import { MenuCategoryList } from "src/containers/features/MenuCategoryList";
import { StatisticList } from "src/containers/StatisticList";
import { Wrapper } from "src/containers/layouts/Wrapper";

import { routes, partnersLogos, starterMenu, mainMenu } from "src/constants";

import StarterMenuImg from "src/assets/menu/StarterMenuImg.png";
import MainMenuImg from "src/assets/menu/MainMenuImg.png";
import DessertMenuImg from "src/assets/menu/DessertMenuImg.png";
import DrinkMenuImg from "src/assets/menu/DrinkMenuImg.png";
import { useProductStore } from "src/hooks/ProductStore";

export const MenuPage = () => {
  const links = [routes.HOME, routes.MENU];

  const partners = partnersLogos.map((logo) => {
    return (
      <li>
        <img src={logo} alt={logo} />
      </li>
    );
  });

  const products = useProductStore((state) => state.products);

  const filterDishes = (category: string) => {
    return products.filter((dish) => dish.category.includes(category));
  };

  return (
    <main className="pt-20">
      <PageIntro title="Our Menu" links={links} />

      <MenuCategoryList
        dishes={filterDishes("Starter menu")}
        img={StarterMenuImg}
        title="Starter Menu"
      />
      <MenuCategoryList
        dishes={filterDishes("Main course")}
        img={MainMenuImg}
        title="Main course"
        direction="flex-row-reverse"
      />
      <StatisticList />
      <MenuCategoryList
        dishes={filterDishes("Dessert")}
        img={DessertMenuImg}
        title="Desserts"
      />
      <MenuCategoryList
        dishes={filterDishes("Drink")}
        img={DrinkMenuImg}
        title="Drinks"
        direction="flex-row-reverse"
      />

      <Wrapper wrapStyles="py-10">
        <div className="text-center">
          <p className="text-gray-500">Partners & Clients</p>
          <h2 className="text-4xl font-semibold mt-3">
            We work with the Best people
          </h2>
        </div>

        <ul className="flex gap-8 justify-center mt-10 pb-10">{partners}</ul>
      </Wrapper>
    </main>
  );
};
