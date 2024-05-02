import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "src/containers/layouts/Header";
import { Footer } from "src/containers/layouts/Footer";
import { HomePage } from "src/pages/HomePage";
import { MenuPage } from "src/pages/MenuPage";
import { ShopPage } from "src/pages/ShopPage";
import { ProductSinglePage } from "src/pages/ProductSinglePage";
import { CartPage } from "src/pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop-details" element={<ProductSinglePage />} />
        <Route path="/cart" element={<CartPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
