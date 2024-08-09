import styles from "./product-item.module.css";
import { useState } from "react";

function ButtonComponent() {
  function handleToggle() {
    setFlag(!flag);
  }
  const [flag, setFlag] = useState(false);
  return (
    <button
      className={flag ? styles.buttonStyle : styles.buttonStyle2}
      onClick={handleToggle}
    >
      Click to see changes
    </button>
  );
}

function ProductItem({ singleProductItem, key }) {
  return (
    <div
      style={{ padding: "20px", border: "2px solid red", marginBottom: "12px" }}
      key={key}
    >
      <p className={styles.productTitle}>{singleProductItem}</p>
      <ButtonComponent />
    </div>
  );
}

export default ProductItem;
