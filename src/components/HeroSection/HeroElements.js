import styled, { keyframes } from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import bgImage from "../../images/tab-learning.jpg";

export const HeroContainer = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  gap: 8em;
  align-items: center;
  padding: 8em 0;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #12141d;
    opacity: 0.9;

    @media screen and (max-width: 30em) {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 71em) {
    gap: 0.2em;
  }

  @media screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    padding: 2em;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 37.5em;
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  margin-left: 2em;
  padding-top: 6em;
  padding-right: 3em;

  @media screen and (max-width: 71em) {
  }

  @media screen and (max-width: 48em) {
    align-items: center;
    justify-content: center;
    margin-left: 0;
    padding-top: 8em;
    padding-right: 0;
  }
`;

export const HeroImageContainer = styled.div`
  max-width: 20.5em;
  z-index: 1;
  margin-right: 2em;
  padding-top: 3em;

  @media screen and (max-width: 71em) {
    padding-top: 3em;
  }
  @media screen and (max-width: 48em) {
    margin: auto;
    padding-bottom: 3em;
  }
`;

const jumping = keyframes`
 0%{
  transform: rotate(0deg);
 }

 25%{
  transform: translateY(8px);
 }

 75%{
  transform: translateY(-8px);
 }

 100%{
  transform: rotate(0deg);
 }
`;

export const HeroImage = styled.img`
  background-color: #c7e6f8;
  border: 8px solid #c7e6f8;
  border-radius: 10px;
  max-width: 100%;
  height: auto;
  animation: ${jumping} linear 2s infinite;

  @media screen and (max-width: 30em) {
    border: 6px solid #c7e6f8;
  }
`;

export const HeroH1 = styled.h1`
  color: #c7e6f8;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  line-height: 1.2;

  @media screen and (max-width: 48em) {
    font-size: 1.76rem;
    text-align: center;
  }
  @media screen and (max-width: 30em) {
    font-size: 1.68rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 0.6em;
  color: #fff;
  opacity: 0.9;
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 26em;
  line-height: 1.4;
  letter-spacing: 1px;

  @media screen and (max-width: 48em) {
    text-align: center;
    font-size: 1.06rem;
    line-height: 1.5;
  }

  @media screen and (max-width: 30em) {
    font-size: 1rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  width: 14.3em;
`;

export const ArrowForword = styled(MdArrowForward)`
  margin-left: 0.5em;
  font-size: 1.5rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 0.5em;
  font-size: 1.5rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
export const TopImage = styled.div`
  max-width: 8em;
  margin-top: 3.6em;
  margin-bottom: -6.6em;
  z-index: 33;
  display: none;

  @media screen and (max-width: 48em) {
    display: block;
  }

  @media screen and (max-width: 30em) {
    max-width: 5.6em;
  }
`;
