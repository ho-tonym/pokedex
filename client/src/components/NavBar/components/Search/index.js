import React, { Component } from 'react'
import SearchIcon from '../../../../assets/images/searchicon.svg'

class Search extends Component {
  handleImgFocus = () => {
    this.input.focus()
  }

  render() {
    const {
      onChange,
      searchFocused,
      searchString,
      handleBlur,
      handleFocus,
    } = this.props
    return(
      <div className={`Search ${searchFocused ? "search-focus" : "search-blur"}`}>
        <input id="search-input"
          ref={(input) => { this.input = input }}
          onChange={onChange}
          type="text"
          name="input"
          value={searchString}
          placeholder=""
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <button type="button" onClick={this.handleImgFocus}>
          <img src={SearchIcon} alt="search-icon" />
        </button>
      </div>
    )
  }
}

export default Search
