import styled from "styled-components";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { BsArrowLeft } from "react-icons/bs";
import LOGO from "../images/logo-lemans.png";
import student from "../images/Student-one.jpeg";
import book from "../images/books.png";

const HeroContainer = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
    url(${student});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: auto;
`;

const ContactContainer = styled.div`
  padding-bottom: 3em;
  background: #c7e6f8;

  @media screen and (max-width: 48em) {
    padding-bottom: 1em;
  }
`;

const FooterContainer = styled.div``;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 3em;

  @media screen and (max-width: 48em) {
    padding: 2em 1em;
  }
`;

const Logo = styled(Link)`
  max-width: 220px;

  @media screen and (max-width: 48em) {
    max-width: 160px;
    margin-left: -1em;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const HeaderText = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #053146;
  color: #fff;
  border: 5px;
  padding: 0.8em 1.4em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #053146;
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 48em) {
    padding: 0.6em 1.2em;
    font-size: 1rem;
  }
`;

const HeroText = styled.div`
  max-width: 650px;
  margin: auto;
  padding: 4.5em;
  color: #fff;
  line-height: 1.4;

  @media screen and (max-width: 48em) {
    max-width: 500px;
    padding-inline: 2em;
  }
`;

const Header = styled.h1`
  text-align: center;
  color: #c7e6f8;
  font-size: 1.6rem;

  @media screen and (max-width: 48em) {
    font-size: 1.4rem;
  }
  
  @media screen and (max-width: 30em) {
    font-size: 1.2rem;
  }
`;

const Para = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-block: 1em;
  line-height: 1.5;

  @media screen and (max-width: 48em) {
    font-size: 0.96rem;
  }
  @media screen and (max-width: 30em) {
    font-size: 0.9rem;
  }
`;

const ImageWrap = styled.div`
  max-width: 100px;

  @media screen and (max-width: 48em) {
    max-width: 80px;
  }
`;

const Tutor = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <Logo to="/">
            <Image src={LOGO} alt="LOGO" />
          </Logo>

          <HeaderText to="/">
            <BsArrowLeft />
            Home
          </HeaderText>
        </HeroWrapper>

        <HeroText>
          <ImageWrap>
            <Image src={book} />
          </ImageWrap>

          <Header>Get a Home Lesson Teacher</Header>

          <Para>
            If your kid can't learn online, never worry, We got you covered,
            Request for a home lesson Tutor. Send us a message or click
            the chat image.
          </Para>
        </HeroText>
      </HeroContainer>

      <ContactContainer>
        <Contact />
      </ContactContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default Tutor;
