// import { connect } from 'react-redux'
import React, { Component } from 'react'

class MyPokemon extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="MyPokemon">
        <p>add pokemon</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pokemon:
            <input type="text" onChange={this.handleChange} />
          </label>
          <label>
            CP:
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <hr />

        <p>unique id - restore saved items</p>
        <hr />
        <p>display current pokemon</p>
      </div>
    )
  }
}

//           <input type="submit" value="Submit" />
// export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon)
export default MyPokemon
