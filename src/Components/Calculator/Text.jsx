import { Typography } from "@material-ui/core";
import React from "react";

export const Text = ({ text }) => {
  return (
    <Typography align="center" variant="h2" color="inherit">
      {text}
    </Typography>
  );
};
export const Display = ({ value }) => {
  return (
    <Typography align="center" variant="h5">
      {value}
    </Typography>
  );
};
