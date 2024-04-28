import ReactDOM from "react-dom/client";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
