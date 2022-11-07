import {
  ActionContainer,
  ActionWrapper,
  AllActions,
  ActionHeader,
  OnlineActions,
  ImageContainer,
  Para,
  Image,
  LinkRoute,
  OfflineActions,
  ActionImage,
  ActionImageContainer,
} from "./ActionElements";
import action from "../../images/onOff.png";
import home from "../../images/home-lesson.png";
import online from "../../images/onlineLesson.png";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Actions = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <ActionContainer>
      <AllActions>
        <ActionHeader>Every child's need is covered</ActionHeader>
        <ActionWrapper>
          <OnlineActions>
            <ImageContainer>
              <Image src={online} />
            </ImageContainer>
            <Para>Chech our online learning plans</Para>
            <Link to="/start" onClick={toggleHome}>
              <LinkRoute>Buy Online Plan</LinkRoute>
            </Link>
          </OnlineActions>

          <OfflineActions>
            <ImageContainer>
              <Image src={home} />
            </ImageContainer>
            <Para>For physical classes</Para>
            <Link to="/tutor" onClick={toggleHome}>
              <LinkRoute>Get a Home Lesson Tutor</LinkRoute>
            </Link>
          </OfflineActions>
        </ActionWrapper>
      </AllActions>

      <ActionImageContainer>
        <ActionImage src={action} />
      </ActionImageContainer>
    </ActionContainer>
  );
};

export default Actions;