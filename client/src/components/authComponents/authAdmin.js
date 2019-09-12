import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getJwtAdmin } from '../../helpers/index';

class AuthAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: undefined
    };
  }

  componentDidMount() {
    this.getAdmin();
  }

  getAdmin() {
    const jwt = getJwtAdmin();
    if (!jwt) {
      this.setState({
        admin: null
      });
      return;
    }

    axios.get('/', { headers: { Authorization: getJwtAdmin() } }).then(res => {
      this.setState({
        admin: res.data
      })
    });
  }

  render() {
    const { user } = this.state;
    if (user === undefined) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    if (user === null) {
      this.props.history.push('/login');
    }

    return this.props.children;
  }
}

export default withRouter(AuthAdmin);