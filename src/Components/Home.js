import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import CarouselImages from "./carousel/CarouselImages.js";

class Home extends Component {
  render() {
    return (
      <div>
        <CarouselImages />

        <div style={{ width: "100%", margin: "aut" }}>
          <Grid className="home-grid">
            <Cell col={12}></Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;