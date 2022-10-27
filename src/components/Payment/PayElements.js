import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Money from "../../images/money.png";

const positions = keyframes`
  0%{
    background-position: bottom left;
  }
  25%{
    background-position: top center;
  }
  50%{
    background-position: bottom right;
  }
  75%{
    background-position: top center;
  }
  100%{
    background-position: bottom left;
  }
`;

export const PaymentContainer = styled.section`
  background-color: #c7e6f8;
  background-image: url(${Money});
  background-repeat: no-repeat;
  background-size: 15%;
  background-position: bottom left;
  background-origin: content-box;
  animation: ${positions} 20s infinite;

  @media screen and (max-width: 48em) {
    background-size: 20%;
  }
  @media screen and (max-width: 30em) {
    background-size: 30%;
  }
`;

export const PaymentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4em;
  padding-block: 5em;
  padding-inline: 5em;

  
  @media screen and (max-width: 61em) {
    padding-inline: 4em;
  }
  @media screen and (max-width: 48em) {
    flex-direction: column;
    gap: 3.5em;
    padding-block: 8em;
    padding-inline: 3em;
  }
  @media screen and (max-width: 30em) {
    padding-block: 7em;
    padding-inline: 2.2em;
  }
`;

export const PaymentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const Para = styled.p`
  color: #053146;
  text-align: center;
  padding-inline: 1.2em;
  font-size: 1.4rem;
  font-weight: 600;
  max-width: 500px;

  @media screen and (max-width: 20.75em) {
    font-size: 1.2em;
  }
`;

export const Button = styled(Link)`
  background: linear-gradient(
    148deg,
    rgba(45, 98, 122, 1) 6%,
    rgba(14, 70, 97, 1) 34%,
    rgba(5, 48, 69, 1) 66%,
    rgba(5, 48, 69, 1) 100%
  );
  font-size: 1.4rem;
  padding: 1.5em;
  color: #fff;
  border-radius: 1em;
  text-align: center;
  margin-top: 1.4em;
  font-family: "Poppins";
  font-weight: 600;
  margin: auto;

  &:hover {
    background: #053146;
    color: #c7e6f8;
  }

  @media screen and (max-width: 30em) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 21em) {
    font-size: 1.1rem;
  }
`;

export const ImageWrap = styled.figure`
  max-width: 300px;

  @media screen and (max-width: 48em) {
    max-width: 400px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 1.5em;
`;
