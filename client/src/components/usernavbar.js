import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, Redirect} from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';  

export default class Usernavbar extends Component {
	constructor(props) {
		super(props);
	
		this.toggle = this.toggle.bind(this);
		this.logout = this.logout.bind(this);

		this.state = {
		  isOpen: false,
		  redirect: false

		};
	  }
	  toggle() {
		this.setState({
		  isOpen: !this.state.isOpen
		});
	  }

	  logout = () => {
		localStorage.removeItem('userToken')
		localStorage.removeItem('userID')
		this.setState({redirect: true})
	  };

	render(){
		const {redirect} = this.state
		if(redirect){
			return <Redirect push to="/userlogin"/> 
		}
		return(
			<div>
			<Navbar color="light" light expand="md">
			<NavbarBrand href="/">User Dashbard</NavbarBrand>
			<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
					<NavItem>
						<Link to='/userdashboard/usernotifications'><NavLink>Notifications</NavLink></Link>
					</NavItem>
					<NavItem>
						<Link to='/userdashboard/registercompany'><NavLink href="https://github.com/reactstrap/reactstrap">Register Company</NavLink></Link>
					</NavItem>
					<NavItem>
						<Link to='/userdashboard/usercompanyinfo'><NavLink>Company Info</NavLink></Link>
					</NavItem>
					<NavItem>
						<Link to='/userdashboard/usersubmitdocs'><NavLink>Submit Docs</NavLink></Link>
					</NavItem>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
						Settings
						</DropdownToggle>
						<DropdownMenu right>
							<Link to='/userdashboard/usersubmitdocs/updateuserinfo'><DropdownItem>Update User Infor</DropdownItem></Link>
							<Link to='/userdashboard/usersubmitdocs/updateuserinfo'><DropdownItem>Update Company Infor</DropdownItem></Link>
						<DropdownItem divider />
							<DropdownItem onClick={this.logout}>Logout</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	)
		
	}
				
}
				
