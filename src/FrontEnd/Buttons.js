import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLaunch } from "../Redux";
import {
  Button,
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Buttons() {
  const dispatch = useDispatch();
  const years = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021,
  ];
  const [queryYear, setQueryYear] = useState("");
  const [queryLaunchSuccess, setQueryLaunchSuccess] = useState();
  const [queryLandSuccess, setQueryLandSuccess] = useState();

  useEffect(() => {
    dispatch(fetchLaunch(queryYear, queryLaunchSuccess, queryLandSuccess));
  }, [dispatch, queryYear, queryLaunchSuccess, queryLandSuccess]);

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  const useStyles = makeStyles({
    overline: {
      fontSize: 19,
      fontWeight: 900,
    },
  });
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card>
        <Typography
          variant="overline"
          className={classes.overline}
          component="h1"
        >
          Filters
        </Typography>
        <CardContent>
          <ThemeProvider theme={theme}>
            {years.map((year, index) => (
              <Button
                className={classes.padding}
                color="primary"
                variant="outlined"
                key={index}
                onClick={() => setQueryYear(`&launch_year=${year}`)}
              >
                {year}
              </Button>
            ))}
            <Typography variant="h6" component="h6">
              Launch Success
            </Typography>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => setQueryLaunchSuccess(`&launch_success=true`)}
            >
              True
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => setQueryLaunchSuccess(`&launch_success=false`)}
            >
              False
            </Button>
            <Typography variant="h6" component="h6">
              Land Success
            </Typography>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => setQueryLandSuccess(`&land_success=true`)}
            >
              True
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => setQueryLandSuccess(`&land_success=false`)}
            >
              False
            </Button>
          </ThemeProvider>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default Buttons;
