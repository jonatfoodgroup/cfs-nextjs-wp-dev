import { useState, useEffect} from 'react';
import { FormControl } from 'react-bootstrap';

const Search = () => {
  return (
    <FormControl
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon1"
    />
  )
}

export default Search;