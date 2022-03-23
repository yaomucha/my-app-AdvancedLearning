import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import reducer from './reducer/index'
import middleware from './middleware/index'

import createSagaMiddleware from 'redux-saga'
import 'antd/dist/antd.css';
import { BrowserRouter } from "react-router-dom";




let sagaMiddleware = createSagaMiddleware()
window.sagaMiddleware = sagaMiddleware

let store = configureStore({
  reducer: reducer,
  middleware: [sagaMiddleware, ({ getState }) => (next) => (action) => {
    console.log('will dispatch', getState())
    next(action)
    console.log('after dispatch', getState())
  }
  ]
})
sagaMiddleware.run(middleware)

window.store = store

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

reportWebVitals();
