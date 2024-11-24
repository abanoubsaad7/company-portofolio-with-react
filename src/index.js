import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import MainPage from "./dashboard_pages/mainPage";
import ManageProducts from "./dashboard_pages/manageProducts";
import ManageCategories from "./dashboard_pages/manageCategories";
import ManageAccounts from "./dashboard_pages/manageAccounts";
import ManageAboutUsContent from "./dashboard_pages/manageAboutUsContent";
import CategoriesForm from "./components/forms/categoriesForm";
import ProductsForm from "./components/forms/productsForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/dashboard",
    element:<MainPage/>,
  },
  {
    path:"/products",
    element:<MainPage/>,
  },
  {
    path:"/categories",
    element:<MainPage/>,
  },
  {
    path:"/AboutUs",
    element:<MainPage/>,
  },
  {
    path:"/contactUs",
    element:<MainPage/>,
  },
  {
    path:"/manage-products",
    element:<ManageProducts/>,
  },
  {
    path:"/manage-categories",
    element:<ManageCategories/>,
  },
  {
    path:"/manage-AboutUs",
    element:<ManageAboutUsContent/>,
  },
  {
    path:"/manage-contactUs",
    element:<ManageAccounts/>,
  },
  {
    path:"/add-new-product",
    element:<ProductsForm/>,
  },
  {
    path:"/add-new-category",
    element:<CategoriesForm/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
