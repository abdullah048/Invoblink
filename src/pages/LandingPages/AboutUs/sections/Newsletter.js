// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

import macbook from "assets/images/macbook.png";
import React, { useState } from "react";
import axios from "axios";
import { FormControl } from "@mui/material";
import { message } from "antd";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("working");
    // alert("dknalfna");
    try {
      const response = await axios.post("/addSubscriber", { email });
      message.success("Thanks for subscribing!");
      if (response.data.message) {
        setEmail("");
      } else {
        return response.data;
      }
    } catch (error) {
      message.error(error.response.data);
    }
  };
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            md={12}
            lg={7}
            sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 0, md: 0 } }}
          >
            <MKTypography variant="h4">
              Be the first to see the news
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Your company may not be in the software business, but eventually,
              a software company will be in your business.
            </MKTypography>

            <FormControl fullWidth onSubmit={handleSubmit}>
              <MKBox
                width="100%"
                component="form"
                method="post"
                autoComplete="off"
              >
                <Grid container spacing={1}>
                  <Grid item xs={12} md={8}>
                    <MKInput
                      type="email"
                      label="Email Here..."
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required={true}
                    />
                    {/* <MKInput
                    type="hidden"
                    label="Hidden"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                  /> */}
                  </Grid>
                  <Grid item xs={4} sx={{ margin: "auto" }}>
                    <MKButton
                      type="submit"
                      variant="gradient"
                      color="info"
                      sx={{ height: "100%", margin: "auto" }}
                    >
                      Subscribe
                    </MKButton>
                  </Grid>
                </Grid>
              </MKBox>
            </FormControl>
          </Grid>
          <Grid item xs={0} md={0} lg={4} sx={{ m: "auto" }}>
            <MKBox position="relative">
              <MKBox
                display={{ xs: "none", lg: "block" }}
                component="img"
                src={macbook}
                alt="macbook"
                width="100%"
                style={{ borderRadius: "5px" }}
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
