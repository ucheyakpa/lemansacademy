import {
  FaBar,
  Nav,
  NavbarContainer,
  NavLogo,
  LogoImage,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksRoute,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../images/logo-plain.png";
import logoTwo from "../../images/logo.png";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(0);

  const changeNav = () => {
    if (window.scrollY >= 90) {
      setScrollNav(1);
    } else {
      setScrollNav(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollnav={scrollNav} onScroll={changeNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome} scrollnav={scrollNav}>
              <LogoImage loading="lazy" src={scrollNav ? logoTwo : logo} alt="LOGO" />
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBar scrollnav={scrollNav} />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-90}
                  scrollnav={scrollNav}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-89}
                  scrollnav={scrollNav}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinksRoute
                  to="/tutor"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-90}
                  scrollnav={scrollNav}
                  onClick={toggleHome}
                  id="tutor-btn"
                >
                  Get a Lesson Tutor
                </NavLinksRoute>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="faq"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-90}
                  scrollnav={scrollNav}
                >
                  FAQ
                </NavLinks>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink to="/start" onClick={toggleHome}>
                Buy a Plan
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
