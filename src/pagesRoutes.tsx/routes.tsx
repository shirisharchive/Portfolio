import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/contact";
import MySkills from "../pages/skills";
import Layout from "../Layout/layout";
//I will import layout outlet here.

const PageRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "contact",
        element: <ContactMe />,
      },
      {
        path: "skills",
        element: <MySkills />,
      },
    ],
  },
];
export default PageRoutes;
