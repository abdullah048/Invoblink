// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import Presentation from "layouts/pages/presentation";

const routes = [
  {
    name: "Home",
    icon: <Icon>home</Icon>,
    component: <Presentation />,
    route: "/",
    href: "#home",
  },
  {
    name: "Services",
    icon: <Icon>settings</Icon>,
    // route: "/services",
    href: "#services",
  },
  {
    name: "About Us",
    icon: <Icon>info</Icon>,
    href: "#about",
  },
  {
    name: "Contact Us",
    icon: <Icon>call</Icon>,
    href: "#contact",
  },
];

export default routes;
