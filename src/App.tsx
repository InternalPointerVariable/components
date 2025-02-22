import { ButtonLarge } from "./components/ButtonLarge";
import "./App.css";
import { CardQuestion } from "./components/CardQuestion";
import InputPlaceholder from "./components/InputPlaceholder";
import React from "react";

function App() {
  const [name, setName] = React.useState("");
  return (
    <>
      <main className="flex flex-col gap-y-4 max-w-[768px] min-h-screen justify-center bg-neutral-300">
        <h1>Components</h1>
        <ButtonLarge />
        <CardQuestion />

        <InputPlaceholder
          label="Full Name"
          iconSrc="Iconly/Light-Outline/Profile.png"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </main>
    </>
  );
}

export default App;
