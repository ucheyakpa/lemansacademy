import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const FaBar = styled(FaBars)`
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.1em;
  color: ${({ scrollnav }) => (scrollnav ? "fff" : "#c7e6f8")} !important;
`;

export const Nav = styled.nav`
  background: ${({ scrollnav }) =>
    scrollnav ? "rgb(23,75,101)" : "transparent"};
  box-shadow: ${({ scrollnav }) =>
    scrollnav ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" : "transparent"};
  height: 90px;
  margin-top: -90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  z-index: 10;
  position: fixed;
  top: 90px;
  width: 100%;

  @media screen and (max-width: 60em) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 30em) {
    height: 65px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  z-index: 1;
  width: 100%;
  padding-right: 1.6em;
  max-width: 88em;

  @media screen and (max-width: 30em) {
    height: 65px;
  }
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  width: 7em;
  background: ${({ scrollnav }) => (scrollnav ? "#f9f9f9" : "transparent")};

  @media screen and (max-width: 30em) {
    width: 5em;
  }
`;

export const LogoImage = styled.img`
  height: 3.1em;

  @media screen and (max-width: 30em) {
    height: 2.4em;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 48em) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  @media screen and (max-width: 30em) {
    transform: translate(-100%, 50%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-size: 1.4rem;

  @media screen and (max-width: 48em) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 90px;
`;

export const NavLinks = styled(LinkScroll)`
  font-size: 1.25rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #c7e6f8;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 48em) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 0.5rem;
  background: linear-gradient(
    148deg,
    rgba(45, 98, 122, 1) 6%,
    rgba(14, 70, 97, 1) 34%,
    rgba(5, 48, 69, 1) 66%,
    rgba(5, 48, 69, 1) 100%
  );
  white-space: nowrap;
  padding: 0.8em 1.2em;
  color: #fff;
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
