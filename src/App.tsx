import { ButtonLarge } from "./components/ButtonLarge";
import "./App.css";
import { CardQuestion } from "./components/CardQuestion";

function App() {
  return (
    <>
      <main className="">
        <div className="container mx-auto ">
          <h1>Components</h1>
          <ButtonLarge />
          <CardQuestion />
        </div>
      </main>
    </>
  );
}

export default App;
