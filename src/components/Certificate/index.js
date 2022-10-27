import { useEffect } from "react";
import { CertWrapper, ImageWrapper, CertImage, CertInfo } from "./CertElements";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import Cert from "../../images/certificate.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Certificate = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <CertWrapper>
      <CertInfo data-aos="fade-right">
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
      <ImageWrapper data-aos="flip-up" data-aos-delay="400">
        <CertImage src={Cert} alt="CERTIFICATE" />
      </ImageWrapper>
    </CertWrapper>
  );
};

export default Certificate;
