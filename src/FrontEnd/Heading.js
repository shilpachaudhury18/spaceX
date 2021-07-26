import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

function Heading() {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" align="center">
          Space X Assignment
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default Heading;
