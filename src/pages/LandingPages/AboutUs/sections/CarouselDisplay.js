import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid } from "@mui/material";

function CarouselDisplay() {
  var items = [
    {
      name: "Mandeep Singh, Australia",
      description: "No one better then DevStrings. Highly recommended",
    },
    {
      name: "Toshihiro, Japan",
      description:
        "Very smooth communication, Speed response and High skilled Team. I want to work together continuously.",
    },
    {
      name: "Joe Berding, Canada",
      description:
        "I was impressed with their presentation at first sight. They managed our project with professional manners and completed it with our satisfaction. I would love to give them work opportunity on my coming projects.",
    },
    {
      name: "Mickaeel, Indonesia",
      description:
        "Very good experience with DevStrings. Reactive, fast, understand everything quickly. It's a pleasure to work with such type of developers!. I would definitely recommend DevStrings to anyone",
    },
  ];
  return (
    <Carousel
      swipe={true}
      fullHeightHover={false}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#086AD8",
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "25px",
          textAlign: "center",
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselDisplay;

function Item(props) {
  return (
    <Grid container xs={12} md={12}>
      <Grid item xs={0} md={2} lg={1}></Grid>
      <Grid item xs={12} md={8} lg={10} style={{ textAlign: "center" }}>
        <p style={{ color: "white" }}>{props.item.description}</p>
        <h6 style={{ color: "white" }}>{props.item.name}</h6>
      </Grid>
      <Grid item xs={0} md={2} lg={1}></Grid>
    </Grid>
  );
}
