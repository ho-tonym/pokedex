import React from 'react'

const Form = ({
  handleSubmit,
  handleOptionChange,
  selectedOption,
  myPokeInputs,
  handleChange,
  handleFocus,
  handleBlur,
  showCheckMark,
  id,
}) => (
  <div className="flex-wrap">
    <form onSubmit={handleSubmit}>
      <input className="radio"
        type="radio"
        name="rg"
        id="add-pokemon"
        checked={selectedOption === 'add-pokemon'}
        onChange={handleOptionChange}
      />
      <input className="radio"
        type="radio"
        name="rg"
        id="save-pokemon"
        checked={selectedOption === 'save-pokemon'}
        onChange={handleOptionChange}
      />
      <input className="radio"
        type="radio"
        name="rg"
        id="get-pokemon"
        checked={selectedOption === 'get-pokemon'}
        onChange={handleOptionChange}
      />

      <label htmlFor="add-pokemon">Add</label>
      <label htmlFor="save-pokemon">Save</label>
      <label htmlFor="get-pokemon">Get</label>

      <input
        id="name"
        className="input add-pokemon"
        placeholder="Name"
        value={myPokeInputs.name}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <input
        id="cp"
        className="input add-pokemon"
        placeholder="CP"
        value={myPokeInputs.cp}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <p className="input save-pokemon">
        {id === "" ? "Save your pokemon to the database for future use!"
          : 'Use this code in "Get" section to retrieve your pokemon'
        }
      </p>
      <input id="id" className="input get-pokemon" type="text" placeholder="ID" value={myPokeInputs.id} onChange={handleChange} />
      {selectedOption === 'save-pokemon' ? <p className="font-13-blue">{id}</p> : null}
      <button
        className="rounded-button blue-button"
        type="submit"
        disabled={(!showCheckMark.name || !showCheckMark.cp) && selectedOption === 'add-pokemon'}
      />
      { showCheckMark.name ? <div className="check check-name" /> : null }
      { showCheckMark.cp ? <div className="check check-cp" /> : null }
    </form>
  </div>
)

export default Form
