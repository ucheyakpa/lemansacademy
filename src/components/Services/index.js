import { useEffect } from "react";
import Icon1 from "../../images/pricing-img-4.svg";
import Icon2 from "../../images/pricing-img-2.svg";
import Icon3 from "../../images/pricing-img-5.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  HighlightP,
} from "./ServicesElements";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard data-aos="zoom-in-right" data-aos-delay="900">
          <ServicesIcon src={Icon1} alt="Academic Lesson" />
          <ServicesH2>Academic Lessons</ServicesH2>
          <ServicesP>
            Home lesson focused on kids maths ability and general sciences.
          </ServicesP>
          <HighlightP>Online and offline lesson classes</HighlightP>
        </ServicesCard>

        <ServicesCard data-aos="zoom-in-right" data-aos-delay="600">
          <ServicesIcon src={Icon2} alt="Digital Skill" />
          <ServicesH2>Skill Aquisition</ServicesH2>
          <ServicesP>
            Enroll into our tech school for coding, web or grahics design
            classes.
          </ServicesP>
          <HighlightP>Plus Certificate of Completion</HighlightP>
        </ServicesCard>

        <ServicesCard data-aos="zoom-in-right" data-aos-delay="300">
          <ServicesIcon src={Icon3} alt="Mentoring" />
          <ServicesH2>Mentoring</ServicesH2>
          <ServicesP>
            We guide and mentor kids in order to get the best out
            of them.
          </ServicesP>
          <HighlightP>Good perfomance is rewarded</HighlightP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
