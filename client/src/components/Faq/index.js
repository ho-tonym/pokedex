import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleDiv } from '../../redux/actions/UIActions'
import './faq.min.css';

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
          <p>On loadup, we query for API for 20 pokemon. You can scroll down to load 20 more. In search located in the navbar, you can find a specific pokemon that you want more information on. Click on that pokemon to make a request to the API for more information. There is a bot navbar that contains the information of the pokemon you clicked on. If you click on it, it expands to show more information on the type weaknesses/strengths.</p>
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
          <p>Here, we can add pokemon and create a list of your pokemon by adding a name and combat power. If no pokemon match the name entered, we will make another request to the api to get the rest of the pokemon. The CP has to be 0 &larr; CP &larr; 9999.</p>
            <p>It woul d be pretty inconvenient to have to add these pokemon every time to use the app, so we can save the pokemon to the mongo server hosted on MongoDB Atlas. When it is finished saving to the DB, it will return a key that will be can be used to access the all the pokemon saved at a later time in the Get tab. I opted for a key based approach rather than user/pw because it is more convenient.</p>
            <p>Enter a key here to retrieve data from the backend server and load up previously saved pokemon.</p>
        </div>
        <button
          id="collapse-3"
          type="button"
          className="collapsible"
          onClick={this.handleonClick}
        >
          Built With:
        </button>
        <div className={`content ${collapseDivs["collapse-3"] ? "display-block" : ""}`}>
          <p>React</p>
          <p>MongoDB/Mongoose</p>
          <p>Express.js</p>
          <p>Node.js</p>
          <p>Redux</p>
          <p>Heroku</p>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { collapseDivs } = state.UI
  return{
    collapseDivs,
  }
}

const mapDispatchToProps = {
  toggleDiv,
}

export default connect(mapStateToProps, mapDispatchToProps)(Faq)
