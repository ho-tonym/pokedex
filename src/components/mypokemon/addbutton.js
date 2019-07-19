import React from 'react'

const AddButton = ({ handleSubmitForm, children }) => (
  <form>
    <button className="submitButton" onClick={handleSubmitForm} type="submit" name="pokemon[idname]" id={children}>+</button>
  </form>
)

export default AddButton
