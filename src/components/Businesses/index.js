import React from "react";
import {
  BusinessContainer,
  ImageWrapper,
  ImageContainer,
  BusinessImage
} from "./BusinessElement";

import NewYorkTimes from '../../images/new-york-times.svg'
import Atlantic from '../../images/atlantic.svg'
import BusinessInsider from '../../images/business-insider.svg'
import Wired from '../../images/wired.svg'
import Slack from '../../images/slack.svg'

const Business = () => {
  return (
    <BusinessContainer>
      <ImageWrapper>
        <ImageContainer>
          <BusinessImage loading="lazy" src={NewYorkTimes} alt='New York Times' />
        </ImageContainer>

        <ImageContainer>
          <BusinessImage loading="lazy" src={Atlantic} alt='atlantic' />
        </ImageContainer>

        <ImageContainer>
          <BusinessImage loading="lazy" src={BusinessInsider} alt='businessInsider' />
        </ImageContainer>

        <ImageContainer>
          <BusinessImage loading="lazy" src={Wired} alt='Wired' />
        </ImageContainer>

        <ImageContainer>
          <BusinessImage loading="lazy" src={Slack} alt='Slack' />
        </ImageContainer>
      </ImageWrapper>
    </BusinessContainer>
  );
};

export default Business;
