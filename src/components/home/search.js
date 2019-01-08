import React from 'react'
import SearchIcon from '../../images/searchicon.svg'

const Search = ({onChange, handlePlaceholder, handleClearText}) =>
  <div className="Search">
    <img src={SearchIcon} alt="search-icon"/>
    <input onChange={onChange} type="text" name="input" placeholder="enter pokemon"
      onBlur={handlePlaceholder} onFocus={handleClearText}/>
  </div>
export default Search
