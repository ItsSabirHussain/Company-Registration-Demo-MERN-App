import React, {Component} from 'react';
import axios from 'axios';
import { Jumbotron, Col, Card, CardTitle, CardText } from 'reactstrap';

export default class Registercompany extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
        this.props.history.push('/userdashboard/registercompany/payment')
    }

    render() {
        return (
            <div class='container'>
                <Jumbotron>
                    <h1 className="display-4">Company Registration</h1>
                        <p className="lead">Provides below information to submit application for company registration.</p>
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
                                        <label>Company Name:</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_description}
                                                onChange={this.onChangeTodoDescription}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>City:</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_responsible}
                                                onChange={this.onChangeTodoResponsible}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Country: </label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_responsible}
                                                onChange={this.onChangeTodoResponsible}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_responsible}
                                                onChange={this.onChangeTodoResponsible}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_responsible}
                                                onChange={this.onChangeTodoResponsible}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>CEO</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_responsible}
                                                onChange={this.onChangeTodoResponsible}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Type</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_responsible}
                                                onChange={this.onChangeTodoResponsible}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Register" className="btn btn-primary" />
                                    </div>
                                </form>
                                </CardText>
                        </Card>                        
                    </Col>
            </div>
        )
    }
}