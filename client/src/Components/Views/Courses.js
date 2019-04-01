import React from "react";
import { Grid } from "@material-ui/core";

import Course from "./Course";

const Courses = ({ courses }) => {
  return (
    <Grid
      container
      justify="center"
      spacing={8}
      style={{ width: "100%", margin: "auto" }}
    >
      {courses.map(course => (
        <Grid item key={courses.indexOf(course)} sm={6} xs={12}>
          <Course data={course} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Courses;
