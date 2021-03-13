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
import { Delete, ControlPoint } from "@material-ui/icons";
import React, { useState } from "react";

export const DoList = () => {
  const [value, setValue] = useState("");

  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!value.trim() || isNaN(value) === false) {
      return null;
    }
    setItems([...items, value]);
    setValue("");
  };

  const renderItem = () => {
    if (items.length === 0) {
      return <ListItem>Não há Tarefas</ListItem>;
    }
    return items.map((item, index) => {
      return <ListItem key={index.toString()}>{item}</ListItem>;
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
            disabled
          >
            <ControlPoint />
          </Button>
        </Grid>
        <Grid item lg={6}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setItems([])}
            fullWidth
            disabled
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
      <Grid container direction="column" item lg={4}>
        <Header text="To Do List" />
        <Grid item className={classes.body}>
          <List>{renderItem()}</List>
        </Grid>
        <Grid item className={classes.item}>
          <TextField
            value={value}
            label="Digite sua tarefa"
            onChange={(event) => setValue(event.target.value)}
          />
        </Grid>
        <ButtonActions />
      </Grid>
    </Container>
  );
};
