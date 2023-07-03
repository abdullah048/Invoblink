// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
// Material Kit 2 React examples
import MKTypography from "components/MKTypography";
import "./Location.css";
import { Icon } from "@mui/material";
import React from "react";

function LocationsCards() {
  return (
    <MKBox component="section" py={3} id="contact">
      <Container>
        <Grid container>
          <Grid item xs={12} md={4} lg={4} xl={4} className="mainCard">
            <div className="locationMainCard">
              <Grid item className="iconDashedGrid">
                <Icon className="iconSpace">email</Icon>
              </Grid>
              <Grid item>
                <MKTypography variant="h4" className="contactHeading">
                  Email
                </MKTypography>
              </Grid>
              <Grid item>
                <MKTypography
                  className="contactDetails"
                  style={{
                    marginLeft: "25px",
                    marginRight: "25px",
                  }}
                >
                  info@invoblink.com
                </MKTypography>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={4} xl={4} className="mainCard">
            <div className="locationMainCard">
              <Grid item className="iconDashedGrid">
                <Icon className="iconSpace">phone</Icon>
              </Grid>
              <Grid item>
                <MKTypography variant="h4" className="contactHeading">
                  Phone
                </MKTypography>
              </Grid>
              <Grid item>
                <MKTypography
                  className="contactDetails"
                  style={{
                    marginLeft: "25px",
                    marginRight: "25px",
                  }}
                >
                  +92-324-4073755
                </MKTypography>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={4} xl={4} className="mainCard">
            <div className="locationMainCard">
              <Grid item className="iconDashedGrid">
                <Icon className="iconSpace">location_on</Icon>
              </Grid>
              <Grid item>
                <MKTypography variant="h4" className="contactHeading">
                  Location
                </MKTypography>
              </Grid>
              <Grid item>
                <MKTypography
                  className="contactDetails"
                  style={{
                    marginLeft: "25px",
                    marginRight: "25px",
                  }}
                >
                  Your Location Here
                </MKTypography>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container>
          <Grid item xs={12} style={{ paddingTop: "50px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d506.0647611907324!2d73.11954223894914!3d31.431084215900672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226918bbe53fa1%3A0x3664a52bce5edadb!2sDevStrings!5e0!3m2!1sen!2s!4v1680859827876!5m2!1sen!2s"
              style={{ width: "100%", height: "250px", border: "none" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LocationsCards;
