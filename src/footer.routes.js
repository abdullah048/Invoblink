// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import invoblink from "assets/images/invoblink.png";
import { LocationOn, Phone } from "@mui/icons-material";

const date = new Date().getFullYear();

export default {
  menus: [
    {
      // name: "Email",
      items: [
        {
          name: "Email",
          icon: <EmailIcon />,
          description: "info@invoblink.com",
          href: "/",
        },
      ],
    },
    {
      // name: "Phone",
      items: [
        {
          name: "Phone",
          icon: <Phone />,
          description: "+92-324-4073755",
          href: "/",
        },
      ],
    },
    {
      // name: "Phone",
      items: [
        {
          name: "Location",
          icon: <LocationOn />,
          description: "Your Location Here",
          href: "/",
        },
      ],
    },
    // {
    //   name: "Important Links",
    //   items: [
    //     { name: "Home", href: "/home" },
    //     { name: "About Us", href: "/about" },
    //     { name: "Services", href: "/services" },
    //     { name: "Contact Us", href: "/contact" },
    //   ],
    // },
    // {
    //   name: "About Us",
    //   items: [
    //     {
    //       name: "DevStrings is a company for Software Development, Web Development, Graphics designing, E-commerce and Digital Marketing which delivers exclusive and finest solutions to the clients being top internet marketing firm.",
    //       href: "/about",
    //     },
    //   ],
    // },
  ],
  socials: [
    // {
    //   icon: <FacebookIcon />,
    //   // link: "https://www.facebook.com/devstrings",
    // },
    // {
    //   icon: <TwitterIcon />,
    //   // link: "https://www.twitter.com/StringsDev",
    // },
    // {
    //   icon: <InstagramIcon />,
    //   // link: "https://www.instagram.com/devstrings",
    // },
    // {
    //   icon: <LinkedInIcon />,
    //   // link: "https://www.linkedin.com/company/devstrings",
    // },
  ],
  brand: {
    // name: "DevStrings",
    image: invoblink,
    route: "/",
  },

  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Copyright &copy; 2023 (Company_Name). All Rights Reserved.{" "}
    </MKTypography>
  ),
};
