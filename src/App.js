import React from "react";
import { Container } from "@material-ui/core";
import { Calculator } from "./Components/Calculator/Calculator";
import { DoList } from "./Components/List/DoList";
import { Couter } from "./Components/Couter/Couter";

function App() {
  return (
    <Container>
      <DoList />
      <Calculator />
      <Couter text="Contador" />
    </Container>
  );
}
export default App;
