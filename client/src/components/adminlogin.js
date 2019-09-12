import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Button, Col, Card, CardTitle,CardText } from 'reactstrap';
import axios from 'axios'


export default class Adminlogin extends Component {
    constructor(){
        super()
        this.state={
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
        const admin = {
            ID: this.state.ID,
            Key: this.state.Key,
        }
        axios.post('http://localhost:5000/adminlogin', admin).then(res => {
            localStorage.setItem('adminToken', res.data.token)
            localStorage.setItem('adminID', this.state.ID)
            console.log(res)
            this.props.history.push('/admindashboard')
          }).catch(() => this.setState({
            error: true
          }));
    }
    render() {
        const {errors} = this.state
        return (
            <div class='container'>
                <Jumbotron>
                <h1 className="display-3">Admin Authentication</h1>
                    <p className="lead">If you don't have an account click below button to register.</p>
                    <hr className="my-2" />
                    <p className="lead">
                    <Link to='/adminregisteration'><Button color="primary">Register</Button></Link>
                    </p>
                </Jumbotron>
                <Col sm='12'>
                        <Card body>
                            <CardTitle><b><h3>Authenticate Yourself</h3></b></CardTitle>
                                <CardText> 
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>ID: </label>
                                        <input  type="text"
                                                className="form-control"
                                                onChange={this.onChange}
                                                value={this.state.ID}
                                                error={errors.ID}
                                                id="ID"
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>Key: </label>
                                        <input  type="text"
                                                className="form-control"
                                                onChange={this.onChange}
                                                value={this.state.Key}
                                                error={errors.Key}
                                                id="Key"
                                                />
                                    </div>
                                    <div className="form-group">
                                    <Button color="primary" className="btn btn-primary">Login</Button>
                                    </div>
                                </form>
                                </CardText>
                        </Card>  
                    </Col>               
            </div>
        )
    }
}