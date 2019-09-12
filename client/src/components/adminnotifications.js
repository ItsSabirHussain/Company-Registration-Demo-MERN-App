import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Col} from 'reactstrap';
import Adminnavbar from './adminnavbar';

export default class Adminnotifications extends Component {
	render(){
		return(
            <div className='container'>
                <Col sm='12'>
                    <Adminnavbar/>
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
				
