import styled from "styled-components";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

export const SliderContainer = styled.section`
  background: #f9f9f9;
  padding-top: 26em;
  padding-bottom: 6.6em;
  padding-inline: 1.8em;
  position: relative;

  /* @media screen and (max-width: 48em) {
    padding-top: 24em;
  } */
`;

export const HeaderText = styled.div`
  text-align: center;
  position: absolute;
  top: 12em;
  left: 50%;
  transform: translateX(-50%);
`;

export const Header = styled.h1`
  color: #053146;
  font-size: 1.8rem;
  font-family: "Poppins";

  @media screen and (max-width: 48em) {
    font-size: 1.6em;
  }
`;

export const SubHeader = styled.h2`
  color: #053146;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1px;

  @media screen and (max-width: 48em) {
    font-size: 1.1em;
  }
`;

// Single Slider styling
export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: #c7e6f8;
  max-width: 560px;
  margin: auto;
  border-radius: 8px;
  opacity: 0;
  transition: all 0.3s linear;

  &.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  &.lastSlide {
    display: none;
    transform: translateX(-100%);
  }

  &.nextSlide {
    display: none;
    transform: translateX(100%);
  }
`;

export const ImageContainer = styled.figure`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  position: absolute;
  background-color: #191E2E;
  top: -30%;

  @media screen and (max-width: 48em) {
    top: -24%;
    height: 110px;
    width: 110px;
  }
  @media screen and (max-width: 30em) {
    top: -32%;
  }
`;

export const Image = styled.img`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 100%;
  height: 140px;
  width: 140px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 48em) {
    height: 110px;
    width: 110px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 2em;
  margin-top: 4em;

  @media screen and (max-width: 30em) {
    margin-top: 2em;
  }
`;

export const Name = styled.h3`
  color: #be031d;
  margin-top: 1em;
  font-size: 1.3rem;

  @media screen and (max-width: 48em) {
    font-size: 1.2rem;
  }
`;

export const Message = styled.p`
  font-size: 1.1rem;
  line-height: 1.4;
  max-width: 450px;
  text-align: center;
  padding-inline: 1.3em;
  color: #12141d;

  @media screen and (max-width: 48em) {
    font-size: 1rem;
  }
`;

export const RightQuote = styled(FaQuoteRight)`
  position: absolute;
  bottom: 1em;
  right: 1em;
  color: #999;
  font-size: 2rem;

  @media screen and (max-width: 48em) {
    font-size: 2rem;
  }

  @media screen and (max-width: 30em) {
    font-size: 1.4rem;
  }
`;

export const LeftQuote = styled(FaQuoteLeft)`
  position: absolute;
  top: 1em;
  left: 1em;
  color: #999;
  font-size: 2rem;

  @media screen and (max-width: 48em) {
    font-size: 2rem;
  }

  @media screen and (max-width: 30em) {
    font-size: 1.4rem;
  }
`;

export const RightSquare = styled(BsFillArrowRightSquareFill)`
  position: absolute;
  top: 68%;
  left: 5%;
  font-size: 2.5em;
  cursor: pointer;
  color: #053146;

  @media screen and (max-width: 61em) {
    left: 0;
  }

  @media screen and (max-width: 48em) {
    top: 68.5%;
    font-size: 2em;
  }
`;

export const ArrowLeft = styled(BsFillArrowLeftSquareFill)`
  position: absolute;
  top: 68%;
  right: 5%;
  font-size: 2.5em;
  cursor: pointer;
  color: #053146;

  @media screen and (max-width: 61em) {
    right: 0;
  }

  @media screen and (max-width: 48em) {
    top: 68.5%;
    font-size: 2em;
  }
`;
