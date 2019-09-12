import React, {Component} from 'react'
import { Jumbotron, Col, Card, CardTitle, CardText } from 'reactstrap'
import axios from 'axios'

export default class Userregisteration extends Component {
    constructor(){
        super()
        this.state={
            FullName: "",
            OfficeID:"",
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
        const newAdmin = {
            FullName: this.state.FullName,
            OfficeID: this.state.OfficeID,
            ID: this.state.ID,
            Key: this.state.Key
        }
        axios.post('http://localhost:5000/adminregistration', newAdmin).then(res => {
            this.props.history.push('/adminlogin')
          }).catch(error => {
            this.setState({error: true})
          })
        }
    render() {
        const {errors} = this.state
        return (
            <div class='container'>
                <Jumbotron>
                    <h1 className="display-3">Admin Registration</h1>
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
                                                onChange={this.onChange}
                                                value={this.state.FullName}
                                                error={errors.FullName}
                                                id="FullName"
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>OfficeID:</label>
                                        <input  type="text"
                                                className="form-control"
                                                onChange={this.onChange}
                                                value={this.state.OfficeID}
                                                error={errors.OfficeID}
                                                id="OfficeID"
                                                />
                                    </div>
                                    <div className="form-group">
                                        <label>ID:</label>
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