// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import bgImage from "assets/images/countersBackground.jpg";
import { Icon } from "@mui/material";
import React from "react";

function Counters() {
  return (
    <MKBox
      component="section"
      py={6}
      style={{ backgroundImage: `url(${bgImage}`, borderRadius: "10px" }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            xl={4}
            style={{
              padding: "10px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                border: "1px solid white",
                backgroundColor: "#FCFCFE",
                borderRadius: "5px",
                paddingTop: "25px",
              }}
            >
              <Grid
                item
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#E2EDFD",
                  width: "60px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <Icon
                  fontSize="large"
                  style={{
                    color: "#086ad8",
                    margin: "12px",
                  }}
                >
                  book
                </Icon>
              </Grid>
              <DefaultCounterCard
                // count=""
                // suffix="+"
                title="Book Formatting"
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            xl={4}
            style={{
              padding: "10px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                border: "1px solid white",
                backgroundColor: "#FCFCFE",
                borderRadius: "5px",
                paddingTop: "25px",
              }}
            >
              <Grid
                item
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#E2EDFD",
                  width: "60px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <Icon
                  fontSize="large"
                  style={{
                    color: "#086ad8",
                    margin: "12px",
                  }}
                >
                  design_services
                </Icon>
              </Grid>
              <DefaultCounterCard
                // count=""
                // suffix="+"
                title="Graphic Design"
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            xl={4}
            style={{
              padding: "10px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                border: "1px solid white",
                backgroundColor: "#FCFCFE",
                borderRadius: "5px",
                paddingTop: "25px",
              }}
            >
              <Grid
                item
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#E2EDFD",
                  width: "60px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <Icon
                  fontSize="large"
                  style={{
                    color: "#086ad8",
                    margin: "12px",
                  }}
                >
                  support_agent
                </Icon>
              </Grid>
              <DefaultCounterCard
                // count=""
                // suffix="+"
                title="Customer Representative Services"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
