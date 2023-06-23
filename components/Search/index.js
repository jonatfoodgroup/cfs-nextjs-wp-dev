import { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { Row, Col, FormControl, InputGroup, Button } from "react-bootstrap";
import Link from "next/link";
const Search = ({ placeholder = "Type a phrase or keyword" }) => {
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState([]); // [
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const onPressEnter = (e) => {
    if (e.key === "Enter") {
    }
  };

  const onClickOutside = (e) => {
    setFocus(false);
  };

  useEffect(() => {
    const searchHistory = localStorage.getItem("cfs.search_history");
    setSearchHistory(searchHistory);
  }, []);
  return (
    <>
      <form className={styles.searchBox} onSubmit={(e) => e.preventDefault()}>
        <InputGroup>
          <FormControl
          className={styles.searchInput}
            type="text"
            placeholder={placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={onFocus}
            onKeyDown={onPressEnter}
            onBlur={onClickOutside}
          />
        </InputGroup>
        {focus && <MenuBox search={search} />}
      </form>
    </>
  );
};

const Results = ({ search }) => {
  const [type, setType] = useState("");

  // Fuzzy search that breakdown the typed string and compares it to the includes of each and if partial match, then return the type
  const fuzzySearch = (search) => {
    // Get the letters of the search string
    const letters = search.split("");
  };

  useEffect(() => {
    if (search.length === 5 && !isNaN(search)) {
      setType("SKU");
    } else if ((search.length >= 3) & search.includes("Tomato")) {
      setType("Ingredient");
    } else if (
      (search.length >= 3) & search.includes("Guide") ||
      search.includes("How to")
    ) {
      setType("Inspiration");
    } else if ((search.length >= 3) & search.includes("Recipe")) {
      setType("Recipe");
    } else {
      setType("Topic");
    }
  }, [search]);
  return (
    <>
      {/* Loading indicator */}
      <p>Loading results ...</p>

      {/* Results */}
      {type}
    </>
  );
};

const MenuBox = ({ search }) => {
  return (
    <div className={styles.menuBox}>
      {search.length < 3 && (
        <>
          <Row>
            <Col>
              <p>Inspiration & Ideas</p>
              <hr />
              <Row>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <p>Recently Searched</p>
                  <ul>
                    <li>Tomato</li>
                    <li>Tomato Sauce</li>
                    <li>Tomato Paste</li>
                  </ul>
                </Col>
                <Col>
                  <p>Recently Viewed</p>
                  <ul>
                    <li>
                      <Link href="/inspiration/recipes/12345">
                        Tomato Sauce
                      </Link>
                    </li>
                    <li>
                      <Link href="/inspiration/recipes/12345">
                        Tomato Paste
                      </Link>
                    </li>
                    <li>
                      <Link href="/inspiration/recipes/12345">Tomato</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      )}

      {search.length >= 3 && (
        <>
          <p>Results for {search}</p>
          <Results search={search} />
        </>
      )}
    </div>
  );
};

export default Search;
