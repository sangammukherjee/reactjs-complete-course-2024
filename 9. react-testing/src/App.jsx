import "./App.css";
import ApiCallTest from "./components/api-testing";
import Counter from "./components/counter";
import HelloWorld from "./components/helloWorld";
import ThemeToggleButton from "./context-test/button";
import ThemeContent from "./context-test/theme";

function App() {
  return (
    <div>
      {/* <h1>React Unit Testing Crash Course</h1>
      <HelloWorld />
      <Counter />
      <ApiCallTest /> */}
      <ThemeToggleButton />
      <ThemeContent />
    </div>
  );
}

export default App;
