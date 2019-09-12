import React, {Component} from 'react';
import axios from 'axios';
import './home.css'
import { Jumbotron, Button } from 'reactstrap';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';


export default class Search extends Component {
    constructor(props){
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            Search: '',
            Status: '',
        }
    }
   
    onChange(e){
        e.preventDefault()
        this.setState({[e.target.id]:e.target.value})
        this.setState({Status:""})
    }
    onSubmit(e){
        e.preventDefault()
        this.setState({Status:"Available"})
        this.setState({Status:"Sorry there is an already company with this name."})
    }
    render(){
        return(
            <div className='container'>
                <Jumbotron>
                <h1 className="display-3">Active Tax Services</h1>
                    <p className="lead"><strong>Company name availability checking.</strong></p>
                    <hr className="my-2" />
                    <p> Use the search box below to check if you conrned name is availed</p>
                    <p className="lead">
                    </p>
                </Jumbotron>  
                <br/>
                <div>
                    <Col rm='6'>
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Enter Company Name </label>
                            <input  type="text"
                                    className="form-control"
                                    onChange={this.onChange}
                                    value={this.state.Search}
                                    id="Search"
                                />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Check" className="btn btn-primary" />
                        </div>
                        </form>
                        <h5 className="lead">{this.state.Status}</h5>
                    </Col>
                </div>
                
            </div>
        )
    }
}