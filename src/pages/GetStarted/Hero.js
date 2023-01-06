import Logo from "../../components/LogoElements";
import IMG from "../../images/bg-1.png";
import {
  HeroContainer,
  HeroHeader,
  Para,
  Info,
  Image,
  Rounded,
  Header,
  LemansHeader,
  LogoContainer
} from "./GetStartedElements";

const Hero = () => {
  return (
    <HeroContainer>
      <Header>
        <LogoContainer>
          <Logo bgColor="true" />
        </LogoContainer>
        <LemansHeader>Lemans Academy</LemansHeader>
      </Header>
      <Info>
        <HeroHeader>Simple & Straightforward</HeroHeader>
        <Para>
          Every child can start on our free plan — no debit or credit card
          required.
        </Para>
      </Info>
      <Image src={IMG} alt="IMG" />
      <Rounded></Rounded>
    </HeroContainer>
  );
};

export default Hero;
