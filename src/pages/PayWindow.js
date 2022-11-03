import styled from "styled-components";
import paystack from "../images/paystack-logo.svg";
import whatsapp from "../images/whatsapp.png";
import call from "../images/call.png";
import { BsCreditCardFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.section`
  height: 100vh;
  background-color: #c7e6f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-inline: 1em;
  overflow: hidden;
`;

const PayHeader = styled.h2`
  margin-bottom: 1.6em;
  font-size: 1.6rem;
  text-align: center;

  @media screen and (max-width: 48em) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 30em) {
    font-size: 1.2rem;
  }
`;

const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.4em;
  padding: 1em;
  border-radius: 5px;
  color: #000;

  @media screen and (max-width: 30em) {
    height: 68px;
  }

  &:first-child {
    gap: 4em;

    @media screen and (max-width: 26em) {
      gap: 1em;
    }
  }

  & p {
    font-size: 1.2rem;
    margin-left: 1.6em;
    text-align: center;

    @media screen and (max-width: 26em) {
      margin-left: 1em;
    }
  }
`;

const Image = styled.img`
  width: 11%;

  @media screen and (max-width: 30em) {
    width: 9.6%
  }
`;

const PayStackImage = styled.img`
  width: 50%;
  flex: 1;
  cursor: pointer;
  object-fit: cover;
  @media screen and (max-width: 30em) {
    max-width: 46%;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  align-items: center;
`;

const Card = styled(BsCreditCardFill)`
  font-size: 2rem;
  flex: 1;
`;

const Span = styled.span`
  flex: 1;
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 0.6em;

  @media screen and (max-width: 26em) {
    display: none;
  }
`;

const Home = styled(FaHome)`
  position: absolute;
  top: 30px;
  left: 40px;
  font-size: 3rem;
  color: #053146;

  @media screen and (max-width: 30em) {
    left: 30px;
    font-size: 2.4rem;
  }
`;

const ExternalLink = styled.a`
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.4em;
  padding: 1em;
  border-radius: 5px;
  cursor: pointer;
  color: #000;

  & p {
    font-size: 1.2rem;
    margin-left: 1.6em;
    text-align: center;

    @media screen and (max-width: 30em) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 26em) {
      margin-left: 1em;
    }
  }
`;

const PayWindow = () => {
  return (
    <Container>
      <Link to="/">
        <Home />
      </Link>
      <PayHeader>Select a payment method</PayHeader>
      <PaymentWrapper>
        <ImageContainer>
          <PayStackImage src={paystack} alt="CARD" />
          <CardWrapper>
            <Card />
            <Span>Card</Span>
          </CardWrapper>
        </ImageContainer>

        <ExternalLink
          href="https://api.whatsapp.com/send?phone=2348021468329"
          target="_blank"
        >
          <Image src={whatsapp} alt="WhatsApp" />
          <p>Chat on whatsapp to pay</p>
        </ExternalLink>

        <ExternalLink href="tel:+2348021468329" target="_blank">
          <Image src={call} alt="CALL-IMAGE" />
          <p>Place a call to pay</p>
        </ExternalLink>
      </PaymentWrapper>
    </Container>
  );
};

export default PayWindow;
