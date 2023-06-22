import { useEffect, useState } from "react";
import { FormControl, Row, Col, Button } from "react-bootstrap";
import styles from "./Typeahead.module.css";

const Typeahead = ({ placeholder, items = [] }) => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState(items);

  // filter results
  useEffect(() => {
    if (value.length >= 1) {
      console.log("searching for", value);
      const results = items.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      setResults(results);
    }
  }, [value]);
  return (
    <>
      <form sx={{ width: "100%" }}>
        <FormControl
          type="text"
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      {value.length > 0 && <button onClick={() => setValue("")}>Clear</button>}
      {value.length >= 3 && <TypeaheadResults results={results} />}
    </>
  );
};

const TypeaheadResults = ({ results }) => {
  return (
    <div style={{ border: "1px solid #ccc" }}>
      <p>Results</p>
      {results.map((result, index) => {
        return (
          <Row key={index}>
            <Col>
              <Button
                key={index}
                variant="outline-secondary"
                style={{ margin: 5 }}
              >
                {result.name}
              </Button>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Typeahead;
