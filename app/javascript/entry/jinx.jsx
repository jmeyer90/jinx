import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from '../store/store'

document.addEventListener('DOMContentLoaded', ()=>{
  let preloadedState;

  if (window.current_user) {
    preloadedState = {
      entities: {
        users: {
          [window.current_user.id]: window.current_user
        },
        businesses:{}
      },
      session: {
        currentUserId: window.current_user.id
      },
    };
  } else {
    preloadedState = {
      entities: {
        businesses: {}
      }
    }
  }

  const store = configureStore( preloadedState );

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);
})