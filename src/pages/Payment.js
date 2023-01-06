import styled from "styled-components";
import whatsapp from "../images/whatsapp.png";
import call from "../images/call.png";
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
  margin-bottom: 1.85em;
  font-size: 1.6rem;
  text-align: center;

  @media screen and (max-width: 48em) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 30em) {
    font-size: 1.2rem;
  }
`;

const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 14%;

  @media screen and (max-width: 30em) {
    width: 9.6%;
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

const Payment = () => {
  return (
    <Container>
      <Link to="/">
        <Home />
      </Link>
      <PayHeader>Select other payment method</PayHeader>
      <PaymentWrapper>
        <ExternalLink
          href="https://wa.me/message/VBBK4QNTB6W2P1"
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

export default Payment;
