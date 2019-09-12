import React, {Component} from 'react';
import axios from 'axios';
import { Jumbotron, Col, Card, CardTitle, CardText } from 'reactstrap';

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    
    }
    
    render() {
        return (
            <div class='container'>
                <Jumbotron>
                    <h1 className="display-4">Payment to proceed.</h1>
                        <p className="lead">Provides your card's information below.</p>
                        <hr className="my-2" />
                        <p className="lead">
                        </p>
                    </Jumbotron>
                    <Col sm='12'>
                        <Card body>
                            <CardTitle><b><h3>Provides below information</h3></b></CardTitle>
                                <CardText> 
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Card Number:</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_description}
                                                onChange={this.onChangeTodoDescription}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Name on card:</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_responsible}
                                                onChange={this.onChangeTodoResponsible}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Expiration date: </label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_responsible}
                                                onChange={this.onChangeTodoResponsible}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>CVV</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_responsible}
                                                onChange={this.onChangeTodoResponsible}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Payment" className="btn btn-primary" />
                                    </div>
                                </form>
                                </CardText>
                        </Card>                        
                    </Col>
            </div>
        )
    }
}