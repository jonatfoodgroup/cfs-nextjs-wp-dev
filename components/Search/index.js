import { useState, useEffect} from 'react';
import { Icon } from '@iconify/react';

const Search = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <>
      <form>
        <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} />
        <button type="submit">
          <Icon icon="bi:search" />
        </button>
      </form>
    </>
  )
}

export default Search;