import { useState } from "react";
import styled from "styled-components";
import LOGO from "../images/logo.png";
import { Link } from "react-router-dom";

const LogoContainer = styled.figure`
  width: 4em;
  background-color: ${({ bgColor }) => (bgColor ? "transparent" : "#f9f9f9")};

  @media screen and (max-width: 30em) {
    width: 3em;
  }
`;

const LogoImgage = styled.img`
  max-width: 100%;
`;

const Logo = () => {
  const [bgColor] = useState(true);

  return (
    <LogoContainer bgColor={bgColor}>
      <Link to="/">
        <LogoImgage src={LOGO} atl="LOGO" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
