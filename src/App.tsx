import { Header } from "./features/Header";
import { Footer } from "./features/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
