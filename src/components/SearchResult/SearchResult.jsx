import styles from "./searchResult.module.css";

import { Link } from "react-router-dom";

function SearchResult({ res, id }) {
  return (
    <Link to={`productMenu/${id}`} className={styles["search-result"]}>
      {res}
    </Link>
  );
}

export default SearchResult;
