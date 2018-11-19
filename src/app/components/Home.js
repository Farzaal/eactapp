import React from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions/ActionCreator";

export class Home extends React.Component {

    delArticle = (e, id) => {
        console.log(id);
        this.props.removeArticle(id);  
    }

    render() {
        console.log("In a Render Component");
        return (
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <td>ID</td>
                        <td>Article Title</td>
                        <td>Article Body</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.articles.map( (article, i) => {
                        return(
                            <tr key={i}>
                                <td>{ article.id }</td>
                                <td>{ article.title }</td>
                                <td>{ article.body }</td>
                                <td><button className="btn btn-info" 
                                onClick = { (e) => this.delArticle(e, article.id) } >Delete</button></td>
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
        articles : state.articles,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeArticle : (id) => { dispatch(removeArticle(id)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
