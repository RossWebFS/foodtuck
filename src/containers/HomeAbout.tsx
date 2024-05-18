import { Link } from "src/components/Link";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { Description } from "src/containers/features/Description";

import { icons } from "src/constants";

import HomeAbout1 from "src/assets/products/HomeAbout1.png";
import HomeAbout2 from "src/assets/products/HomeAbout2.png";
import HomeAbout3 from "src/assets/products/HomeAbout3.png";
import { useEffect } from "react";
import { TDish } from "src/types";
import { dishService } from "src/services/Dishes";

export const HomeAboutSection = () => {
  useEffect(() => {
    // postDishes()
    // getDishes()
  }, []);

  const getDishes = async () => {
    const dishes = await dishService.getDishes();
    console.log(dishes);
  };

  const getDishById = async () => {
    const dish = await dishService.getDishById("6644a72a4f4b95cdc794c566");
    console.log(dish);
  };

  const deleteDish = async () => {
    const res = await dishService.deleteDish("6644a72a4f4b95cdc794c566");
  };

  const postDishes = async () => {
    fetch("https://foodtuck-api-3023b9355fd1.herokuapp.com/dishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        img: "https://nowcookthis.com/wp-content/uploads/2019/05/easy-homemade-lime-lemonade-thumbnail.jpg",
        title: "Lime Lemonade",
        calories: 150,
        category: ["Drink", "Vegetarian"],
        tags: ["Lemonade"],
        rating: 4,
        price: 5.99,
        receipe: ["Lemon juice", "Lime juice", "Sugar", "Water"],
        description: `Over at my gram’s house, summer meant limeade – 
        which sounded totally weird to me at the time – but once I tried it, 
        I was in love! I think it came from the freezer section (it even had pulp in it). 
        It tasted so fresh and delicious. Let’s not forget the true meaning of the holiday. 
        Please take a moment to remember and honor all the courageous souls who died while 
        serving this country and made the ultimate sacrifice to protect our freedoms – and 
        also to thank and honor all the brave men and women who are serving today.`,
      }),
    });
  };

  const listItemContent = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  ];

  const listItems = listItemContent.map((text) => {
    return (
      <li key={text} className="flex my-2">
        <icons.check.icon size={25} />
        <p className="pl-3">{text}</p>
      </li>
    );
  });

  return (
    <Wrapper wrapStyles="flex justify-evenly items-center py-16 pb-8">
      <Description
        styles="w-2/5"
        highlightedText="About Us"
        coloredText="We"
        title=" Create the best foody product"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            expedita tempora, ab eum sequi magnam nisi esse quis ullam ipsum
            voluptatem excepturi, nemo placeat autem iste necessitatibus minus
            unde voluptatibus!"
        contentWidth="w-11/12"
      >
        <ul className="mb-8">{listItems}</ul>

        <Link to="/about" variant="outlined" size="lg" rounded="full">
          Read more
        </Link>
      </Description>

      <section className="w-5/12 grid gap-3 grid-cols-2 box-border">
        <img
          className="object-contain w-full col-span-2"
          src={HomeAbout1}
          alt="dish"
        />
        <img className="object-contain" src={HomeAbout2} alt="dish" />
        <img className="object-contain" src={HomeAbout3} alt="dish" />
      </section>
    </Wrapper>
  );
};
