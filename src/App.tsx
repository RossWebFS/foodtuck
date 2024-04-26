import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "src/containers/layouts/Header";
import { Footer } from "src/containers/layouts/Footer";
import { HomePage } from "src/pages/HomePage";
import { MenuPage } from "src/pages/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
