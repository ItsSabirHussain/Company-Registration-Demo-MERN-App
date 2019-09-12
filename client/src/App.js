import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";


import Home from './components/home';
import Userlogin from './components/userlogin';
import Adminlogin from './components/adminlogin';
import Error404 from './components/404';
import Search from './components/search';
import CompanyRegisteration from './components/search';
import About from './components/about';
import Userregisteration from './components/userregisteration';
import Adminregisteration from './components/adminregisteration';
import Admindashboard from './components/admindashboard';
import Userdashboard from './components/userdashboard';
import Usernotifications from './components/usernotifications';
import Registercompany from './components/registercompany';
import Payment from './components/payment';
import Appsucsub from './components/applicationsucsub';
import Usersubmitdocs from './components/usersubmitdocs';
import Docsubsuc from './components/docsubsuc';
import Updateuserinfo from './components/updateuserinfo';
import Adminnotifications from './components/adminnotifications';
import Allusers from './components/adminallusers';
import Allcommpanies from './components/adminallcompanies';
import Acnrequests from './components/acnrequests';
import Adminupdate from './components/adminupdate'
import Usercompanyinfo from './components/usercompanyinfo';

import AuthAdmin from './components/authComponents/authAdmin'


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/adminlogin" component={Adminlogin} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/userlogin" component={Userlogin} />
            <Route exact path="/companyregisteration" component={CompanyRegisteration} />
            <Route exact path="/about" component={About} />
            <Route exact path="/userregisteration" component={Userregisteration} />
            <Route exact path="/adminregisteration" component={Adminregisteration} />
            <Route exact path="/userdashboard" component={Userdashboard} />
            <Route exact path="/admindashboard" component={Admindashboard} /> 
            <Route exact path="/userdashboard/usernotifications" component={Usernotifications}/>
            <Route exact path="/userdashboard/registercompany" component={Registercompany}/>
            <Route exact path="/userdashboard/registercompany/payment" component={Payment}/>
            <Route exact path="/userdashboard/registercompany/payment/appsucsub" component={Appsucsub}/>
            <Route exact path="/userdashboard/registercompany" component={Registercompany}/>
            <Route exact path="/userdashboard/usersubmitdocs" component={Usersubmitdocs}/>
            <Route exact path="/userdashboard/usersubmitdocs/docsucsub" component={Docsubsuc}/>
            <Route exact path="/userdashboard/usersubmitdocs/updateuserinfo" component={Updateuserinfo}/>
            <Route exact path="/admindashboard/adminnotifications" component={Adminnotifications}/>
            <Route exact path="/admindashboard/allusers" component={Allusers}/>
            <Route exact path="/admindashboard/allcompanies" component={Allcommpanies}/>
            <Route exact path="/admindashboard/acnrequests" component={Acnrequests}/>
            <Route exact path="/admindashboard/adminupdate" component={Adminupdate}/>
            <Route exact path="/userdashboard/usercompanyinfo" component={Usercompanyinfo}/>

            <Route exact path="/404" component={Error404} />
            <Redirect to = "/404"/>
          </Switch>
      </Router>
    );
  }
}

export default App;
