import React, {Component} from 'react';
import axios from 'axios';
import { Jumbotron, Col, Card, CardTitle, CardText } from 'reactstrap';
import {IoIosAlbums} from 'react-icons/io';

export default class Usersubmitdocs extends Component {
    constructor(props) {
        super(props);

        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeKey = this.onChangeKey.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            FullName: '',
            City: '',
            Country: '',
            ID: '',
            Key:''
        }
    }

    onChangeID(e) {
        this.setState({
            ID: e.target.value
        });
    }

    onChangeKey(e) {
        this.setState({
            Key: e.target.value
        });
    }

    onChangeFullName(e) {
        this.setState({
            FullName: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            City: e.target.value
        });
    }

    onChangeCountry(e) {
        this.setState({
            Country: e.target.value
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
        this.props.history.push('/userdashboard/usersubmitdocs/docsucsub')
    }

    render() {
        return (
            <div class='container'>
                <Jumbotron>
                    <h1 className="display-4">Submit Documents</h1>
                        <p className="lead">Provides below information to be registered yourself.</p>
                        <hr className="my-2" />
                        <p className="lead">
                        </p>
                    </Jumbotron>
                    <Col sm='12'>
                        <Card body>
                            <CardTitle><b><h3><IoIosAlbums/> Document Information</h3></b></CardTitle>
                                <CardText> 
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Header:</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_description}
                                                onChange={this.onChangeTodoDescription}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Description:</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.todo_responsible}
                                                onChange={this.onChangeTodoResponsible}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <input type="file" className="btn btn-secondary" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Submit" className="btn btn-primary" />
                                    </div>
                                </form>
                                </CardText>
                        </Card>                        
                    </Col>
            </div>
        )
    }
}