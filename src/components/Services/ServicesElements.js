import styled from "styled-components";
import Running from "../../images/running.png";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6em;
  padding-bottom: 8em;
  background: #191e2e;
  background-image: url(${Running});
  background-repeat: no-repeat;
`;

export const ServicesWrapper = styled.div`
  max-width: 63em;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1.25em;
  padding: 0 3.13em;

  @media screen and (max-width: 58em) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 38em) {
    grid-template-columns: 1fr;
    padding: 0 1.24em;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1em;
  max-height: 21.3em;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &::before {
    content: "";
    background-color: #053045;
    opacity: 0.9;
    position: absolute;
    width: 100%;
    height: 0;
    transition: 0.4s ease-in-out;

    @media screen and (max-width: 48em) {
      display: none;
    }
  }

  &:hover::before {
    height: 100%;
  }
`;

export const HighlightP = styled.p`
  color: #c7e6f8;
  font-weight: 600;
  font-family: "Poppins";
  font-size: 1.2rem;
  padding: 1em;
  text-align: center;
  position: absolute;
  top: 65%;
  transform: translateY(-50%);
  transition: 0.5s ease-in-out;
  opacity: 0;
  width: 100%;
  letter-spacing: 1.4px;

  @media screen and (max-width: 48em) {
    display: none;
  }

  ${ServicesCard}:hover & {
    opacity: 1;
    top: 50%;
  }
`;

export const ServicesIcon = styled.img`
  height: 7em;
  width: 7em;
  margin-bottom: 1.5em;
  padding-top: 2em;

  @media screen and (max-width: 48em) {
    height: 6.2em;
    width: 6.2em;
    margin-bottom: 1.5em;
    padding-top: 2em;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 1.8rem;
  color: #fff;
  font-family: "Poppins";
  margin-bottom: 1.6em;

  @media screen and (max-width: 48em) {
    font-size: 1.6rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 0.4em;

  @media screen and (max-width:48em) {
    font-size: 1.1rem;
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding-bottom: 2em;
  padding-inline: 2em;

  @media screen and (max-width: 48em) {
    font-size: 0.9rem;
  }
`;
