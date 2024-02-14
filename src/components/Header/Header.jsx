import styles from "./header.module.css";

function Header({ children }) {
  return <p className={styles.header}>{children}</p>;
}

export default Header;
