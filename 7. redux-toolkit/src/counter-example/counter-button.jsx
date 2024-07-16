import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../store/slices/counter";

function CounterButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      handleIncreaseCountAction({
        id: 1,
        name: "sangam",
      })
    );
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }}
    >
      Increase Count
    </button>
  );
}

export default CounterButton;
