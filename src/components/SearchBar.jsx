import React, { useContext, useEffect, useState } from 'react';
import FetchContext from '../context/FetchContext';

function SearchBar() {
  const [searchParams, setSearchParams] = useState({
    searchInput: '',
    typeSearch: '',
  });
  const { requestFetch } = useContext(FetchContext);

  useEffect(() => {
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  const fetchSubmit = () => {
    requestFetch(searchParams);
  };

  return (
    <div>
      <input
        type="text"
        name="searchInput"
        data-testid="search-input"
        onChange={ handleChange }
        value={ searchParams.searchInput }
      />
      <br />
      <label htmlFor="search-ingredient">
        <input
          id="search-ingredient"
          data-testid="ingredient-search-radio"
          type="radio"
          name="typeSearch"
          value="ingredient"
          onChange={ handleChange }
        />
        Ingredient
      </label>

      <label htmlFor="search-name">
        <input
          id="search-name"
          data-testid="name-search-radio"
          type="radio"
          name="typeSearch"
          value="name"
          onChange={ handleChange }
        />
        Name
      </label>

      <label htmlFor="search-name">
        <input
          id="search-name"
          data-testid="first-letter-search-radio"
          type="radio"
          name="typeSearch"
          value="first letter"
          onChange={ handleChange }
        />
        First letter
      </label>
      <br />
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ fetchSubmit }
      >
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;