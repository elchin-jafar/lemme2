import styles from "./searchResultList.module.css";
import SearchResult from "../SearchResult/SearchResult";

function SearchResultList({ results }) {
  return (
    <div className={styles["results-list"]}>
      {results.map((result) => {
        return (
          <SearchResult res={result.name} id={result.id} key={result.id} />
        );
      })}
    </div>
  );
}

export default SearchResultList;
