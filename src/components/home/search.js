import React from 'react';
import SearchIcon from '../../images/searchicon.svg';

// Search bar - for filtering the list of pokemon.
const Search = ({
  onChange,
  handleFocus,
  handleBlur,
  searchFocused,
  searchString,
}) => (
  <div className={`Search ${searchFocused ? "search-focus" : "search-blur"}`}>
    <input id="search-input"
      onChange={onChange}
      type="text"
      name="input"
      value={searchString}
      placeholder=""
      onBlur={handleBlur}
      onFocus={handleFocus}

    />
    <button type="button">
      <img src={SearchIcon} alt="search-icon" />
    </button>
  </div>
);
// event.target.parentNode.style.borderColor = "#fff";
// event.target.placeholder = "";

// event.target.placeholder= "enter pokemon"
export default Search;
