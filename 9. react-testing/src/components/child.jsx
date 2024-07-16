import { useState } from "react";

function Child({ count }) {
  const [theme, setTheme] = useState(false);

  return (
    <div>
      <p data-testid="child-count-value">{count}</p>
      <button onClick={() => setTheme(!theme)} data-testid="toggle-button">
        Toggle
      </button>
      <h1 data-testid="toggle-text">{theme ? "true" : "false"}</h1>
    </div>
  );
}

export default Child;
