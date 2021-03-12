import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { PlusOneSharp, ExposureNeg1Sharp } from "@material-ui/icons";

export const Couter = ({ text }) => {
  const [initialValue, setInitialValue] = useState(0);

  const plusOne = () => {
    setInitialValue(initialValue + 1);
  };

  const lessOne = () => {
    setInitialValue(initialValue - 1);
  };

  return (
    <Container>
      <Grid container alignItems={"center"} direction={"column"}>
        <Grid item>
          <Typography variant="h2" color="primary">
            {" "}
            {text}{" "}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3"> {initialValue} </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify={"center"}>
        <Grid container item lg={4} sm={4} direction={"row"}>
          <Grid container item lg={6} sm={6} justify={"center"}>
            <Typography onClick={() => plusOne()} color="secondary">
              <PlusOneSharp style={{ fontSize: 60 }} />
            </Typography>
          </Grid>
          <Grid container item lg={6} sm={6} justify={"center"}>
            <Typography onClick={() => lessOne()} color="secondary">
              <ExposureNeg1Sharp style={{ fontSize: 60 }} />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
