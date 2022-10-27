import {
  PaymentContainer,
  PaymentWrapper,
  PaymentWrap,
  Para,
  Button,
  ImageWrap,
  Image,
} from "./PayElements";
import Learning from "../../images/learning.png";
import { animateScroll as scroll } from "react-scroll";

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
            Start Learning now, to enjoy premium 
            benefits exclusive for kids.
          </Para>
          <Button to="/start" onClick={toggleHome}>BUY A PLAN NOW</Button>
        </PaymentWrap>
      </PaymentWrapper>
    </PaymentContainer>
  );
};

export default Payment;
