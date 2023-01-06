import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarMenu,
  SidebarRoute,
  SidebarLink,
  SidebarTutor,
  Logo,
  Image,
} from "./SidebarElements";

import logoWhite from "../../images/logo-lemans.png";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    toggle();
    scroll.scrollToTop();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Logo>
        <Image src={logoWhite} />
      </Logo>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarTutor to="/tutor" onClick={toggle && toggleHome}>
            Get a Lesson Tutor
          </SidebarTutor>
          <SidebarLink to="faq" onClick={toggle}>
            FAQ
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to="/start" onClick={toggleHome}>
            Buy a plan
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
