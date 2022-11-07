import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 5px;
  background: ${({ primary }) => (primary ? "#053146" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "1.1em 2.2em" : "1em 1.6em")};
  color: ${({ dark }) => (dark ? "#c7e6f8" : "#fff")};
  font-size: ${({ fontbig }) => (fontbig ? "1.16rem" : "1.2rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#053146")};
    color: ${({ dark }) => (dark ? "#000" : "#fff")};
  }

  @media screen and (max-width: 48em) {
    font-size: 1rem;
  }
`;

export const HomeButton = styled(Button)`
  padding-block: 1em;
  padding-inline: 3em;
  color: "#fff";
  font-size: 1.2rem;
  background: linear-gradient(
    148deg,
    rgba(45, 98, 122, 1) 6%,
    rgba(14, 70, 97, 1) 34%,
    rgba(5, 48, 69, 1) 66%,
    rgba(5, 48, 69, 1) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: 0.3s;

  &:hover {
    background: #053146;
  }

  @media screen and (max-width: 48em) {
    padding-inline: 2em;
    font-size: 1.1rem;
  }
`;
