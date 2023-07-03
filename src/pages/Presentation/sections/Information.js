// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/ItDevices.jpeg";
import bgBack from "assets/images/tech.jpg";
import React from "react";
function Information() {
  return (
    <MKBox component="section" py={6} my={6} id="services">
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>Take a look at some of the features we offer in Podio CRM</>
                }
                // description="Technology partner for startups, businesses, entrepreneurs an innovator. Hire dedicated teams of software developers & eCommerce services providers."
              />
              <RotatingCardBack
                image={bgBack}
                title="Take a look at some of the features we offer in Podio CRM"
                // description="We’re a team of passionate, dedicated people who have one overreaching goal – Your Success is Our Success."
                // action={{
                //   type: "internal",
                //   route: "/services",
                //   label: "Services",
                // }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="switch_access_shortcut_add"
                  // title=""
                  description="Acquisition and disposition processes"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="local_offer"
                  // title=""
                  description="Offers and contracts management"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="account_balance_wallet"
                  // title=""
                  description="Transaction management"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="follow_the_signs"
                  // title=""
                  description="Click2Call based lead follow-ups"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="sms"
                  // title=""
                  description="SMS/RVM/DM & cold call campaign tracking"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="notifications_active"
                  // title=""
                  description="Follow up reminders and nurture sequences"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="trending_up"
                  // title=""
                  description="KPIs and lead tracking"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
