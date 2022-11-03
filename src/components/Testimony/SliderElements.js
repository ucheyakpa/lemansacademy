import styled from "styled-components";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

export const SliderContainer = styled.section`
  background: #f9f9f9;
  padding-top: 30em;
  padding-bottom: 6em;
  padding-inline: 1.8em;
  position: relative;

  @media screen and (max-width: 48em) {
    padding-top: 26em;
  }
`;

export const HeaderText = styled.div`
  text-align: center;
  position: absolute;
  top: 14em;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 48em) {
    top: 14em;
  }
`;

export const Header = styled.h1`
  color: #053146;
  font-size: 2.4rem;
  font-family: "Poppins";

  @media screen and (max-width: 48em) {
    font-size: 2em;
  }

  @media screen and (max-width: 30em) {
    font-size: 1.6em;
  }
`;

export const SubHeader = styled.h2`
  color: #053146;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;

  @media screen and (max-width: 30em) {
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
  max-width: 700px;
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

  @media screen and (max-width: 48em) {
    margin-top: 3em;
  }
  @media screen and (max-width: 33em) {
    margin-top: 6em;
  }
  @media screen and (max-width: 30em) {
    margin-top: 3em;
  }
`;

export const ImageContainer = styled.figure`
  position: absolute;
  top: -25%;

  @media screen and (max-width: 30em) {
    top: -20%;
  }
  @media screen and (max-width: 20em) {
    top: -15%;
  }
`;

export const Image = styled.img`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 100%;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 30em) {
    height: 120px;
    width: 120px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
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

  @media screen and (max-width: 30em) {
    font-size: 1.2rem;
  }
`;

export const Message = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  max-width: 450px;
  text-align: center;
  padding-inline: 1.3em;
  color: #12141D;

  @media screen and (max-width: 30em) {
    font-size: 1rem;
  }
`;

export const RightQuote = styled(FaQuoteRight)`
  position: absolute;
  bottom: 1em;
  right: 1em;
  color: #999;
  font-size: 3rem;

  @media screen and (max-width: 48em) {
    bottom: 0.8em;
    right: 0.8em;
    font-size: 2rem;
  }

  @media screen and (max-width: 30em) {
    bottom: 0.5em;
    right: 0.5em;
    font-size: 1.4rem;
  }
`;

export const LeftQuote = styled(FaQuoteLeft)`
  position: absolute;
  top: 1em;
  left: 1em;
  color: #999;
  font-size: 3rem;

  @media screen and (max-width: 48em) {
    top: 0.8em;
    left: 0.8em;
    font-size: 2rem;
  }

  @media screen and (max-width: 30em) {
    top: 0.5em;
    left: 0.5em;
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
    top: 68%;
  }

  @media screen and (max-width: 30em) {
    font-size: 2.2em;
    top: 70%;
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
    top: 68%;
  }

  @media screen and (max-width: 30em) {
    font-size: 2.2em;
    top: 70%;
  }
`;
