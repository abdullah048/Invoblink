import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import "./Services.css";
import { Icon } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ServicesCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios("/allServices");
      console.log(response);
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <Grid container>
      {data.map((item) => (
        <Grid
          key={item.id}
          className="mainHoverTransition"
          item
          xs={12}
          md={4}
          lg={4}
          xl={4}
        >
          <div className="hoverTransition">
            <Grid
              item
              style={{
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                margin: "auto",
              }}
              backgroundColor={item.backgroundColor}
            >
              <div>
                <Icon
                  fontSize="large"
                  style={{
                    color: "#fff",
                    margin: "17px",
                  }}
                >
                  {item.iconName}
                </Icon>
              </div>
            </Grid>
            <Grid item>
              <MKTypography variant="h4" className="hoverTransitionText">
                {item.title}
              </MKTypography>
            </Grid>
            <Grid item>
              <MKTypography className="hoverTransitionTextDetails">
                {item.description}
              </MKTypography>
            </Grid>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default ServicesCard;
