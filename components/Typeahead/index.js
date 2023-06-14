import { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";

const Typeahead = ({ placeholder }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      <form sx={{ width: "100%" }}>
        <FormControl
          type="text"
          placeholder={placeholder}
          className="mr-sm-2"
          value={value}
          sx={{marginBottom: '40px', display: 'block' }}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      {value.length > 0 && <button onClick={() => setValue("")}>Clear</button>}
      {value.length >= 3 && <TypeaheadResults />}
    </>
  );
};

const TypeaheadResults = ({ results }) => {
  return (
    <div>
      <p>Results</p>
    </div>
  );
};

export default Typeahead;
