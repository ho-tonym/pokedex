import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleDiv } from '../redux/actions/pokemonActions'

class Faq extends Component {
  handleonClick = (event) => {
    const { toggleDiv } = this.props
    const { id } = event.currentTarget
    toggleDiv(id)
  }

  render() {
    const { collapseDivs } = this.props
    return (
      <div className="Faq">
        <h1>FAQ</h1>
        <button
          id="collapse-1"
          type="button"
          className="collapsible"
          onClick={this.handleonClick}
        >
          How To Use: Home
          <span />
        </button>
        <div className={`content ${collapseDivs["collapse-1"] ? "display-block" : ""}`}>
          <p>
            On loadup, we query for API for 20 pokemon. You can scroll down to load 20 more.
            <br />
            <br />
            In search located in the navbar, you can find a specific pokemon that you want more information on.
            <br />
            <br />
            Click on that pokemon to make a request to the API for more information.
            There is a bot navbar that contains the information of the pokemon you clicked on. If you click on it, it expands to show more information on the type weaknesses/strengths.
          </p>
        </div>
        <button
          id="collapse-2"
          type="button"
          className="collapsible"
          onClick={this.handleonClick}
        >
          How To Use: My Pokemon
        </button>
        <div className={`content ${collapseDivs["collapse-2"] ? "display-block" : ""}`}>
          <p>
            <b>There are 3 tabs here:</b>
            <br />
            <br />
            <b>Add:</b>
            <br />
            Here, we can add pokemon and create a list of your pokemon by adding a name and combat power. If no pokemon match the name entered, we will make another request to the api to get the rest of the pokemon.
            The CP has to be 0 &lt CP &lt 9999.
            <br />
            <br />
            <b>Save:</b>
            <br />
            It would be pretty inconvenient to have to add these pokemon everytime to use the app, so we can save the pokemon to the mongo server hosted on MongoDB Atlas. When it is finished saving to the DB, it will return a key that will be can be used to access the all the pokemon saved at a later time in the Get tab. I opted for a key based apporach rather than user/pw because it is more convenient.
            <br />
            <br />
            <b>Get:</b>
            <br />
            Enter a key here to retrieve data from the backend server and load up previously saved pokemon.
          </p>
        </div>
        <button
          id="collapse-3"
          type="button"
          className="collapsible"
          onClick={this.handleonClick}
        >
          Nerd Stuff - How it the website works
        </button>
        <div className={`content ${collapseDivs["collapse-3"] ? "display-block" : ""}`}>
          <p><b>Built With</b></p>
          <p>
            <b>REACT</b>
             - The web framework used
            <br />
            <b>MongoDB</b>
             - Database used
            <br />
            <b>Express.js</b>
             - Backend server that handles requests from REACT and responses from Mongo.
            <br />
            <b>Node.js</b>
             - React, express use node
            <br />
            <b>Redux</b>
             - State management
            <br />
            <b>redux-thunk</b>
             - for dispatching actions
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { collapseDivs } = state.pokemon
  return{
    collapseDivs,
  }
}

const mapDispatchToProps = {
  toggleDiv,
}

export default connect(mapStateToProps, mapDispatchToProps)(Faq)
