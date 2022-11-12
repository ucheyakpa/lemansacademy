import { useState } from "react";
import { Button } from "../ButtonElements";
import heroImg from "../../images/learning-child.jpg";
import teacher from "../../images/home-tutor.png";
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
  TopImage,
  Image
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <TopImage>
        <Image color="red" width="100px" height="100px" src={teacher} />
      </TopImage>
      <HeroContent>
        <HeroH1>Learn, Skillup & Grow</HeroH1>
        <HeroP>
          Home lesson and acquisition of relevant tech 
          skills for kids and teenagers
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
        <HeroImage width="360px" height="360px" src={heroImg} />
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default HeroSection;
