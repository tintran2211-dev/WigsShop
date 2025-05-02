import { useRoutes } from "react-router-dom";
import Home from "../wigshop/Home/Home";
import Product from "../wigshop/ProductDetails/Product";

const GeneraRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products/type",
      element: <Product />,
    },
  ]);

  return routes;
};

export default GeneraRoutes;
