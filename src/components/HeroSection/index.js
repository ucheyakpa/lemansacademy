import { useState } from "react";
import { Button } from "../ButtonElements";
import heroImg from "../../images/learning-child.jpg";
import {
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroImageContainer,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForword,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>Learn, Skillup & Grow</HeroH1>
        <HeroP>
          Home lesson and acquisition of relevant tech 
          skills for kids and teenagers.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/start"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForword /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      <HeroImageContainer>
        <HeroImage src={heroImg} alt="IMAGE" />
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default HeroSection;
