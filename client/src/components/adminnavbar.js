import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
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
import {Link} from 'react-router-dom'

export default class Adminnavbar extends Component {
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
		localStorage.removeItem('adminToken')
		localStorage.removeItem('adminID')
		this.setState({redirect: true})
	  };
	 
	render(){
		const {redirect} = this.state
		if(redirect){
			return <Redirect push to="/adminlogin"/> 
		}
		return(
			<div>
			<Navbar color="light" light expand="md">
			<NavbarBrand href="/">Admin Dashbard</NavbarBrand>
			<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
					<Link to='/admindashboard/adminnotifications'>
					<NavItem>
						<NavLink>Notifications</NavLink>
					</NavItem>
					</Link>
					<Link to='/admindashboard/allusers'>
					<NavItem>
						<NavLink>Users</NavLink>
					</NavItem>
					</Link>
					<Link to='/admindashboard/allcompanies'>
					<NavItem>
						<NavLink>Companies</NavLink>
					</NavItem>
					</Link>
					<Link to='/admindashboard/acnrequests'>
					<NavItem>
						<NavLink>ACNs</NavLink>
					</NavItem>
					</Link>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
						Settings
						</DropdownToggle>
						<DropdownMenu right>
						<Link to='/admindashboard/adminupdate'>
							<DropdownItem>
								Update
							</DropdownItem>
						</Link>
						<DropdownItem divider />
						<DropdownItem>
							<DropdownItem onClick={this.logout}>Logout </DropdownItem> 
						</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
		)
	}
				
}
				
