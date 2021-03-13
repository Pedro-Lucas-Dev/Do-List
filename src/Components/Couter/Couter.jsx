import React, { useState } from "react";
import { Container, Grid, Typography, Paper } from "@material-ui/core";
import { PlusOneSharp, ExposureNeg1Sharp } from "@material-ui/icons";

export const Couter = ({ text }) => {
  const [initialValue, setInitialValue] = useState(0);

  const plusOne = () => {
    if (initialValue !== 20) {
      setInitialValue(initialValue + 1);
      return;
    }
  };

  const minusOne = () => {
    if (initialValue !== 0) {
      setInitialValue(initialValue - 1);
      return;
    }
  };

  return (
    <Container>
      <Typography variant="h2" color="inherit" align="center">
        {" "}
        {text}{" "}
      </Typography>
      <Paper>
        <Grid container alignItems={"center"} direction={"column"}>
          <Grid item>
            <Typography variant="h3"> {initialValue} </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify={"center"}>
          <Grid container item lg={4} sm={4} direction={"row"}>
            <Grid container item lg={6} sm={6} justify={"center"}>
              <Typography
                onClick={() => plusOne()}
                color={initialValue !== 20 ? "secondary" : "textPrimary"}
              >
                <PlusOneSharp style={{ fontSize: 60 }} />
              </Typography>
            </Grid>
            <Grid container item lg={6} sm={6} justify={"center"}>
              <Typography
                onClick={() => minusOne()}
                color={initialValue !== 0 ? "secondary" : "textPrimary"}
              >
                <ExposureNeg1Sharp style={{ fontSize: 60 }} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
