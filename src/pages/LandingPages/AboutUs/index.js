// @mui material components

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import CarouselDisplay from "./sections/CarouselDisplay";
import carouselBg from "assets/images/carouselBg.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Container } from "@mui/material";
import bgImage from "assets/images/about-office.jpg";

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="71vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
          backgroundSize: "100% 71vh",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={9} justifyContent="center" mx="auto">
            <MKTypography
              variant="h2"
              color="white"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              DevStrings
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 0, lg: 0, xl: 12 }}
              mt={1}
            >
              is a company for Software Development, Web Development, Graphics
              designing, E-commerce and Digital Marketing which delivers
              exclusive and finest solutions to the clients being top internet
              marketing firm.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          pt: 0,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Team />
        <Newsletter />
        <MKBox
          component="section"
          pt={6}
          my={6}
          className="mediaCarouselImage"
          width="100%"
          sx={{
            backgroundImage: ({
              functions: { linearGradient, rgba },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.6),
                rgba(gradients.dark.state, 0.6)
              )}, url(${carouselBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
            height: "450px",
          }}
        >
          <Grid container xs={12} alignItems="center">
            <Grid item xs={0} md={2}></Grid>
            <Grid
              alignItems="center"
              item
              xs={12}
              md={8}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <MKTypography
                  className="mediaHeading"
                  variant="h3"
                  style={{ color: "#fff" }}
                >
                  What Our Clients Says
                </MKTypography>
              </div>
              <div
                className="mediaIcon"
                style={{
                  paddingBottom: "40px",
                  paddingTop: "40px",
                }}
              >
                <div
                  style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#086ad8",
                    fontSize: "40px",
                  }}
                >
                  <FormatQuoteIcon style={{ color: "#fff", margin: "11px" }} />
                </div>
              </div>
            </Grid>
            <Grid item xs={0} md={2}></Grid>
          </Grid>

          <CarouselDisplay />
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
