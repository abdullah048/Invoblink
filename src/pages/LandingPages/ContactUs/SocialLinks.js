import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Icon from "@mui/material/Icon";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

function SocialLinks() {
  return (
    <MKBox display="flex" justifyContent="center" alignItems="center">
      <MKTypography
        component="a"
        variant="body1"
        color="white"
        href="https://www.facebook.com/devstrings"
        target="_blank"
        mr={3}
      >
        <Icon>facebook</Icon>
      </MKTypography>
      <MKTypography
        component="a"
        variant="body1"
        color="white"
        href="https://www.twitter.com/StringsDev"
        target="_blank"
        mr={3}
      >
        <TwitterIcon />
      </MKTypography>
      <MKTypography
        component="a"
        variant="body1"
        color="white"
        href="https://www.instagram.com/devstrings"
        target="_blank"
        mr={3}
      >
        <InstagramIcon />
      </MKTypography>
      <MKTypography
        component="a"
        variant="body1"
        color="white"
        href="https://www.linkedin.com/company/devstrings"
        target="_blank"
      >
        <LinkedInIcon />
      </MKTypography>
    </MKBox>
  );
}

export default SocialLinks;
