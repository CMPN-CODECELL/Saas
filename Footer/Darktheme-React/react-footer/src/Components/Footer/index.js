import React from 'react'
import fb from '../../imgs/facebook.png' 
import insta from '../../imgs/instagram.png' 
import link from '../../imgs/linkedin.png' 
import twit from '../../imgs/twitter.png' 
import { Box , Container, Row, Column, FooterLink, 
    Heading, Para, WebsiteRights, Icon, IconCon,
    CopyDiv, Totbox} from './FooterStyles'
 
const Footer = () => {
    return (
    <Totbox>
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Saas</Heading>
            <Para>Orci dapibus ultrices in iaculis nunc sed augue. Sit amet justo donec enim diam. </Para>
            <IconCon>
                <Icon src={fb}></Icon>
                <Icon src={insta}></Icon>
                <Icon src={link}></Icon>
                <Icon src={twit}></Icon>
            </IconCon>
          </Column>
          <Column>
            <Heading>USEFUL LINKS</Heading>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">Terms of service</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </Column>
          <Column>
            <Heading>OUR SERVICES</Heading>
            <FooterLink href="#">Web Design</FooterLink>
            <FooterLink href="#">Web Development</FooterLink>
            <FooterLink href="#">Product Management</FooterLink>
            <FooterLink href="#">Marketing</FooterLink>
            <FooterLink href="#">Graphic Design</FooterLink>
          </Column>
          <Column>
            <Heading>CONTACT US</Heading>
            <Para> A108 Adam Street New York, NY 535022 United States</Para>
            <FooterLink href="#">
                <b>Phone: </b> +1 5559 4676
            </FooterLink>
            <FooterLink href="#">
                <b>Email: </b> info@gmail.org
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
        <CopyDiv>
        <WebsiteRights> Copyright © <b>Saas</b> All Rights Reserved</WebsiteRights>
      </CopyDiv>
    </Totbox>
    )
}

export default Footer