import React, { useState } from "react";
import { Container, Grid, Paper, makeStyles } from "@material-ui/core";
import BodyCalculator from "./BodyCalculator";
import { Text, Display } from "./Text";

export const Calculator = () => {
  const useStyles = makeStyles(() => ({
    paper: {
      height: 50,
      width: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(#56CCF2, #2F80ED)",
      borderRadius: 5,
    },
  }));
  const classes = useStyles();

  const CalculatorItem = ({ label, onClick }) => {
    return (
      <Grid onClick={onClick} item lg={3} sm={3}>
        <Paper className={classes.paper}>{label}</Paper>
      </Grid>
    );
  };
  const [value, setValue] = useState(0);

  const [valueOperation, setValueOperation] = useState(0);
  const [operatorSignal, setoperatorSignal] = useState("");

  const Operation = (BodyCalculator) => {
    if (!isNaN(BodyCalculator)) {
      setValue(Number(`${value}${BodyCalculator}`));
      return;
    }

    if (BodyCalculator === "AC") {
      setValue(0);
      setValueOperation(0);
      return;
    }

    if (BodyCalculator === "x") {
      setoperatorSignal("x");
      if (valueOperation === 0) {
        setValueOperation(value);
        setValue(0);
        return;
      }

      if (valueOperation !== 0) {
        setValueOperation(value * valueOperation);
        setValue(value * valueOperation);
        return;
      }
    }

    if (BodyCalculator === "=") {
      console.log(valueOperation);
      const operacao = {
        "-": valueOperation - value,
        x: valueOperation * value,
        "+": valueOperation + value,
      };
      setValue(operacao[operatorSignal]);
      return;
    }

    if (BodyCalculator === "-") {
      setoperatorSignal("-");

      if (valueOperation === 0) {
        setValueOperation(value);
        setValue(0);
      }
      if (valueOperation !== 0) {
        setValueOperation(value - valueOperation);

        setValue(value - valueOperation);
      }
    }

    if (BodyCalculator === "+") {
      setoperatorSignal("+");
      if (valueOperation === 0) {
        setValueOperation(value);
        setValue(0);
        return;
      }

      if (valueOperation !== 0) {
        setValueOperation(value + valueOperation);
        setValue(value + valueOperation);
        return;
      }
    }
    if (BodyCalculator === ".") {
      setValue(value + ".");
    }
  };

  return (
    <Container>
      <Text text="Calculadora" />
      <Paper elevation={3}>
        <Display value={value} />
        <Grid
          container
          alignContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Grid item sm={3} container alignItems="center">
            <Grid item container lg={12} spacing={1}>
              {BodyCalculator.map((body) => {
                return (
                  <CalculatorItem
                    key={body.label}
                    label={body.label}
                    onClick={() => Operation(body.label)}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
