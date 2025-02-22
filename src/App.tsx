import { ButtonLarge } from "./components/ButtonLarge";
import "./App.css";
import { CardQuestion } from "./components/CardQuestion";

function App() {
  return (
    <>
      <main className="flex flex-col gap-y-4 max-w-[768px] min-h-screen justify-center bg-neutral-300">
        <h1>Components</h1>
        <ButtonLarge />
        <CardQuestion />
      </main>
    </>
  );
}

export default App;
