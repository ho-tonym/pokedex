import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/main.min.css'
import './style/loader.min.css'
import './style/selectedPokemon.min.css'
import './style/myPokemon.min.css'
import './style/navbar.min.css'
import './style/typeButton.min.css'
import './style/goo.min.css'
import {Provider} from 'react-redux';
import store from './redux/store/store'

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
