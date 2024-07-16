import { useState } from "react";
import Child from "./child";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={handleClick}>Click</button>
      <Child count={count} />
    </div>
  );
}

export default Counter;
