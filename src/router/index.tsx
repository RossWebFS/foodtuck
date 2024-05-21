import { Outlet, createBrowserRouter } from "react-router-dom";

import { Header } from "src/containers/layouts/Header";
import { Footer } from "src/containers/layouts/Footer";
import { HomePage } from "src/pages/HomePage";
import { MenuPage } from "src/pages/MenuPage";
import { ShopPage } from "src/pages/ShopPage";
import { ProductSinglePage } from "src/pages/ProductSinglePage";
import { CartPage } from "src/pages/CartPage";
import { BlogPage } from "src/pages/BlogPage";
import { SignUpPage } from "src/pages/SignUpPage";
import { SignInPage } from "src/pages/SignInPage";
import { ErrorPage } from "src/pages/ErrorPage";
import { FAQPage } from "src/pages/FAQPage";
import { ChefPage } from "src/pages/ChefPage";
import { CheckoutPage } from "src/pages/CheckoutPage";
import { AboutPage } from "src/pages/AboutPage";
import { ProfilePage } from "src/pages/Profile";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop-details/:id",
        element: <ProductSinglePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/chefs",
        element: <ChefPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
