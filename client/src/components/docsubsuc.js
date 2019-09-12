import React, {Component} from 'react';
import {Col, Card, CardTitle, CardText } from 'reactstrap';
import {IoIosCheckmark} from 'react-icons/io';

export default class Docsubsuc extends Component {
    render() {
        return (
            <div class='container'>
                    <Col sm='12'>
                        <Card body>
                            <CardTitle><b><h3><IoIosCheckmark/>Successfully submitted.</h3></b></CardTitle>
                                <CardText> 
                                    <p>Document successfully submitted.</p>
                                </CardText>
                        </Card>                        
                    </Col>
            </div>
        )
    }
}