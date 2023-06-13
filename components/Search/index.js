import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import styles from "./search.module.css";

const Search = ({ placeholder = "Type a phrase of keyword" }) => {
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState([]) // [
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
    setSearchHistory(searchHistory)
  }, [])
  return (
    <>
      <form className={styles.searchBox} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={onFocus}
          onBlur={() => setFocus(false)}
          onKeyDown={onPressEnter}
        />
        <button type="submit" disabled={search.length < 3}>
          <Icon icon="bi:search" />
        </button>
        {focus && <MenuBox search={search} />}
      </form>
    </>
  );
};

const Results = ({
  search
}) => {
  const [type, setType] = useState('') // ['sku', 'topic', 'inspiration'
  // check if search is a 5 digit number
  useEffect(() => {
    if (search.length === 5 && !isNaN(search)) {
      setType('SKU')
    } else if (search.length >= 3 & search.includes('Tomato')) {
      setType('Ingredient')
    } else if (search.length >= 3 & search.includes('Guide') || search.includes('How to')) {
      setType('Inspiration')
    } else if (search.length >= 3 & search.includes('Recipe')) {
      setType('Recipe')
    } else {
      setType('Topic')
    }
  }, [search])
  return (
    <>
      <h3>Type: {type}</h3>
      <ul>
        <li>Result 1</li>
        <li>Result 2</li>
        <li>Result 3</li>
      </ul>
    </>
  );
};

const Topics = () => {
  return (
    <>
      <h2>Topics</h2>
      <ul>
        <li>Topic 1</li>
        <li>Topic 2</li>
        <li>Topic 3</li>
      </ul>
    </>
  );
};

const Inspiration = () => {
  return (
    <>
    <h2>Inspiration</h2>
      <ul>
        <li>Inspiration 1</li>
        <li>Inspiration 2</li>
        <li>Inspiration 3</li>
      </ul>
    </>
  );
};

const Trending = () => {
  return (
    <>
      <h2>Trending</h2>
      <ul>
        <li>Trending 1</li>
        <li>Trending 2</li>
        <li>Trending 3</li>
      </ul>
    </>
  );
};

const RecentSearch = () => {
  return (
    <>
      <h2>RecentSearch</h2>
      <ul>
        <li>RecentSearch 1</li>
        <li>RecentSearch 2</li>
        <li>RecentSearch 3</li>
      </ul>
    </>
  );
};

const RecentlyViewed = () => {
  return (
    <>
      <h2>RecentlyViewed</h2>
      <ul>
        <li>RecentlyViewed 1</li>
        <li>RecentlyViewed 2</li>
        <li>RecentlyViewed 3</li>
      </ul>
    </>
  );
};

const Products = () => {
  return (
    <>
      <h2>Products</h2>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </>
  );
};

const Recipes = () => {
  return (
    <>
      <h2>Recipes</h2>
      <ul>
        <li>Recipe 1</li>
        <li>Recipe 2</li>
        <li>Recipe 3</li>
      </ul>
    </>
  );
};

const RelatedTopics = () => {
  return (
    <>
      <h2>RelatedTopics</h2>
      <ul>
        <li>RelatedTopics 1</li>
        <li>RelatedTopics 2</li>
        <li>RelatedTopics 3</li>
      </ul>
    </>
  );
};

const RelatedProducts = () => {
  return (
    <>
      <h2>RelatedProducts</h2>
      <ul>
        <li>RelatedProducts 1</li>
        <li>RelatedProducts 2</li>
        <li>RelatedProducts 3</li>
      </ul>
    </>
  );
};

const MenuBox = ({ search }) => {
  return (
      <div className={styles.menuBox}>
        {search.length < 3 && (
          <>
            <RecentSearch />
            <Inspiration />
            <RecentlyViewed />
            <Trending />
            <Topics />
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
