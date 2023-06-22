import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import styles from "./search.module.css";
import { 
  Row, Col, FormControl, InputGroup, Button,
} from "react-bootstrap";

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

  useEffect(() => {
    const searchHistory = localStorage.getItem("cfs.search_history");
    setSearchHistory(searchHistory);
  }, []);
  return (
    <>
      <form className={styles.searchBox} onSubmit={(e) => e.preventDefault()}>
        <InputGroup>
          <FormControl
            type="text"
            placeholder={placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={onFocus}
            onKeyDown={onPressEnter}
          />
        </InputGroup>
        {focus && <MenuBox search={search} />}
      </form>
    </>
  );
};

const Results = ({ search }) => {
  const [type, setType] = useState(""); // ['sku', 'topic', 'inspiration'
  // check if search is a 5 digit number
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
              <p>Inspiration</p>
            </Col>
          </Row>
        </>
      )}

      {search.length >= 3 && (
        <>
          <h2>Results for {search}</h2>
          <Results search={search} />
        </>
      )}
    </div>
  );
};

export default Search;
