import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
import AuthContextComponent from "./ContextAPI/AuthContextComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextComponent>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextComponent>
  </StrictMode>
);
