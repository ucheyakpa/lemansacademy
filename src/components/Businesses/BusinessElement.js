import styled from "styled-components";

export const BusinessContainer = styled.section`
  background: #fff;
  padding: 0 1.5em;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 1.4em;

  @media screen and (max-width: 48em) {
    gap: 1em;
  }
`;

export const ImageContainer = styled.div`
  width: 6.6em;
  opacity: 0.4;

  @media screen and (max-width: 48em){
    width: 6em;
  }

  @media screen and (max-width: 30em){
    width: 4.5em;
  }
`;

export const BusinessImage = styled.img`
  width: 100%;
`;
