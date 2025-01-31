import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/main";

import HomePage from "@/pages/home";
import ContactPage from "./pages/contact";
import ProductsPage from "./pages/products";
import BlogPage from "./pages/blogs";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/collections", element: <ProductsPage /> },
      { path: "/blogs", element: <BlogPage /> },
      { path: "/contact", element: <ContactPage /> },
    ]
  }
])