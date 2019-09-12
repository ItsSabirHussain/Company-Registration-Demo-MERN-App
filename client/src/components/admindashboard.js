import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Col, Card, CardTitle,CardText } from 'reactstrap';
import Adminnavbar from './adminnavbar'
import getJwtAdmin from '../helpers/index'

export default class Admindashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            ID:''
        }
    }
    componentDidMount(props){
        if(localStorage.getItem('adminToken')){
            this.setState({ID: localStorage.getItem('adminID')})
        }
        else{
            this.props.history.push('/adminlogin')
        }
    }
	render(){
		return(
            <div className='container'>
                <Col sm='12'>
                    <Adminnavbar/>
                    <Jumbotron>
                    <h1 className="display-3">Welcome Here </h1>
                    <h1 className="display-6">Admin ID: {this.state.ID}</h1>
                        <p className="lead">For being get interact check your Notifications.</p>
                        <hr className="my-2" />
                        <p className="lead">
                        <Link to='/admindashboard/adminnotifications'><Button color="primary">Notifications</Button></Link>
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
				
