import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/nuray-re.png";
import navIcon1 from "../assets/img/nav-icon1.svg";

import navIcon3 from '../assets/img/github.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className='social-icon'>
                <a href='https://www.linkedin.com/in/nuray-arisoy-97a484230/'><img src={navIcon1} alt="" /></a>
                
                <a href='https://github.com/nurayarisoy'><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved Nuray Arisoy</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer