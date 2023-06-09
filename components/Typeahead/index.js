import { useEffect, useState } from "react";

const Typeahead =  ({
  placeholder
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
    <form>
      <input type="text" placeholder={placeholder}  onChange={(e) => setValue(e.target.value)}  value={value} />
    </form>
    <TypeaheadResults />
    </>
  )
}

const TypeaheadResults = () =>  {
  return (
    <div>
      <p>Results</p>
    </div>
  )
}

export default Typeahead;