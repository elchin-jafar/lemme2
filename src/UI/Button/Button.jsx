import styles from "./button.module.css";
import { Link } from "react-router-dom";

function Button({ to, children }) {
  return (
    <Link to={to} className={styles["result-btn"]}>
      {children}
    </Link>
  );
}

export default Button;
