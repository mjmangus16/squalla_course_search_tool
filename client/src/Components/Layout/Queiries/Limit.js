import React, { Fragment } from "react";
import {
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  formControl: {
    width: 65,
    margin: "10px auto"
  },
  hidden: {
    display: "none"
  }
});

const Limit = ({ classes, handler, value, limitCount }) => {
  const nums = [5, 10, 25, 50, 100];

  return (
    <Fragment>
      <FormControl
        className={value === 1 ? classes.hidden : classes.formControl}
      >
        <InputLabel htmlFor="amount-simple">Count</InputLabel>
        <Select
          value={limitCount}
          onChange={handler("limitCount")}
          inputProps={{
            name: "amount",
            id: "amount-simple"
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {nums.map(num => (
            <MenuItem value={num} key={nums.indexOf(num)}>
              {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default withStyles(styles)(Limit);
