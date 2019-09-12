import React, {Component} from 'react';
import axios from 'axios';
import { Jumbotron, Col, Card, CardTitle, CardText } from 'reactstrap';
import {registerUser} from './userfunctions'

export default class Userregisteration extends Component {
    constructor(){
        super()
        this.state={
            FullName:"",
            City:"",
            Country:"",
            ID:"",
            Key:"",
            errors:{}
        }
    }
    onChange=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault()
        const newUser = {
            FullName: this.state.FullName,
            City: this.state.City,
            Country: this.state.Country,
            ID: this.state.ID,
            Key: this.state.Key
        }
        axios.post('http://localhost:5000/userregistration', newUser).then(res => {
            this.props.history.push('/userlogin')
          }).catch(error => {
            this.setState({error: true})
          })
        }

    render() {
        const {errors} = this.state
        return (
            <div class='container'>
                <Jumbotron>
                    <h1 className="display-3">User Registration</h1>
                        <p className="lead">Provides below information to be registered yourself.</p>
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
                                        <label>Full Name:</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.FullName}
                                                onChange={this.onChange}
                                                id="FullName"
                                                errors={errors.FullName}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>City:</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.City}
                                                onChange={this.onChange}
                                                id="City"
                                                errors={errors.City}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Country: </label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.Country}
                                                onChange={this.onChange}
                                                id="Country"
                                                errors={errors.Country}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>ID:</label>
                                        <input  type="text"
                                                className="form-control"
                                                value={this.state.ID}
                                                onChange={this.onChange}
                                                id="ID"
                                                errors={errors.ID}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Key: </label>
                                        <input  type="Password"
                                                className="form-control"
                                                value={this.state.Key}
                                                onChange={this.onChange}
                                                id="Key"
                                                errors={errors.Key}
                                                />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" value="Register" className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                                </CardText>
                        </Card>                        
                    </Col>
            </div>
        )
    }
}