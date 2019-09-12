import React, {Component} from 'react';
import { Jumbotron } from 'reactstrap';

export default class Error404 extends Component {
    render() {
        return (
            <div style={{marginTop: 20}}>
                <Jumbotron>
                <h1 className="display-3">error 404</h1>
                    <hr className="my-2" />
                </Jumbotron>
            </div>
        )
    }
}