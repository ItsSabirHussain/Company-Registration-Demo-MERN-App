import React, {Component} from 'react';
import {Col, Card, CardTitle, CardText } from 'reactstrap';
import {IoIosCheckmark} from 'react-icons/io';

export default class Appsucsub extends Component {
    render() {
        return (
            <div class='container'>
                    <Col sm='12'>
                        <Card body>
                            <CardTitle><b><h3><IoIosCheckmark/>Successfully submitted.</h3></b></CardTitle>
                                <CardText> 
                                    <p>Your company registration request is successfully submitted. 
                                        You will received ACN via notification and you company information 
                                        is updated on your dashboard as soon as you information are varified. </p>
                                </CardText>
                        </Card>                        
                    </Col>
            </div>
        )
    }
}