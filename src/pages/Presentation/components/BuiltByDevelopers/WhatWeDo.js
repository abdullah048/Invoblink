// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/image-3.jpg";

function BuiltByDevelopers() {
  return (
    <MKBox display="flex" alignItems="center" borderRadius="xl" my={2} py={4}>
      <Container>
        <Grid container sx={{ ml: { xs: 0, lg: 1 } }}>
          <Grid item xs={12} lg={7}>
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h3" color="black" mb={2}>
                What do we do?
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={11}>
              <MKTypography
                variant="body1"
                style={{ textAlign: "justify" }}
                color="black"
                opacity={0.8}
                mb={1}
              >
                Combining over seven years of success and over 1000+ happy
                customers served across six different countries, we at Invoblink
                ensure effective lead management for our clients through our
                diverse and credible list of services. We've got everything
                covered, from Brand Establishment to Online Presence, Social
                Media Branding, REI Websites, Seach Engine Optimization (SEO),
                Digital Marketing and State of the art Lead Management Solution
                offering Acquisition, Disposition and Transaction management,
                KPI Tracking, Reporting, onboarding training and Technical
                Support. Our highly skilled virtual operations team offer Data &
                List Management, Skiptracing, Lead Generation Campaign
                Management with various channels including SMS, Ringless
                Voicemails (RVM), Cold Calling, Direct Mailing, Pay per Click
                (PPC) and Social Media Marketing Campaigns. Our Invoblink Podio
                is unlike any other real estate investment management system
                that exists out there. We take pride in providing our customers
                with cutting edge technology and automated processes that beats
                all other REI platforms, assuring you responsiveness and quality
                control. Our experienced project management team will ensure to
                guide you through the process of handling all your property
                leads through the Invoblink Podio System.
              </MKTypography>
            </Grid>
          </Grid>
          <Grid xs={0} lg={5}
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px"
            }}
          ></Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
