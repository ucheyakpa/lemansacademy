import { CertWrapper, ImageWrapper, CertImage, CertInfo } from "./CertElements";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import Cert from "../../images/certificate.png";

const Certificate = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <CertWrapper>
      <CertInfo>
        <p>
          Certificate of completion is issued after getting
          a skill at Lemans Tech School. Click on get started.
        </p>
        <Button
          to="/start"
          primary="true"
          dark="true"
          big="false"
          fontbig="true"
          onClick={toggleHome}
        >
          Get Started
        </Button>
      </CertInfo>
      <ImageWrapper>
        <CertImage src={Cert} alt="CERTIFICATE" />
      </ImageWrapper>
    </CertWrapper>
  );
};

export default Certificate;
