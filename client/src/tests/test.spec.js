import React from 'react'
import ReactDOM from 'react-dom';
import App from '../App';
import { create } from "react-test-renderer"

function Button(props) {
  return <button>Nothing to do for now</button>;
}

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />)
    expect(button.toJSON()).toMatchSnapshot()
  })
})
