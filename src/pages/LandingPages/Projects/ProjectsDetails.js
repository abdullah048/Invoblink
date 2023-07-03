// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "../../Presentation/sections/data/pagesData";

function ProjectsDetails() {
  const renderData = data.map(({ image, name, title, route }) => (
    <Grid item xs={12} md={6} lg={3} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      <Link to={route}>
        <ExampleCard
          image={image}
          name={name}
          title={title}
          display="grid"
          minHeight="auto"
        />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{
            textAlign: "center",
            my: 6,
            mx: "auto",
            marginBottom: "0px",
            px: 0.75,
          }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Projects
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We’re a team of passionate, dedicated people who have one
            overreaching goal, Your Success is Our Success.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 8 } }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            lg={12}
            style={{ paddingRight: "0px" }}
            sx={{ mt: 3, px: { xs: 0, lg: 8 } }}
          >
            <Grid container>{renderData}</Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ProjectsDetails;
