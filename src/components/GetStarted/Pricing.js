import {
  PricingContainer,
  PricingHeading,
  PricingWrapper,
  PriceWrap,
  PriceImage,
  BoxHeading,
  PriceHeading,
  ActionButton,
  PayButton,
  HomeLesson
} from "./GetStartedElements";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import PriceImage2 from "../../images/pricing-img-2.svg";
import PriceImage3 from "../../images/pricing-img-3.svg";
import PriceImage4 from "../../images/pricing-img-4.svg";
import PriceImage5 from "../../images/pricing-img-5.svg";

const Pricing = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <PricingContainer>
      <PricingHeading>Pricing For Online Learning</PricingHeading>
      <PricingWrapper>
        <PriceWrap>
          <BoxHeading>Starter</BoxHeading>
          <PriceImage src={PriceImage5} alt="PriceImage" />
          <PriceHeading>Free Class</PriceHeading>
          <ul>
            <li>Maths & coding Lesson every thursday</li>
            <li>Free Mentoring</li>
            <li>A chance to join our yearly quiz challenge</li>
          </ul>
          <ActionButton
            href="https://classroom.google.com/c/NTU1MzE5OTk0OTQz?cjc=o55bxch"
            target="_blank"
          >
            Start
          </ActionButton>
        </PriceWrap>

        <PriceWrap>
          <BoxHeading>Academic Lesson</BoxHeading>
          <PriceImage src={PriceImage2} alt="PriceImage" />
          <PriceHeading>&#x20A6;12,999/Month</PriceHeading>
          <ul>
            <li>All free starter package</li>
            <li>Weekdays academic home lesson</li>
            <li>Kids support to solve school assignment</li>
            <li>Gift to best performing kid</li>
          </ul>
          <PayButton to="/pay">Pay</PayButton>
        </PriceWrap>

        <PriceWrap>
          <BoxHeading>Tech Skill</BoxHeading>
          <PriceImage src={PriceImage3} alt="PriceImage" />
          <PriceHeading>&#x20A6;13,999/Month</PriceHeading>
          <ul>
            <li>All free starter package</li>
            <li>Learn coding, graphics or web design</li>
            <li>Showcase your skills to the world</li>
            <li>Certificate of Completion</li>
          </ul>
          <PayButton to="/pay">Pay</PayButton>
        </PriceWrap>

        <PriceWrap>
          <BoxHeading>Academic & Skill</BoxHeading>
          <PriceImage src={PriceImage4} alt="PriceImage" />
          <PriceHeading>&#x20A6;20,999/Month</PriceHeading>
          <ul>
            <li>All free starter package</li>
            <li>Academic Lesson & a Tech skill</li>
            <li>Showcase your skills to the world</li>
            <li>Certificate of Completion</li>
          </ul>
          <PayButton to="/pay">Pay</PayButton>
        </PriceWrap>
      </PricingWrapper>
      <Link to="/tutor" onClick={toggleHome}>
        <HomeLesson>OR get a home lesson tutor</HomeLesson>
      </Link>
    </PricingContainer>
  );
};

export default Pricing;
