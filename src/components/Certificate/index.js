import {
  CertWrapper,
  CertHeader,
  ImageWrapper,
  CertImage,
  CertInfo,
  Para,
} from "./CertElements";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import Cert from "../../images/certificate.png";

const Certificate = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <CertWrapper>
      <ImageWrapper>
        <CertImage src={Cert} alt="CERTIFICATE" />
      </ImageWrapper>
      <CertInfo>
        <CertHeader>CERTIFICATION</CertHeader>
        <Para>
          Certificate is issued after completing a tech skill 
          on our platform. Click on get started
        </Para>
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
    </CertWrapper>
  );
};

export default Certificate;
