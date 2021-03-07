import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { Delete, ControlPoint } from "@material-ui/icons";

function App() {
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

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3">Ex Lista de Tarefas</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12} md={6}>
            <Paper elevation={1}>
              <Typography variant="body1">Lista de Tarefas:</Typography>
              <List>{renderItem()}</List>
            </Paper>
          </Grid>

          <Grid item xs={12} lg={12} md={6}>
            <Paper elevation={1}>
              <TextField
                value={value}
                label="Digite sua tarefa"
                onChange={(event) => setValue(event.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => addItem()}
              >
                <ControlPoint />
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setItems([])}
              >
                <Delete />
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
