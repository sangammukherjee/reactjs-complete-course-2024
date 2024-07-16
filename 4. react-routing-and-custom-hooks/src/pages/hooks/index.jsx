import { useEffect, useRef } from "react";

function Hooks() {
  const countValue = useRef(0);
  const divElementRef = useRef();
  const inputRefElement = useRef();

  function handleClick() {
    countValue.current++;
    console.log(countValue.current);
  }

  useEffect(() => {
    const getDivReference = divElementRef.current;
    inputRefElement.current.focus();

    getDivReference.style.color = "red";

    setTimeout(() => {
      getDivReference.style.color = "green";

      setTimeout(() => {
        getDivReference.style.color = "blue";
      }, 1000);
    }, 2000);

    console.log(getDivReference);
  }, []);

  return (
    <div>
      <h1>Use ref, use callback and use memo hook</h1>
      <button onClick={handleClick}>Click me</button>
      <div ref={divElementRef}>Some random text</div>
      <input name="name" placeholder="Enter your name" ref={inputRefElement} />
    </div>
  );
}

export default Hooks;
