import styled from "styled-components";

// Certificate section
export const CertHeader = styled.h2`
  margin-bottom: 0.5em;
  color: #c7e6f8;
  font-size: 1.8rem;
  letter-spacing: 1px;

  @media screen and (max-width: 48em) {
    font-size: 1.52rem;
  }
`;

export const CertWrapper = styled.div`
  background-color: #1c202f;
  display: flex;
  gap: 6em;
  padding-block: 7em;
  padding-inline: 2em;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 48em) {
    flex-direction: column-reverse;
    gap: 4em;
  }
  @media screen and (max-width: 30em) {
    padding-top: 6em;
  }
`;

export const ImageWrapper = styled.figure`
  max-width: 24em;
  background-color: #c7e6f8;
  border-radius: 15px;
  box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.1);
`;

export const CertImage = styled.img`
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.1);
  transition: 0.3s;
`;

export const CertInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 360px;

  @media screen and (max-width: 30em) {
    gap: 1em;
    align-items: center;
  }
`;

export const Para = styled.p`
  font-size: 1.1rem;
  padding-bottom: 1.4em;
  color: #fff;
  line-height: 1.4;

  @media screen and (max-width: 48em) {
    font-size: 1rem;
  }
  @media screen and (max-width: 30em) {
    text-align: center;
  }
`;
