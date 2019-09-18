export function handleOptionChange(event) {
  const { updateSelectedOption } = this.props
  updateSelectedOption(event.target.id)
}

export function handleFocus(event) {
  const { updateMyPokeInputsState } = this.props
  updateMyPokeInputsState(event.target.id, true)
}

export function handleBlur(event) {
  const { updateMyPokeInputsState } = this.props
  updateMyPokeInputsState(event.target.id, false)
}
