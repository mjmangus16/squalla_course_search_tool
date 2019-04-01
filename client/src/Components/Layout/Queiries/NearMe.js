import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";

const styles = theme => ({
  container: {
    margin: "25px auto"
  }
});

const NearMe = ({ classes, submitHandler }) => {
  const handleNearMe = () => {
    let latitude;
    let longitude;
    let combined;
    const getLocation = () => {
      if (navigator.geolocation) {
        // Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition(success, fail);
      } else {
        alert("Sorry, your browser does not support geolocation services.");
      }
    };

    function success(position) {
      latitude = `latitude=${position.coords.latitude}`;
      longitude = `longitude=${position.coords.longitude}`;
      combined = latitude + "&" + longitude;
      submitHandler(combined);
    }

    function fail() {
      alert("You must allow location services to use this feature.");
    }

    getLocation();
  };

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        style={{
          backgroundColor: lightBlue[700]
        }}
        fullWidth
        onClick={handleNearMe}
      >
        Find Courses Near Me
      </Button>
    </div>
  );
};

export default withStyles(styles)(NearMe);
