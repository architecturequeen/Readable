import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import { Route } from 'react-router';
// import { Provider } from 'react-redux';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createPost from './actions';

class CreatePost extends React.Component {
	constructor(props) {
		super(props);
    	this.state = {title: '', body: '',  category: ''};
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleSubmit() {
  		console.log(this.state);
  	}

  	handleChange(event) {
		console.log("on change called")
		let val = event.target.value;
		let name = event.target.name;
		this.setState({[name]: event.target.value});
	}

	render() { 
		return (
			<div>  
				<Link to="/" >Back To Main Page</Link>
				<h3> Create A Post <p> Logged in as XXX </p> </h3>
				<form>
					<p>Title: </p>
					<input type="text" name="title" value={this.state.title} onChange={this.handleChange}
					required placeholder="Enter Title" />
					<p>Body:</p>  
					<textarea type="text" rows="8" cols="50" name="body" value={this.state.body} 
					onChange={this.handleChange} placeholder="Enter Post Body"/> 
					<p>Category: </p>
					<span>React</span>
					<input type="radio" name="category" value="react" 
					onChange={this.handleChange} checked={this.state.category === 'react'} />
					<span> Redux</span>
					<input type="radio" name="category" value="redux" 
					onChange={this.handleChange} checked={this.state.category === 'redux'}/>
					<span> Udacity</span>
					<input type="radio" name="category"  onChange={this.handleChange} 
					value="udacity" checked={this.state.category === 'udacity'}/>
				</form>
				<br/>
	  			<div>
						<button className="btn--blue" onClick={this.handleSubmit}>Submit</button>
					
				</div>
	  			<button onClick={() => { 
	  				this.handleSubmit();
	  				this.props.dispatch(createPost('New postttt'));
	  			} } > Create Post 
	    		</button>
	    	</div>);
}

}

CreatePost = connect()(CreatePost);

export default CreatePost;
