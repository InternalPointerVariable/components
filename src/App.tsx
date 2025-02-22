import { useState } from "react";
import { ButtonLarge } from "./components/ButtonLarge"
import "./App.css";
import { CardQuestion } from "./components/CardQuestion";

function App() {
  return (
    <>
      <h1>Components</h1>
      <ButtonLarge />
      <CardQuestion />

    </>
  );
}

export default App;
