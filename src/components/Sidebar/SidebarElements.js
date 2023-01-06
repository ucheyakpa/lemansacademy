import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 1999;
  width: 100%;
  height: 100%;
  background: #12141d;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  left: 0;
  transition: all 0.3s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0.6em;
  right: 0.8em;
  background: transparent;
  font-size: 1.6rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 2.2rem;

  @media screen and (max-width: 30em) {
    font-size: 2rem;
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  margin-top: 4em;

  @media screen and (max-width: 30em) {
    margin-top: 2em;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 4em);
  text-align: center;
  gap: 0.5em;

  @media screen and (max-width: 30em) {
    grid-template-rows: repeat(6, 3.2em);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  text-decoration: none;
  list-style: none;
  color: #fff;

  @media screen and (max-width: 30em) {
    font-size: 1.4rem;
  }
`;

export const SidebarTutor = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  text-decoration: none;
  list-style: none;
  color: #fff;

  background: linear-gradient(
    148deg,
    rgba(45, 98, 122, 1) 6%,
    rgba(14, 70, 97, 1) 34%,
    rgba(5, 48, 69, 1) 66%,
    rgba(5, 48, 69, 1) 100%
  );
  border-radius: 2px;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 30em) {
    font-size: 1.4rem;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 0.6em;
  background: #053146;
  white-space: nowrap;
  padding: 0.8em 2em;
  color: #fff;
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 30em) {
    font-size: 1.3rem;
  }
`;

export const Logo = styled.div`
  max-width: 10em;
  position: absolute;
  top: 0.4em;
  left: 0.4em;
`;

export const Image = styled.img`
  width: 100%;
`;
