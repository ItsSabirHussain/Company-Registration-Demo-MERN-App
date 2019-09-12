import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Col} from 'reactstrap';
import Adminnavbar from './adminnavbar';

export default class Allcommpanies extends Component {
	render(){
		return(
            <div className='container'>
                <Col sm='12'>
                    <Adminnavbar/>
                    <Jumbotron>
                    <h1 className="display-3">Companies.</h1>
                        <p className="lead">Following is the list of all companies.</p>
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
				
