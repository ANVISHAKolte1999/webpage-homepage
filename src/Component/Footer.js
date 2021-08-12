
import React from "react";
import Typography from '@material-ui/core/Typography';

import {Box,Container,Row,Column,FooterLink,Heading} from "../Component/FooterStyle";


  
const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1> */}
      <Container >
        <Row >
          <Column >
            
            <FooterLink> <Typography variant="h6" gutterBottom>
        About Us
      </Typography></FooterLink>
            <FooterLink>Aim</FooterLink>
            <FooterLink >Vision</FooterLink>
            <FooterLink >Testimonials</FooterLink>
            
          </Column>
          <Column>
          <FooterLink> <Typography variant="h6" gutterBottom>
          Services
      </Typography></FooterLink>
           
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
          <FooterLink> <Typography variant="h6" gutterBottom>
          Contact Us
      </Typography></FooterLink>
            
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
          <FooterLink> <Typography variant="h6" gutterBottom>
          Social Media
      </Typography></FooterLink>
            
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;