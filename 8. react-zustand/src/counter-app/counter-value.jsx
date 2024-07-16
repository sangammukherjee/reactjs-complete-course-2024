import useCounter from "../store/use-counter";

function CounterValue() {
  const count = useCounter((state) => state.count);

  return <div>Counter value is {count}</div>;
}

export default CounterValue;
