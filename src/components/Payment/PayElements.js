import styled from "styled-components";
import { Link } from "react-router-dom";

export const PaymentContainer = styled.section`
  background-color: #c7e6f8;
`;

export const PaymentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1em;
  padding-block: 7em;
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
  font-size: 1.1rem;
  font-weight: 600;
  max-width: 400px;
  line-height: 1.5;

  @media screen and (max-width: 48em) {
    font-size: 1rem;
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
  font-size: 1.1rem;
  padding: 1.5em 2.4em;
  color: #fff;
  border-radius: 0.8em;
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
    font-size: 1rem;
    padding: 1.4em;
  }
`;

export const ImageWrap = styled.figure`
  max-width: 20em;

  @media screen and (max-width: 48em) {
    max-width: 17em;
  }

  @media screen and (max-width: 30em) {
    max-width: 14em;
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Span = styled.span`
  color: #DB4355;
`
