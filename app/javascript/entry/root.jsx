import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store })=> {
  return(
    <HashRouter>
      <h1>Root Component</h1>
      <Provider store={ store }>
        <App className="app" />
      </Provider>
    </HashRouter>
  )
};

export default Root;