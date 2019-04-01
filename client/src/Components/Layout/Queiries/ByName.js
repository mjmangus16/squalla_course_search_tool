import React from "react";
import { Button, InputBase, withStyles } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { lightBlue } from "@material-ui/core/colors";

const styles = theme => ({
  container: {
    gridColumn: "1/3",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "1em",
    margin: "25px auto",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "3fr 1fr"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%"
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing.unit
    }
  }
});

const ByName = ({ classes, handler, submitHandler }) => {
  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={handler("courseName")}
          placeholder="Course Name..."
          id="search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </div>
      <Button
        variant="contained"
        style={{
          backgroundColor: lightBlue[700]
        }}
        fullWidth
        onClick={submitHandler}
      >
        Find
      </Button>
    </div>
  );
};

export default withStyles(styles)(ByName);
