import React, {Component} from 'react';
import axios from 'axios';
import './home.css'
import {Link} from 'react-router-dom'
import { Jumbotron, Button, Card, CardTitle, CardText, Row, Col } from 'reactstrap';


export default class EditTodo extends Component {
    render(){
        return(
            <div className='container'>
                <Jumbotron>
                <h1 className="display-3">Active Tax Services</h1>
                    <p className="lead"><strong>We are providing the way to register you company and get interact with us.</strong></p>
                    <hr className="my-2" />
                    <p><b>If you the one of our exiting memer please login to get interact and if you wana register your company create an account and then register you company.
                        We are provding you with the dash board for notification and updating your profile.</b><br/><br/><br/> For check if comapny name is available click on below search
                        button. </p>
                    <p className="lead">
                    <Link to='/search'><Button color="primary">Search</Button></Link>
                    </p>
                </Jumbotron>  
                <br/>
                <br/>
                <Row>
                    <Col sm="3">
                        <Card body>
                        <CardTitle><b>Admin Login</b></CardTitle>
                        <CardText>For login to admin dashboard click below.</CardText>
                        <Link to='/adminlogin'><Button>Click Here</Button></Link>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body>
                        <CardTitle><b>User Login</b></CardTitle>
                        <CardText>For login to users dashboard click below. </CardText>
                        <Link to='/userlogin'><Button>Click Here</Button></Link>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body>
                        <CardTitle><b>Company Registeration</b></CardTitle>
                        <CardText>For registeration of different kinds companies click below.</CardText>
                        <Link to='/companyregisteration'><Button>Click Here</Button></Link>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body>
                        <CardTitle><b>About</b></CardTitle>
                        <CardText>For checking what we are and provides click below.</CardText>
                        <Link to='/about'><Button>Click Here</Button></Link>
                        </Card>
                    </Col>
                </Row>                 
            </div>
        )
    }
}