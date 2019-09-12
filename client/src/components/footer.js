import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import './footer.css'
import { Jumbotron, Button } from 'reactstrap';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';


const Footer = () => {
  return (
    <div>
      <footer className='container'>
        <Col sm='12'>
          <Card body>
          <h3 class='hutton'>Thanks for visiting us our social links are below.</h3>
        <Row>
                  <Col sm="3">
                      <Card body>
                      <Button>Click Here</Button>
                      </Card>
                  </Col>
                  <Col sm="3">
                      <Card body>
                      <Button>Click Here</Button>
                      </Card>
                  </Col>
                  <Col sm="3">
                      <Card body>
                      <Button>Click Here</Button>
                      </Card>
                  </Col>
                  <Col sm="3">
                      <Card body>
                      <Button>Click Here</Button>
                      </Card>
                  </Col>
              </Row>           
          </Card>
        </Col>        
      </footer>
    </div>
    
  );
}
export default Footer;