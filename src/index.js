import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux'
import recentPosts from './reducers'
import createPost from './actions'


const myApp = combineReducers({
  recentPosts
})

let store = createStore(myApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(createPost('I am a Post'));


ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
