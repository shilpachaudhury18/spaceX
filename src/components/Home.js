import React from "react";
import Grid from "@material-ui/core/Grid";
import Buttons from "../FrontEnd/Buttons";
import Heading from "../FrontEnd/Heading";
import View from "../FrontEnd/View";

function Home() {
  return (
    <React.Fragment>
      <Grid container xs={12}>
        <Grid xs={12}>
          <Heading />
        </Grid>
        <Grid item xs={0} sm={2}>
          <Buttons />
        </Grid>
        <Grid item xs={9}>
          <Grid>
            <View />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
