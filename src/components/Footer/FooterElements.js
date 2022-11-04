import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #191e2e;
  padding-top: 6em;
  padding-bottom: 2em;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 69em;
  margin: 0 auto;
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 51.25em) {
    padding-top: 2em;
  }

  @media screen and (max-width: 30em) {
    padding-inline: 3em;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 48em) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3em;
  margin: 1em;
  text-align: left;
  width: 10em;
  color: #fff;

  @media screen and (max-width: 30em) {
    padding: 0.63em;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 1.1rem;
  margin-bottom: 0.8em;
  color: #999;

  @media screen and (max-width: 30em) {
    font-size: 0.9rem;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5em;
  font-size: 0.9rem;
  color: #999;

  @media screen and (max-width: 30em) {
    font-size: 0.8rem;
  }

  &:hover {
    color: #c7e6f8;
    transition: 0.3s ease-out;
  }
`;

export const SocialMediaLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5em;
  font-size: 0.9rem;
  color: #999;

  @media screen and (max-width: 30em) {
    font-size: 0.8rem;
  }

  &:hover {
    color: #c7e6f8;
    transition: 0.3s ease-out;
  }
`;

// SOCIAL MEDIA
export const SocialMedia = styled.section`
  max-width: 62.5em;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 68.75em;
  margin: 4em auto 0 auto;
  padding-inline: 1em;

  @media screen and (max-width: 51.25em) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  cursor: pointer;
  margin-bottom: 1em;
  width: 4.3em;

  @media screen and (max-width: 30em) {
    width: 3.5em;
  }
`;

export const SocialLogoImage = styled.img`
  width: 100%;
`;

export const WebsiteRight = styled.small`
  color: #999;
  text-align: center;
  padding-inline: 1em;
  margin-bottom: 1em;

  @media screen and (max-width: 48em) {
    margin-bottom: 1.2em;
    font-size: .8rem;
  }

  @media screen and (max-width: 30em) {
    font-size: 0.7rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.8em;
  align-items: center;
  width: 15em;
  margin-right: 1.5em;
  margin-top: 0.3em;

  @media screen and (max-width: 48em) {
    margin-right: 0.2em;
  }
  @media screen and (max-width: 30em) {
    width: 13em;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.4rem;

  @media screen and (max-width: 30em) {
    font-size: 1.3rem;
  }

  &:hover {
    scale: 0.95;
    color: #c7e6f8;
  }
`;
