import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";
import { ToastContainer } from "react-toastify";
import FriendProvider from "./Context/FriendContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </FriendProvider>
  </StrictMode>,
);
