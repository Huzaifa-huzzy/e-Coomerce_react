import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 40px 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 60px 50px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: #fff;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    width: 250px;
  }

  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #f39c12;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e67e22;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const FooterLink = styled.a`
  color: #bbb;
  text-decoration: none;
  margin: 0 15px;
  font-size: 14px;
  transition: color 0.3s;

  &:hover {
    color: #f39c12;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  margin-top: 20px;
  color: #bbb;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Left Section: Newsletter */}
        <div>
          <SectionTitle>Enter Your Email</SectionTitle>
          <InputContainer>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </InputContainer>
        </div>

        {/* Right Section: Links */}
        <div>
          <FooterLinks>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </FooterLinks>
        </div>
      </FooterContainer>

      {/* Copyright */}
      <Copyright>&copy; {new Date().getFullYear()} Beautiful Footer. All rights reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
