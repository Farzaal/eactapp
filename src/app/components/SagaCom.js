import React from 'react';

export class SagaCom extends React.Component {

    sagaDemo = (e) => {
        alert("Click Event");
    }

    render() {
        return (
            <div className="coantainer">
            <div className="card-body">
                <button type="button" class="btn btn-primary btn-block"
                onClick={ this.sagaDemo } >Saga Demo</button>
            </div>
            <div className="spacer"></div>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <td>User Id</td>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Completed</td>
                        <td>Del</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            </div>
        )
    }
}

export default SagaCom;