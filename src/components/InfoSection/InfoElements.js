import styled from "styled-components";

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

  @media screen and (max-width: 30em) {
    justify-content: center;
    text-align: center;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 0.5em;
  font-size: 2.2rem;
  line-height: 1.4;
  font-family: "Poppins";
  color: ${({ lightText }) => (lightText ? "#fff" : "#053146")};

  @media screen and (max-width: 30em) {
    font-size: 1.6rem;
    line-height: 1.2;
  }
`;

export const Text = styled.p`
  margin-bottom: 1.5em;
  font-size: 1.2rem;
  line-height: 1.4em;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 30em) {
    font-size: 1.1rem;
    line-height: 1.25em;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 30em) {
    justify-content: center;
  }
`;

export const ImgWrap = styled.div`
  max-width: 37em;
  height: 100%;

  @media screen and (max-width: 71em) {
    min-width: 26em;
  }
  @media screen and (max-width: 48em) {
    min-width: 16em;
  }
`;

export const Img = styled.img`
  width: 100%;
  padding: 1em 0.5em;
  border-radius: 10px 60px 10px 60px;
  border: 6px solid #c7e6f8;
`;
