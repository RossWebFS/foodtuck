import { Button } from "src/components/Button";
import { dishes, navRoutes, singlePageLinks } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Icon } from "src/components/Icon";
import { Link } from "react-router-dom";
import { cn, formPrice } from "src/utils";
import { useEffect, useState } from "react";

import SinglePageDish1 from "src/assets/menu/SinglePageDish1.png";
import SinglePageDish2 from "src/assets/menu/SinglePageDish2.png";
import SinglePageDish3 from "src/assets/menu/SinglePageDish3.png";
import SinglePageDish4 from "src/assets/menu/SinglePageDish4.png";
import SinglePageDish5 from "src/assets/menu/SinglePageDish5.png";
import { Wrapper } from "src/containers/layouts/Wrapper";

import { PiTote } from "react-icons/pi";
import { IconList } from "src/containers/features/IconList";
import { dishService } from "src/services/DishService";
import { ProductList } from "src/containers/features/ProductList";

export const ProductSinglePage = () => {
  const links = [navRoutes.HOME, navRoutes.SHOP_DETAILS];

  const [counterValue, setCounterValue] = useState(0);

  return (
    <main className="py-20">
      <PageIntro links={links} title="Shop Details" />
      <Wrapper>
        <section className="flex justify-around mb-10">
          <section className="w-[45%] grid grid-cols-[auto_minmax(auto,_auto)] grid-rows-4 gap-5">
            <img src={SinglePageDish2} alt="dish-2" />
            <img
              className="row-span-4 h-full object-cover"
              src={SinglePageDish1}
              alt="dish-1"
            />
            <img src={SinglePageDish3} alt="dish-3" />
            <img src={SinglePageDish4} alt="dish-4" />
            <img src={SinglePageDish5} alt="dish-5" />
          </section>

          <section className="w-[45%]">
            <div className="flex justify-between">
              <Button size="sm" rounded="default">
                In Stock
              </Button>

              <div className="text-gray-500 gap-4 flex">
                <Link to="/" className="hover:text-orange-400">
                  <Icon
                    IconComponent={IoIosArrowRoundBack}
                    className="mr-1 text-gray-500 w-6 h-6"
                  />
                  Prev
                </Link>
                <Link to="/" className="hover:text-orange-400">
                  Next
                  <Icon
                    IconComponent={IoIosArrowRoundForward}
                    className="ml-1 text-gray-500 w-6 h-6"
                  />
                </Link>
              </div>
            </div>

            <div className="border-b border-b-gray-200 pb-4 mt-2 mb-6">
              <h1 className="text-4xl font-semibold mb-4">
                Yummi Chicken Chup
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                optio! Sed ut vero et, inventore quae sunt at corrupti sint odit
                enim officia reiciendis cupiditate optio quos ratione! Quod,
                voluptatibus.
              </p>
            </div>

            <div>
              <span className="text-2xl font-semibold">${formPrice(54)}</span>
              <ul className="flex py-3">
                <li>Dictum/</li>
                <li>Cursus/</li>
                <li>Risus</li>
              </ul>

              <div className="flex items-center gap-5 border-b border-b-gray-200 pb-4">
                <div className="text-xl">
                  <span
                    className={cn(
                      "px-4 py-2 border border-gray-400 cursor-pointer hover:bg-gray-100",
                      {
                        "text-gray-400 cursor-default hover:bg-transparent":
                          counterValue === 0,
                      }
                    )}
                    onClick={() =>
                      counterValue > 0 && setCounterValue(counterValue - 1)
                    }
                  >
                    -
                  </span>
                  <span className="px-4 py-2 border border-gray-400">
                    {counterValue}
                  </span>
                  <span
                    className="px-4 py-2 border border-gray-400 cursor-pointer hover:bg-gray-100"
                    onClick={() => setCounterValue(counterValue + 1)}
                  >
                    +
                  </span>
                </div>

                <Button className="px-5 py-2 h-auto">
                  <Icon
                    className="mr-2 hover:text-gray-100"
                    IconComponent={PiTote}
                  />
                  Add to cart
                </Button>
              </div>

              <div className="mt-3">
                <p>Category: Pizza</p>
                <p>Tag: Our Shop</p>

                <div className="flex mt-3 pb-4 border-b border-b-gray-200">
                  <p>Share:</p>
                  <IconList
                    icons={singlePageLinks}
                    iconStyles="hover:text-gray-200"
                    listItemStyles="px-[5px] pb-0.5 bg-gray-700 rounded-full"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        <article>
          <div className="mb-6">
            <Button size="lg">Description</Button>
            <Link to="/" className="ml-4">
              Reviews (24)
            </Link>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eaque hic obcaecati adipisci placeat dicta quia officia ipsa, quae
            dolor id. Consectetur velit odit doloribus delectus est ut
            perferendis laboriosam veniam. Rem culpa sint laborum possimus
            omnis, aspernatur non reprehenderit reiciendis quo maiores dolorem
            adipisci accusamus quae error recusandae vel ratione ut excepturi
            illum libero maxime laboriosam magni provident deserunt.
          </p>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eaque hic obcaecati adipisci placeat dicta quia officia ipsa, quae
            dolor id. Consectetur velit odit doloribus delectus est ut
            perferendis laboriosam veniam. Rem culpa sint laborum possimus
            omnis, aspernatur non reprehenderit reiciendis quo maiores dolorem
            adipisci accusamus quae error recusandae vel ratione ut excepturi
            illum libero maxime laboriosam magni provident deserunt.
          </p>

          <div>
            <h3 className="text-xl">Key Benefits</h3>
            <ul className="list-disc pl-5">
              <li className="my-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
                repellat.
              </li>
              <li className="my-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
                repellat.
              </li>
              <li className="my-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
                repellat.
              </li>
              <li className="my-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
                repellat.
              </li>
            </ul>
          </div>
        </article>

        <section className="mt-20 mb-10">
          <h2 className="text-3xl font-semibold mb-4">Similar Products</h2>
          <ProductList dishes={dishes} listStyles="grid-cols-4" />
        </section>
      </Wrapper>
    </main>
  );
};
