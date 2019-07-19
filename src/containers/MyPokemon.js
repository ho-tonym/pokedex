// import { connect } from 'react-redux'
import React, { Component } from 'react'

class MyPokemon extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="MyPokemon">
        <p>add pokemon</p>
        <p>unique id - restore saved items</p>
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon)
export default MyPokemon
