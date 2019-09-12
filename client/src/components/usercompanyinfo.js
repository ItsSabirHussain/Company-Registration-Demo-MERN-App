import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Col} from 'reactstrap';
import Usernavbar from './usernavbar';

export default class Usercompanyinfo extends Component {

	render(){
		return(
            <div className='container'>
                <Col sm='12'>
                    <Usernavbar/>
                    <Jumbotron>
                    <h1 className="display-3">Company information.</h1>
                    <h1 className="display-6">ACN:...</h1>
                        <p className="lead">Following is the information of you company.</p>
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
				
