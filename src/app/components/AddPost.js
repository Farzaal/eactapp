import React from 'react';
import { connect } from "react-redux";
import { addPosts } from "../actions/ActionCreator";

export class AddPost extends React.Component {

    state = {   
        id : Math.random(),
        postTitle : '',
        postBody : ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addPosts(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render() {
        return(
            <div className="container">
            <div className="card">
                <div className="card-header bg-danger text-white">Add Posts</div>
                <div className="card-body">
                    <form onSubmit={ this.handleSubmit } >
                        <div className="form-group">
                            <label htmlFor="email">Post Title :</label>
                            <input type="text" className="form-control" id="postTitle" 
                            name="title" onChange={ this.handleChange } />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Post :</label>
                            <input type="text" className="form-control" id="postBody" 
                            name="body" onChange={ this.handleChange } />
                        </div>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPosts : (post) => { dispatch(addPosts(post)) }
    }; 
}

export default connect(null, mapDispatchToProps)(AddPost);
