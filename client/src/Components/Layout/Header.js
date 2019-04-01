import React from "react";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  flex: {
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9em"
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
});

const Header = ({ classes }) => {
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="headline" color="inherit" className={classes.flex}>
          Squalla Course Search Tool
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
