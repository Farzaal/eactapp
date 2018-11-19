import React from 'react';
import { connect } from 'react-redux';
import { removePost } from '../actions/ActionCreator';

export class Post extends React.Component {

    delPost = (e, id) => {
        this.props.del(id);
    }

    render() {
        return (
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <td>Post Id</td>
                        <td>Post Title</td>
                        <td>Post Body</td>
                        <td>Del</td>
                    </tr>
                </thead>
                <tbody>
                {this.props.posts.map( (post, i) => {
                        return(
                            <tr key={i}>
                                <td>{ post.id }</td>
                                <td>{ post.postTitle }</td>
                                <td>{ post.postBody }</td>
                                <td><button className="btn btn-danger"
                                onClick={(e) => this.delPost(e, post.id)} >Del</button></td>
                            </tr>
                        );       
                    })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        posts : state.posts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        del : (id) => { dispatch(removePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);