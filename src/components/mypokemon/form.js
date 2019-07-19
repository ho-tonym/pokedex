import React from 'react'

const Form = ({handleSubmitForm, children}) => (

<form>
  <label>One
    <input type="radio" checked="checked" name="radio" value=""/>
    <span class="checkmark"></span>
  </label>
  <label>Two
    <input type="radio" name="radio"/>
    <span class="checkmark"></span>
  </label>
  <label>Three
    <input type="radio" name="radio"/>
    <span class="checkmark"></span>
  </label>
  <label>Four
    <input type="radio" name="radio"/>
    <span class="checkmark"></span>
  </label>


</form>
)
export default Form
