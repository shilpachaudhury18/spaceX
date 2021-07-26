import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaunch } from "../Redux";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function View() {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.rocket);

  useEffect(() => {
    dispatch(fetchLaunch());
  }, [dispatch]);

  const useStyles = makeStyles({
    card: {
      display: "flex",
      spacing: 2,
    },
    media: {
      height: 300,
      width: 300,
    },
  });

  const classes = useStyles();

  const theme = createMuiTheme({
    typography: {
      fontSize: 14,
      fontFamily: "Mono-space",
    },
  });

  return launches?.isLoading ? (
    <img
      src="https://images.vexels.com/media/users/3/203409/isolated/lists/255fa1a5339446d19ef7068cfe170c7b-space-rocket-illustration-rocket.png"
      alt="...loading"
    />
  ) : launches.error ? (
    <h2>{launches.error}</h2>
  ) : (
    <React.Fragment>
      <Card>
        <Grid item xs={12} container direction="row" className={classes}>
          {launches &&
            launches.rockets &&
            launches.rockets.map((name) => (
              <Grid item xs={12} sm={4} className={classes.card}>
                <CardActionArea key={name.flight_name}>
                  <CardMedia
                    component="img"
                    alt="space mission logos"
                    height="500"
                    image={name.links.mission_patch_small}
                    title="Mission Logo"
                    className={classes.media}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h2"
                      align="center"
                    >
                      {name.mission_name}
                    </Typography>
                    <ThemeProvider theme={theme}>
                      <Typography variant="body2">
                        <Typography variant="h5" component="h1">
                          Mission ID: {name.mission_id}
                        </Typography>
                        <Typography variant="h5" component="h1">
                          Launch Year: {name.launch_year}
                        </Typography>
                        <Typography variant="h5" component="h1">
                          Launch Success:
                          {name.launch_success ? "true" : "false"}
                        </Typography>
                        <Typography variant="h5" component="h1">
                          Land Success:
                          {name.rocket.first_stage.cores[0].land_success
                            ? "true"
                            : "false"}
                        </Typography>
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </Grid>
            ))}
        </Grid>
      </Card>
    </React.Fragment>
  );
}

export default View;
