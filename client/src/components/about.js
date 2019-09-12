import React, {Component} from 'react';
import { Jumbotron, Card, CardTitle, CardText, Col } from 'reactstrap';


export default class CreateTodo extends Component {
    render() {
        return (
            <div class='container' style={{marginTop: 20}}>
            <Jumbotron>
            <h1 className="display-3">About</h1>
                <p className="lead">We are providing a sytem for company registration.</p>
                <hr className="my-2" />
                <p className="lead">
                </p>
            </Jumbotron>
            <Col>
                <h2>Services</h2>
                <br/>
                <Col sm="12">
                    <Card body>
                    <CardTitle><b>User Dashboard</b></CardTitle>
                    <CardText>We are providing the dashboard to user for management.</CardText>
                    </Card>
                </Col>
                <br/>
                <Col sm="12">
                    <Card body>
                    <CardTitle><b>Company Name Search</b></CardTitle>
                    <CardText>Providing search option to check if you company name is available. </CardText>
                    </Card>
                </Col>
                <br/>
            </Col>
        </div>
        )
    }
}