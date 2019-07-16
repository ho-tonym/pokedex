import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import App from './components/App';
import './style/containers/HomePage.min.css';
import './style/containers/navbar.min.css';
import './style/containers/general.min.css';

import './style/containers/Pokemon.min.css';
import './style/components/loader.min.css';
import './style/components/typeButton.min.css';

import './style/myPokemon.min.css';
import './style/goo.min.css';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
