import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default class CompanyRegisteration extends Component {
    constructor(){
        super()
        this.state = {
            ACN:"",
            UserID: localStorage.getItem("userID"),
            CompanyName:"",
            City:"",
            Country:"",
            Email:"",
            Phone:"",
            Status:"Payment Pending",
            CEO:"",
            Type:""
        }
    }
    onChange(e){
        this.setState({[e.target.id]:[e.target.value]})
    }
    onSubmit(e){
        e.preventDefault()
        const newCompany = {
            ACN: this.state.ACN,
            UserID: this.state.UserID,
            CompanyName: this.state.CompanyName,
            City: this.state.City,
            Country: this.state.Country,
            Email: this.state.Email,
            Phone: this.state.Phone,
            Status: this.state.Status,
            CEO: this.state.CEO,
            Type: this.state.Type
        }
        axios.post('http://localhost:5000/companyregistration', newCompany).then(res => {
            this.props.history.push('/payment')
          }).catch(error => {
            this.setState({error: true})
          })
    }
    
    render() {
        return (
            <div class='container' style={{marginTop: 20}}>
                <Jumbotron>
                <h1 className="display-3">Admin Authentication</h1>
                    <p className="lead">If you don't have an account click below button to register.</p>
                    <hr className="my-2" />
                    <p className="lead">
                    <Button color="primary">Register</Button>
                    </p>
                </Jumbotron>
                <h3>Authenticate Yourself</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Company Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.d}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Key: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}