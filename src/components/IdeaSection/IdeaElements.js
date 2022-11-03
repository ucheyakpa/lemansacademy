import styled from "styled-components";

export const IdeaContainer = styled.section`
  background: #fff;
  padding-top: 1.5em;
  padding-bottom: 7em;
  padding-inline: 8em;

  @media screen and (max-width: 48em) {
    padding-inline: 4em;
  }
`;

export const HeaderText = styled.h1`
  color: #053146;
  font-size: 1.8rem;
  font-family: "poppins", sans-serif;
  font-weight: 600;
  border-top: 2.5px solid #999;
  border-bottom: 2.5px solid rgba(153, 153, 153, 0.3);
  padding-block: 0.6em;

  @media screen and (max-width: 48em) {
    font-size: 1.4rem;
    line-height: 1.4;
    text-align: center;
  }

  @media screen and (max-width: 30em) {
    font-size: 1.2rem;
  }
`;

export const SpanTyping = styled.span`
  background: #053146;
  margin-left: 6px;
  padding: 3px;
`;

export const IdeaWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
  margin-top: 3em;

  @media screen and (max-width: 30em) {
    grid-template-columns: 1fr;
  }
`;

export const IdeaContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;

  @media screen and (max-width: 71em) {
    flex-direction: column;
    justify-content: center;
    gap: 2em;
  }

  @media screen and (max-width: 48em) {
    gap: 0.5em;
    &:first-child {
      gap: 1em;
    }

    &:last-child {
      gap: 0.1em;
    }
  }
`;

export const IdeaImage = styled.div`
  width: 8em;

  @media screen and (max-width: 30em) {
    width: 7em;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const IdeaText = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  max-width: 22.5em;

  @media screen and (max-width: 48em) {
    text-align: center;
  }
`;

export const Heading = styled.h2`
  color: #053146;
  margin-bottom: 0.4em;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: "poppins", sans-serif;

  @media screen and (max-width: 48em) {
    font-size: 1.2rem;
  }
`;

export const Para = styled.p`
  color: #918e9b;
  font-size: 1.15rem;
  line-height: 1.3;

  @media screen and (max-width: 48em) {
    font-size: 1rem;
  }
`;
