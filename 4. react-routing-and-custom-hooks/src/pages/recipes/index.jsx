import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";

//uselocalstorage
//useCounter
//useSessionStroag
//useId
//useOutsideClick

function ReceipeList() {
  const location = useLocation();

  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  const windowSize = useWindowResize();

  if (loading) return <h1>Fetching recipes! Please wait</h1>;

  return (
    <div>
      <h1 style={{ color: windowSize.width < 768 ? "red" : "black" }}>
        Recipe list page
      </h1>
      <h3>
        Current window width is {windowSize.width} and current height is{" "}
        {windowSize.height}
      </h3>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes.map((recipeItem) => (
              <div>
                <img src={recipeItem?.image} />
                <label>{recipeItem?.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default ReceipeList;
