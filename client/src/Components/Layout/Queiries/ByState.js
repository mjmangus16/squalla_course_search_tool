import React from "react";
import {
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  withStyles
} from "@material-ui/core";

import { lightBlue } from "@material-ui/core/colors";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "3fr 1fr"
    }
  },
  formControl: {
    margin: "10px 10px 28px 10px",
    minWidth: 75,
    maxWidth: 150
  },
  button: {
    marginTop: 25,
    height: 36
  }
});

const ByState = ({ classes, handler, submitHandler, state }) => {
  const states = [
    { name: "Alabama", abbr: "AL" },
    { name: "Alaska", abbr: "AK" },
    { name: "Arizona", abbr: "AZ" },
    { name: "Arkansas", abbr: "AR" },
    { name: "California", abbr: "CA" },
    { name: "Colorado", abbr: "CO" },
    { name: "Connecticut", abbr: "CT" },
    { name: "Deleware", abbr: "DE" },
    { name: "Florida", abbr: "FL" },
    { name: "Georgia", abbr: "GA" },
    { name: "Hawaii", abbr: "HI" },
    { name: "Idaho", abbr: "ID" },
    { name: "Illinois", abbr: "IL" },
    { name: "Indiana", abbr: "IN" },
    { name: "Iowa", abbr: "IA" },
    { name: "Kansas", abbr: "KS" },
    { name: "Kentucky", abbr: "KY" },
    { name: "Louisiana", abbr: "LA" },
    { name: "Maine", abbr: "ME" },
    { name: "Maryland", abbr: "MD" },
    { name: "Massachusetts", abbr: "MA" },
    { name: "Michigan", abbr: "MI" },
    { name: "Minnesota", abbr: "MN" },
    { name: "Mississippi", abbr: "MS" },
    { name: "Missouri", abbr: "MO" },
    { name: "Montana", abbr: "MT" },
    { name: "Nebraska", abbr: "NE" },
    { name: "Nevada", abbr: "NV" },
    { name: "New Hampshire", abbr: "NH" },
    { name: "New Jersey", abbr: "NJ" },
    { name: "New Mexico", abbr: "NM" },
    { name: "New York", abbr: "NY" },
    { name: "North Carolina", abbr: "NC" },
    { name: "North Dakota", abbr: "ND" },
    { name: "Ohio", abbr: "OH" },
    { name: "Oklahoma", abbr: "OK" },
    { name: "Oregon", abbr: "OR" },
    { name: "Pennsylvania", abbr: "PA" },
    { name: "Rhode Island", abbr: "RI" },
    { name: "South Carolina", abbr: "SC" },
    { name: "South Dakota", abbr: "SD" },
    { name: "Tennessee", abbr: "TN" },
    { name: "Texas", abbr: "TX" },
    { name: "Utah", abbr: "UT" },
    { name: "Vermont", abbr: "VT" },
    { name: "Virginia", abbr: "VA" },
    { name: "Washington", abbr: "WA" },
    { name: "West Virginia", abbr: "WV" },
    { name: "Wisconsin", abbr: "WI" },
    { name: "Wyoming", abbr: "WY" }
  ];

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">State</InputLabel>
        <Select
          value={state}
          onChange={handler("state")}
          inputProps={{
            name: "state",
            id: "state-simple"
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {states.map(state => (
            <MenuItem value={state.abbr} key={states.indexOf(state)}>
              {state.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        style={{
          backgroundColor: lightBlue[700]
        }}
        className={classes.button}
        fullWidth
        onClick={submitHandler}
      >
        Find
      </Button>
    </div>
  );
};

export default withStyles(styles)(ByState);
