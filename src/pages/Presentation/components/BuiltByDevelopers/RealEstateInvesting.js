// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/investmentLog.jpg";

function BuiltByDevelopers() {
  return (
    <MKBox display="flex" alignItems="center" borderRadius="xl" my={2} py={2}>
      <Container>
        <Grid container sx={{ ml: { xs: 0, lg: 1 } }}>
          <Grid
            xs={0}
            lg={5}
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
            }}
          ></Grid>
          <Grid item xs={12} lg={7} sx={{ paddingLeft: "40px" }}>
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h3" color="black" mb={2}>
                What is Real Estate Investing (REI)?
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={11}>
              <MKTypography
                variant="body1"
                style={{ textAlign: "justify" }}
                color="black"
                opacity={0.8}
              >
                A real estate investor or entrepreneur is an individual that is
                passively or actively engaged in investing in real estate. An
                investor may consider buying property, make adjustments or
                repairs/improvements to it increasing its value, and ultimately
                selling the property for a higher price to make a gain. Real
                Estate Investing (REI) is a common ground chosen by most
                entrepreneurs mainly because of how remunerative it can be. The
                investments made consistently increases in value with the
                passage of time, and it has the potential to exceed and
                outperform any of the other investments you make. Real estate
                involves investing intangible assets that are secure and
                profitable. Not to mention, real estate acts as a hedge against
                inflation, making it less vulnerable to minor fluctuations in
                the stock market.
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
