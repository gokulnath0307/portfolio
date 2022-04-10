import React from "react";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  // FooterBigLink,
  // FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      {/* <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:jerichobantiquete@gmail.com"
          data-hover="Let's talk!"
        >
          Need a developer?
        </FooterBigLink>
      </FooterBigLinkContainer> */}
      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactLink href="tel:+919488321220">+91 94883 21220</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/gokulnath0307"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/gokulnath-s-942346161/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>
            {/* <ContactLink
              href="https://www.instagram.com/monciego/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </ContactLink> */}
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Let's grab a coffee.</ContactHeader>
          <ContactLink href="tel:+919488321220">
            gokulnath0322@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{" "}
          <Small
            href="https://github.com/gokulnath0307"
            target="_blank"
            rel="noopener noreferrer"
          >
            GOKULNATH S
          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
