import { Header } from "src/containers/layouts/Header";
import { Footer } from "src/containers/layouts/Footer";
import { HomePage } from "src/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
