import { useEffect } from "react";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import {
  Column1,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  BtnWrap,
  Text,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  headline,
  darkText,
  descripion,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  fade,
}) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 data-aos="slide-up">
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Text darkText={darkText}>{descripion}</Text>
                <BtnWrap>
                  <Button
                    to="/start"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    onClick={toggleHome}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2 data-aos={fade ? "fade-left" : "fade-right"}>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
