import React from 'react';

const Counter = ({ onChange, handlePlaceholder, handleClearText }) => (
  <div className="Search">
    <input onChange={onChange}
      type="text"
      name="input"
      placeholder="enter pokemon"
      id="searchTextField"
      onBlur={handlePlaceholder}
      onFocus={handleClearText}
    />
  </div>
);
export default Counter;
