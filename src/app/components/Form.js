import React from 'react';
import { connect } from "react-redux";
import { addArticle } from "../actions/ActionCreator";

export class Form extends React.Component {

    state = {   
        id : Math.random(),
        title : '',
        body : ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addArticle(this.state);
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
                <div className="card-header bg-danger text-white">Add Article</div>
                <div className="card-body">
                    <form onSubmit={ this.handleSubmit } >
                        <div className="form-group">
                            <label htmlFor="email">Article Title :</label>
                            <input type="text" className="form-control" id="title" 
                            name="title" onChange={ this.handleChange } />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Article :</label>
                            <input type="text" className="form-control" id="body" 
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
        addArticle : (article) => { dispatch(addArticle(article)) }
    }; 
}

export default connect(null, mapDispatchToProps)(Form);
