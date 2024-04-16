import { Header } from "src/features/Header";
import { Footer } from "src/features/Footer";
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
