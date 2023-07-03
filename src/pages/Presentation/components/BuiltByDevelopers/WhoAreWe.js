// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/whoAreWe.jpg";

function BuiltByDevelopers() {
  return (
    <MKBox
      id="about"
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { gradients },
        }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container sx={{ ml: { xs: 0, lg: 6 } }}>
          <Grid item xs={12} lg={8}>
            <MKTypography variant="h3" color="white" mb={2}>
              Who are we?
            </MKTypography>
          </Grid>
          <br />
          <br />
          <Grid item xs={12} lg={11}>
            <MKTypography
              variant="body1"
              style={{ textAlign: "justify" }}
              color="white"
              opacity={0.8}
              mb={1}
            >
              Invoblink is your one-stop shop for real estate solutions and
              services. Our expertise delves into delivering top-notch services
              to the US real estate market through effective Marketing, virtual
              operations, lead generation, and automation systems. was
              established in 2023 and has catered to the profitability and
              efficiency of over 10 businesses (including real estate,
              government agencies, and other service providers) since its
              origin. Our prior experiences involve making worthwhile and
              lucrative recommendations to our clients in terms of effectively
              managing real estate leads, lead generation campaigns, acquisition
              & disposition processes and lead cycle from generation to closure,
              all under one platform. With a proven concept, established a
              constructive online real estate investment platform for potential
              investors to streamline their real estate lead life cycle to
              double their returns with a proven concept.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
