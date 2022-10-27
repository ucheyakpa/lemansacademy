import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../../images/logo.png";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  SocialLogoImage,
  WebsiteRight,
  SocialIcons,
  SocialMediaLink,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Head Office</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Community</FooterLinkTitle>
              <FooterLink to="/">Blog</FooterLink>
              <FooterLink to="/">Group Learning</FooterLink>
              <FooterLink to="/">Tutors</FooterLink>
              <FooterLink to="/">foundation</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <SocialMediaLink
                href="///www.facebook.com/lemansacademy"
                target="_blank"
                aria-label="Facebook"
              >
                Facebook
              </SocialMediaLink>
              <SocialMediaLink
                href="///www.instagram.com/lemansacademy"
                target="_blank"
                aria-label="Instagram"
              >
                Instagram
              </SocialMediaLink>
              <SocialMediaLink
                href="///www.youtube.com/channel/UCUPERt3ug9Ix3cH2e5fh0kQ"
                target="_blank"
                aria-label="Youtube"
              >
                Youtube
              </SocialMediaLink>
              <SocialMediaLink
                href="///www.twitter.com/lemansacademy"
                target="_blank"
                aria-label="Twitter"
              >
                Twitter
              </SocialMediaLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>

        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/" onClick={toggleHome}>
              <SocialLogoImage src={Logo} alt="LOGO" />
            </SocialLogo>
            <WebsiteRight>
              Lemans Academy Ⓒ {new Date().getFullYear()} All rights reserved.
            </WebsiteRight>
            <SocialIcons>
              <SocialIconLink
                href="///www.facebook.com/lemansacademy"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="///www.instagram.com/lemansacademy"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="///www.youtube.com/channel/UCUPERt3ug9Ix3cH2e5fh0kQ"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="///www.twitter.com/lemansacademy"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
