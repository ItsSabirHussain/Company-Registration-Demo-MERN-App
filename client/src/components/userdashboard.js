import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Col, Card, CardTitle,CardText } from 'reactstrap';
import Usernavbar from './usernavbar'

export default class Userdashboard extends Component { 
    constructor(props){
        super(props)
        this.state = {
            ID:''
        }
    }
    componentDidMount(props){
        if(localStorage.getItem('userToken')){
            this.setState({ID: localStorage.getItem('userID')})
        }
        else{
            this.props.history.push('/userlogin')
        }
    }    
	render(){
		return(
            <div className='container'>
                <Col sm='12'>
                    <Usernavbar/>
                    <Jumbotron>
                    <h1 className="display-3">Welcome Here</h1>
                        <p className="lead">For being get interact check your Notifications.</p>
                        <hr className="my-2" />
                        <p className="lead">
                        <Link to='/userdashboard/usernotifications'><Button color="primary">Notifications</Button></Link>
                        </p>
                    </Jumbotron>
                    <Col>
                    <br/>
                    <Col sm="12">
                        <Card body>
                        <CardTitle><b>Company Registration</b></CardTitle>
                        <CardText>For company registration use company registration navigation bar menu and provides your company information.</CardText>
                        </Card>
                    </Col>
                    <br/>
                    <Col sm="12">
                        <Card body>
                        <CardTitle><b>Update Information</b></CardTitle>
                        <CardText>For update your information and your company's information udse update navigationn bar menu.</CardText>
                        </Card>
                    </Col>
                    <br/>
                    <Col sm="12">
                        <Card body>
                        <CardTitle><b>Status</b></CardTitle>
                        <CardText>For checking your companies status use nav bar menu.</CardText>
                        </Card>
                    </Col>
                    <br/>	
                    </Col>
                </Col>
			</div>
		)
	}
				
}
				
