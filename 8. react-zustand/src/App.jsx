import "./App.css";
import CounterValue from "./counter-app/counter-value";
import ManageCounter from "./counter-app/mange-counter";
import Products from "./products";

function App() {
  return (
    <div>
      <h1>React with zustand</h1>
      <ManageCounter />
      <CounterValue />
      <Products />
    </div>
  );
}

export default App;
