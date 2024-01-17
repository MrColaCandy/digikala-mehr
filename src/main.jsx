import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"



import "@assets/styles/reset.css"
import "@assets/styles/Yekan.css"
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
