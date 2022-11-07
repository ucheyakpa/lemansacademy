import {
  PaymentContainer,
  PaymentWrapper,
  PaymentWrap,
  Para,
  Button,
  ImageWrap,
  Image,
  Span,
} from "./PayElements";
import Learning from "../../images/onlineSkool.png";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const Payment = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <PaymentContainer id="pay">
      <PaymentWrapper>
        <ImageWrap>
          <Image src={Learning} alt="LearningImage" />
        </ImageWrap>
        <PaymentWrap>
          <Para>
            Buy an online plan with all benefits OR{" "} 
            <Link to="/tutor" onClick={toggleHome}>
              <Span>Request for a Home Lesson Tutor</Span>
            </Link>{" "}
            for offline classes.
          </Para>
          <Button to="/start" onClick={toggleHome}>
            BUY A PLAN NOW
          </Button>
        </PaymentWrap>
      </PaymentWrapper>
    </PaymentContainer>
  );
};

export default Payment;
