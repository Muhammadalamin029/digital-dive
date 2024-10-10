import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import BlogContextProvider from "./context/BlogContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </StrictMode>
);
