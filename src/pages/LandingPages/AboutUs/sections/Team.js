// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

import React, { useState, useEffect } from "react";
import axios from "axios";

function Team() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios("/allEmployees");
      console.log(response);
      setData(response.data.employee);
    }
    fetchData();
  }, []);
  return (
    <>
      <MKBox
        component="section"
        variant="gradient"
        bgColor="white"
        position="relative"
        py={6}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
        style={{ borderRadius: "10px", paddingTop: "60px" }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h3" color="dark">
                Our Expert Team
              </MKTypography>
              <MKTypography variant="body2" color="dark" opacity={0.8}>
                Every member of our team owns the company as their own. Together
                we ensure incredible delivery in the field of outsourcing
                software development and E-Commerece.
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {data.map((item, index) => (
              <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                <MKBox>
                  <HorizontalTeamCard
                    image={`http://localhost:5000/file/${item.image}`}
                    name={item.name}
                    position={{
                      color: "white",
                      label: item.designation,
                    }}
                  />
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Team;
