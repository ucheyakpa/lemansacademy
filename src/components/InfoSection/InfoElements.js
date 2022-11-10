import styled from "styled-components";
import edutech from "../../images/edutech.jpeg";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#1C202F")};

  @media screen and (max-width: 48em) {
    padding: 3em 0;
  }
`;

export const InfoWrapper = styled.div`
  padding-inline: 2em;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  justify-content: center;
  gap: 6em;
  align-items: center;
  padding-block: 8em;

  @media screen and (max-width: 48em) {
    flex-direction: column;
    padding-block: 6em;
  }

  @media screen and (max-width: 30em) {
    padding-block: 4em;
  }
`;

export const Column1 = styled.div`
  max-width: 28em;
`;

export const Column2 = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 48em) {
    justify-content: center;
    text-align: center;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 0.5em;
  font-size: 1.8rem;
  line-height: 1.4;
  font-family: "Poppins";
  color: ${({ lightText }) => (lightText ? "#fff" : "#053146")};

  @media screen and (max-width: 48em) {
    font-size: 1.6rem;
  }
`;

export const Text = styled.p`
  margin-bottom: 1.5em;
  font-size: 1.1rem;
  line-height: 1.4em;
  max-width: 420px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  
  @media screen and (max-width: 48em) {
    font-size: 1rem;
    line-height: 1.3em;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 48em) {
    justify-content: center;
  }
`;

export const ImgWrap = styled.div`
  max-width: 20em;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${edutech});
  padding: 1em 0.5em;
  border-radius: 10px;
  box-shadow: 8px 8px 0px 0px rgba(199, 230, 248, 1);
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 4em;

  @media screen and (max-width: 48em) {
    padding-block: 3.6em;
  }

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${edutech});
    box-shadow: 8px 8px 0px 0px rgba(199, 230, 248, 0.7);
    transform: rotate(45deg);
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 48em) {
      transform: rotate(0deg);
    }
  }

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Img = styled.img`
  width: 60%;
  transition: all 0.5s ease-in-out;

  ${ImgWrap}:hover & {
    transform: rotate(-45deg);
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 48em) {
      transform: rotate(0deg);
    }
  }
`;
