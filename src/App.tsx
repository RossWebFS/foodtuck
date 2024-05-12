import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import { FAQPage } from "./pages/FAQPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop-details/:id" element={<ProductSinglePage />} />
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/sign-up" element={<SignUpPage />}/>
        <Route path="/sign-in" element={<SignInPage />}/>
        <Route path="/faq" element={<FAQPage />}/>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
