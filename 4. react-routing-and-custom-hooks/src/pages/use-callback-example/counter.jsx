import { memo } from "react";

function Counter({ countValue, onClick }) {
  console.log("this is getting rendered", countValue, onClick);
  return (
    <div>
      <p>{countValue}</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default memo(Counter);
