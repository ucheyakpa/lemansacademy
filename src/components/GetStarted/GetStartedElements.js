import styled from "styled-components";
import { Link } from "react-router-dom";

// Hero
export const HeroContainer = styled.section`
  background: rgb(187, 211, 213);
  background-image: linear-gradient(
    0deg,
    rgba(187, 211, 213, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  color: #053146;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 39px;
    position: absolute;
    bottom: -1.3%;
    left: 0;
    background-size: auto;
    background-repeat: repeat no-repeat;
    background-position: 0vw bottom;
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  80' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 59L50 55C100 51 200 44 300 30C400 15 500 -6 600 1C700 8 800 44 900 59C1000 73 1100 66 1150 62L1200 59V80H1150C1100 80 1000 80 900 80C800 80 700 80 600 80C500 80 400 80 300 80C200 80 100 80 50 80H0V59Z' fill='%23ffffff'/></svg>");

    @media screen and (max-width: 30em) {
      bottom: -0.3%;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LemansHeader = styled.h1`
  padding-right: 1em;
  font-size: 1.4rem;
  font-family: "Poppins";
  font-weight: 500;
  color: #053146;
  background-repeat: no-repeat;
  line-height: 1.2;

  @media screen and (max-width: 30em) {
    font-size: 1.15rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.8em;
  margin-block: 2em;
  padding-bottom: 10em;
  padding-top: 4em;
  padding-inline: 4em;

  @media screen and (max-width: 30em) {
    padding-bottom: 9em;
    padding-top: 2em;
  }
`;

export const HeroHeader = styled.h1`
  font-family: "Poppins";
  font-size: 2rem;

  @media screen and (max-width: 48em) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 30em) {
    font-size: 1.6rem;
  }
`;

export const Para = styled.p`
  font-size: 1.35rem;
  margin-bottom: 1em;

  @media screen and (max-width: 30em) {
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  max-width: 15%;
  position: absolute;
  top: 3em;
  right: 2.5em;

  @media screen and (max-width: 48em) {
    max-width: 30%;
  }
  @media screen and (max-width: 30em) {
    max-width: 35%;
  }
`;

export const Rounded = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  left: 5%;
  bottom: 1.6em;
  background: linear-gradient(
    148deg,
    rgba(45, 98, 122, 1) 6%,
    rgba(14, 70, 97, 1) 34%,
    rgba(5, 48, 69, 1) 66%,
    rgba(5, 48, 69, 1) 100%
  );

  @media screen and (max-width: 30em) {
    width: 80px;
    height: 80px;
  }
`;

// PRICING BOX
export const PricingContainer = styled.section`
  background-color: #fff;
`;

export const PricingHeading = styled.h1`
  font-size: 1.4rem;
  background: #053146;
  padding: 0.8em;
  border-radius: 5px;
  color: #fff;
  font-family: "Poppins";
  font-weight: 500;
  text-align: center;
  max-width: 240px;
  margin: 2.5em auto;

  @media screen and (max-width: 48em) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 30em) {
    font-size: 1rem;
  }
`;

export const PricingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 2em;
  padding-top: 1em;
  padding-bottom: 10em;
  padding-inline: 10em;

  @media screen and (max-width: 79em) {
    padding-inline: 5em;
  }
  @media screen and (max-width: 51.5em) {
    padding-inline: 3em;
    grid-template-columns: 1fr;
    padding-inline: 2em;
  }
`;

export const PriceWrap = styled.div`
  background-color: #c7e6f8;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2;
  padding-block: 2em;
  padding-inline: 3em;
  position: relative;

  &:nth-child(4) {
    border: 5px solid #053146;
  }

  & ul {
    list-style-type: square;
    list-style-position: inside;
    margin-bottom: 2.5em;
  }
  & li {
    font-size: 1.2rem;
    color: #1c202f;
  }

  @media screen and (max-width: 30em) {
    & li {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 24.4em) {
    max-width: 300px;
    margin: auto;
  }
  @media screen and (max-width: 20em) {
    max-width: 250px;
  }
`;

export const PriceImage = styled(Image)`
  position: static;
  max-width: 40%;
  margin-top: 1em;

  @media screen and (max-width: 48em) {
    max-width: 50%;
  }
`;

export const BoxHeading = styled.h2`
  font-weight: 700;
  font-size: 1.6rem;
  color: #053146;
  text-align: center;
  line-height: 1.5;

  @media screen and (max-width: 48em) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 30em) {
    font-size: 1.1rem;
  }
`;

export const PriceHeading = styled(BoxHeading)`
  color: #053146;
  margin: 1em;
`;

export const ActionButton = styled.a`
  position: absolute;
  bottom: 0;
  padding-block: 0.3em;
  padding-inline: 3em;
  border-radius: 5px 5px 0 0;
  font-size: 1.3rem;
  background: linear-gradient(
    148deg,
    rgba(45, 98, 122, 1) 6%,
    rgba(14, 70, 97, 1) 34%,
    rgba(5, 48, 69, 1) 66%,
    rgba(5, 48, 69, 1) 100%
  );
  color: #fff;
  letter-spacing: 1.2px;

  @media screen and (max-width: 30em) {
    padding-inline: 2em;
    font-size: 1rem;
  }

  &:hover {
    color: #1a1b21;
    background: #fff;
    transition: all 200ms ease-in-out;
  }
`;

export const PayButton = styled(Link)`
  position: absolute;
  bottom: 0;
  padding-block: 0.3em;
  padding-inline: 3em;
  border-radius: 5px 5px 0 0;
  font-size: 1.3rem;
  background: linear-gradient(
    148deg,
    rgba(45, 98, 122, 1) 6%,
    rgba(14, 70, 97, 1) 34%,
    rgba(5, 48, 69, 1) 66%,
    rgba(5, 48, 69, 1) 100%
  );
  color: #fff;
  letter-spacing: 1.2px;

  @media screen and (max-width: 30em) {
    padding-inline: 2em;
    font-size: 1rem;
  }

  &:hover {
    color: #1a1b21;
    background: #fff;
    transition: all 200ms ease-in-out;
  }
`;
