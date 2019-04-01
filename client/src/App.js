import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core";
import axios from "axios";

import Header from "./Components/Layout/Header";
import FilterSelect from "./Components/Layout/FilterSelect";
import FilterActions from "./Components/Layout/FilterActions";

import Courses from "./Components/Views/Courses";

const styles = theme => ({
  container: {
    marginTop: 64,
    [theme.breakpoints.down("sm")]: {
      marginTop: 56
    }
  }
});

class App extends Component {
  state = {
    value: 0,
    limitCount: 10,
    courseName: "",
    state: "",
    zipCode: "",
    latLong: "",
    courses: []
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChange2 = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleNearMe = data => {
    this.setState({ latLong: data }, () => {
      this.getCourses();
    });
  };

  getCourses = () => {
    const data = {
      limit: this.state.limitCount
    };
    const { value, courseName, state, zipCode, latLong } = this.state;

    if (value === 0) {
      data.data = latLong;
      data.query = "nearMe";
    } else if (value === 1) {
      data.data = courseName;
      data.query = "name";
    } else if (value === 2) {
      data.data = state;
      data.query = "state";
    } else if (value === 3) {
      data.data = zipCode;
      data.query = "zip";
    }

    axios
      .post("/api/pdgaAPI/search", data)
      .then(res => this.setState({ courses: res.data.courses }))
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    const {
      value,
      limitCount,
      courseName,
      state,
      zipCode,
      courses
    } = this.state;
    return (
      <div className="App">
        <CssBaseline />
        <Header />
        <div className={classes.container}>
          <FilterSelect value={value} handleChange={this.handleChange} />
          <FilterActions
            value={value}
            limitCount={limitCount}
            handler={this.handleChange2}
            courseName={courseName}
            state={state}
            zipCode={zipCode}
            submitHandler={this.getCourses}
            handleNearMe={this.handleNearMe}
          />
          <Courses courses={courses} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
