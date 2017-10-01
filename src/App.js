import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Link} from 'react-router-dom'
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createPost from './actions';
import './styles/surface/surface_styles.css';



const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
    <div>
        <Route exact path="/" component={Home} /> 
        <Route path="/createpost" component={CreatePost} />
    </div>
    </BrowserRouter>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
};

const Home = () => (<b> This is a Home Page. <Link to="/createpost" > Create a Post</Link></b>);

let CreatePost = ({dispatch}) => (<p> Fancy creating a blog post? Do it here! 
  <Link to="/" >Back To Main Page</Link>
  <button onClick={() => {
    dispatch(createPost('New postttt'));
  } } > 
    Create Post 
    </button></p>);

CreatePost = connect()(CreatePost)

export default App;
