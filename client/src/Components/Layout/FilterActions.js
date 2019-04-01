import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import ByName from "./Queiries/ByName";
import ByState from "./Queiries/ByState";
import ByZip from "./Queiries/ByZip";
import NearMe from "./Queiries/NearMe";
import Limit from "./Queiries/Limit";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    width: "100%",
    maxWidth: 500,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300
    }
  },
  hidden: {
    width: "100%",
    maxWidth: 400,
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300
    }
  }
});

class FilterActions extends Component {
  render() {
    const {
      classes,
      value,
      limitCount,
      handler,
      courseName,
      state,
      zipCode,
      submitHandler,
      handleNearMe
    } = this.props;

    let content;

    if (value === 0) {
      content = <NearMe submitHandler={handleNearMe} />;
    } else if (value === 1) {
      content = (
        <ByName
          courseName={courseName}
          handler={handler}
          submitHandler={submitHandler}
        />
      );
    } else if (value === 2) {
      content = (
        <ByState
          state={state}
          handler={handler}
          submitHandler={submitHandler}
        />
      );
    } else if (value === 3) {
      content = (
        <ByZip
          zipCode={zipCode}
          handler={handler}
          submitHandler={submitHandler}
        />
      );
    }

    return (
      <div
        className={
          value === 0 || value === 1 ? classes.hidden : classes.container
        }
      >
        <Limit value={value} limitCount={limitCount} handler={handler} />
        {content}
      </div>
    );
  }
}

export default withStyles(styles)(FilterActions);
