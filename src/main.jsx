import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import Error from "./components/error.jsx";
import "./styles/tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
