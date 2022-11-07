import styled, { keyframes } from "styled-components";

export const ActionContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2em;
  padding: 8em 2em;
  background: #f9f9f9;

  @media screen and (max-width: 63em) {
    flex-direction: column;
  }
  @media screen and (max-width: 30em) {
    padding-bottom: 6em;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5em;

  @media screen and (max-width: 30em) {
    flex-direction: column;
  }
`;

export const AllActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ActionHeader = styled.h2`
  margin-bottom: 1.6em;
  text-align: center;
  font-family: "Lobster", cursive;
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: 1.1px;
  color: #053146;

  @media screen and (max-width: 48em) {
    font-size: 1.6rem;
  }
  
  @media screen and (max-width: 30em) {
    font-size: 1.48rem;
    max-width: 240px;
  }
`;

export const OnlineActions = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.8em;
  gap: 0.8em;
`;

export const OfflineActions = styled(OnlineActions)``;

export const ImageContainer = styled.div`
  max-width: 110px;
`;

export const Para = styled.p`
  text-align: center;
  font-size: 1rem;
`;

export const ActionImageContainer = styled.div`
  max-width: 500px;
`;

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  25%{
    transform: rotate(6deg);
  }
  50%{
    transform: rotate(-6deg);
  }
  75%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;

export const ActionImage = styled.img`
  width: 100%;
  animation: ${rotate} 2s infinite;
`;

export const Image = styled.img`
  width: 100%;
`;

export const LinkRoute = styled.button`
  color: #c7e6f8;
  background-color: #053146;
  padding: 0.9em 1.2em;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: linear-gradient(
      148deg,
      rgba(45, 98, 122, 1) 6%,
      rgba(14, 70, 97, 1) 34%,
      rgba(5, 48, 69, 1) 66%,
      rgba(5, 48, 69, 1) 100%
    );
  }
`;
