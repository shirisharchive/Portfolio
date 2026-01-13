import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageRoutes from "../pagesRoutes.tsx/routes";
import PageNotFound from "../pages/PagenotFound";
import AboutMe from "../pages/AboutMe";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <AboutMe />,
  },
  ...PageRoutes,
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
const RouterConfig = () => {
  return <RouterProvider router={routerConfig} />;
};
export default RouterConfig;
