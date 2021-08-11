import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { StoreContextProvider} from './components/storeContext.js'

ReactDOM.render(
  <StoreContextProvider>
    <Router>
      <App />
    </Router>
  </StoreContextProvider>,
  document.getElementById('root')
);