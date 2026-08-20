import "./App.css";
import Counter from "./components/Counter";
import History from "./components/History";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center border">
        <h1 className="mb-10">CounterHistoryApp</h1>
        <Counter />
        <History />
      </div>
    </>
  );
}

export default App;
