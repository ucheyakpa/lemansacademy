import { useState, useEffect } from "react";
import {
  SliderContainer,
  HeaderText,
  RightSquare,
  ArrowLeft,
  Header,
  SubHeader,
  SliderWrapper,
  ImageContainer,
  Image,
  Info,
  Name,
  Message,
  RightQuote,
  LeftQuote,
} from "./SliderElements";
import data from "./data";

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <SliderContainer>
      <HeaderText>
        <Header>TESTIMONIALS</Header>
        <SubHeader>What parents are saying about us</SubHeader>
      </HeaderText>
      {people.map((item, peopleIndex) => {
        const { id, image, name, quote } = item;
        let position = "nextSlide";
        if (peopleIndex === index) {
          position = "activeSlide";
        }
        if (
          peopleIndex === index - 1 ||
          (index === 0 && peopleIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <SliderWrapper key={id} className={position}>
            <LeftQuote />
            <RightQuote />
            <ImageContainer>
              <Image src={image} alt="IMG" />
            </ImageContainer>
            <Info>
              <Message>{quote}</Message>
              <Name>{name}</Name>
            </Info>
          </SliderWrapper>
        );
      })}
      <RightSquare onClick={() => setIndex(index + 1)} />
      <ArrowLeft onClick={() => setIndex(index - 1)}/>
    </SliderContainer>
  );
};

export default Slider;
