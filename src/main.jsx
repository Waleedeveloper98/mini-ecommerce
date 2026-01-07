import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CartPage from "./pages/CartPage.jsx";
import App from "./App.jsx";
import ProductsGrid from "./components/ProductsGrid.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ThankyouPage from "./pages/ThankyouPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "products",
        element: <ProductsGrid />,
      },
      {
        path: "order-success",
        element: <ThankyouPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
