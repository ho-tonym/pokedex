import React from 'react'

const AddButton = ({ handleSubmitForm, onePokemonData }) => (
  <form>
    <button className="add-my-pokemon-button"
      onClick={handleSubmitForm}
      type="submit"
    >
      add to my pokemon
    </button>
  </form>
)

export default AddButton
