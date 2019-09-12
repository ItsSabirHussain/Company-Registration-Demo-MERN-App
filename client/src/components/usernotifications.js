import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Col, Card, CardTitle,CardText } from 'reactstrap';
import Usernavbar from './usernavbar';
import ReactNotification from 'react-notifications-component'

export default class Usernotifications extends Component {
    componentDidMount() {
        return(
            <ReactNotification />
        )
    } 
	render(){
		return(
            <div className='container'>
                <Col sm='12'>
                    <Usernavbar/>
                    <Jumbotron>
                    <h1 className="display-3">Notifications</h1>
                        <p className="lead">For being get interact check your Notifications.</p>
                        <hr className="my-2" />
                        <p className="lead">
                        </p>
                    </Jumbotron>
                    <br/>
                    
                </Col>
			</div>
		)
	}
				
}
				
