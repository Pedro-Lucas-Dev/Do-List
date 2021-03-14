import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import {
  Delete,
  ControlPoint,
  SentimentVeryDissatisfied,
} from "@material-ui/icons";
import React, { useState } from "react";

export const DoList = () => {
  const [error, setError] = useState("");

  const [value, setValue] = useState("");

  const [items, setItems] = useState([]);

  const handleInput = (digit) => {
    if (digit.length <= 3) {
      setError("Digite mais de 3 caracter");
    }
    if (digit.length > 3 || digit.length === 0) {
      setError("");
    }

    setValue(digit);
  };

  const handleKeyDown = (keyPressed) => {
    if (keyPressed.key === "Enter") {
      return addItem();
    }
  };

  const addItem = () => {
    if (!value.trim() || isNaN(value) === false) {
      return null;
    }
    if (items.length >= 5) {
      return null;
    }

    if (value.length <= 3) {
      return setError("Digite mais de 3 caracter");
    }
    setItems([...items, value]);
    setValue("");
    setError("");
  };

  const renderItem = () => {
    if (items.length === 0) {
      return (
        <ListItem>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <SentimentVeryDissatisfied />
            Não há Tarefas
          </Grid>
        </ListItem>
      );
    }
    return items.map((item, index) => {
      return (
        <ListItem key={index.toString()}>
          - {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
        </ListItem>
      );
    });
  };

  const ButtonActions = () => {
    return (
      <Grid container item className={classes.buttons}>
        <Grid item lg={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addItem()}
            fullWidth
            disabled={!value || items.length >= 5 ? true : false}
          >
            <ControlPoint />
          </Button>
        </Grid>
        <Grid item lg={6}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setItems("")}
            fullWidth
            disabled={items.length === 0 ? true : false}
          >
            <Delete />
          </Button>
        </Grid>
      </Grid>
    );
  };

  const useStyles = makeStyles({
    text: {
      background: "#a6d4fa",
      borderTopLeftRadius: 5,
      borderTopRighttRadius: 5,
      padding: 8,
    },
    body: {
      background: "#fff",
    },
    item: {
      background: "#ccc",
      padding: 8,
    },
    buttons: {
      background: "#aedaa6",
    },
  });
  const classes = useStyles();

  const Header = ({ text }) => {
    return (
      <Grid item className={classes.text}>
        <Typography variant="h5" color="initial" align="center">
          {text}
        </Typography>
      </Grid>
    );
  };

  return (
    <Container>
      <Grid container lg={12} item justify="center">
        <Grid container direction="column" item lg={4}>
          <Header text="To Do List" />
          <Grid item className={classes.body}>
            <List>{renderItem()}</List>
          </Grid>
          <Grid item className={classes.item}>
            <TextField
              value={value}
              label="Digite sua tarefa"
              onChange={(event) => handleInput(event.target.value)}
              onKeyDown={(event) => handleKeyDown(event)}
            />
            {error ? (
              <Typography variant="body2" color="secondary">
                {error}
              </Typography>
            ) : null}
          </Grid>
          <ButtonActions />
        </Grid>
      </Grid>
    </Container>
  );
};
