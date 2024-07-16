import { useSelector } from "react-redux";

function CounterValue() {
  const state = useSelector((state) => state);
  const { countValue } = state;

  return <p>Counter value is {countValue}</p>;
}

export default CounterValue;
