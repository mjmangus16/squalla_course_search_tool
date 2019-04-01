import React, { Component } from "react";
import { Tabs, Tab, withStyles } from "@material-ui/core";

const styles = theme => ({
  flex: {
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9em"
    }
  },
  tabsContainer: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "grey"
  }
});

class FilterSelect extends Component {
  render() {
    const { classes, value, handleChange } = this.props;
    return (
      <div className={classes.tabsContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Near Me" />
          <Tab label="Name" />
          <Tab label="State" />
          <Tab label="Zip" />
        </Tabs>
      </div>
    );
  }
}

export default withStyles(styles)(FilterSelect);
