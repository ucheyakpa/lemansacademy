import { useState, useEffect } from "react";
import {
  IdeaContainer,
  HeaderText,
  SpanTyping,
  IdeaWrapper,
  IdeaContent,
  IdeaImage,
  Image,
  IdeaText,
  Heading,
  Para,
} from "./IdeaElements";
import GraphicImage from "../../images/graphic-design.png";
import Devices from "../../images/devices.png";
import Tutor from "../../images/tutor2.png";
import Access from "../../images/access.png";

const Idea = () => {
  // Indicates which word is currently displayed on screen
  const [loopNum, setLoopNum] = useState(0);

  // Is the word being typed out or deleted, set to false
  // cos we start by typing the word
  const [isDeleting, setIsDeleting] = useState(false);

  // Words to display on screen
  const toRotate = ["Coding", "Graphic Design", "Web Design", "Maths"];

  // The component needs to know what text we are showing
  // right now, indicates a portion of the word that is
  // being displayed, starting with 'Coding, etc'
  const [text, setText] = useState("");

  // To determine how fast one letter is typed before another
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // How time passes before an extra letter is being typed out
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Unmount Interval
    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let upDatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(upDatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && upDatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && upDatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <IdeaContainer>
      <HeaderText>
        Everything you need to learn skills like {""}
        <span style={{ color: "#b6031c" }}>{text}</span>
        <SpanTyping></SpanTyping>
      </HeaderText>
      <IdeaWrapper>
        <IdeaContent>
          <IdeaImage>
            <Image src={GraphicImage} alt="GRAPHICS" />
          </IdeaImage>
          <IdeaText>
            <Heading>Master the topics</Heading>
            <Para>
              Clear explanation of lessons, practice test 
              and quizes, exams and group learning.
            </Para>
          </IdeaText>
        </IdeaContent>

        <IdeaContent>
          <IdeaImage>
            <Image src={Devices} alt="DEVICES" />
          </IdeaImage>
          <IdeaText>
            <Heading>Learn from any Device</Heading>
            <Para>
              Take your lessons anytime on computer, tablet or mobile device.
            </Para>
          </IdeaText>
        </IdeaContent>

        <IdeaContent>
          <IdeaImage>
            <Image src={Tutor} alt="TUTOR" />
          </IdeaImage>
          <IdeaText>
            <Heading>We have Professional Tutors</Heading>
            <Para>
              Learn from industry experts who are passionate about teaching.
            </Para>
          </IdeaText>
        </IdeaContent>

        <IdeaContent>
          <IdeaImage>
            <Image src={Access} alt="ACCESS" />
          </IdeaImage>
          <IdeaText>
            <Heading>Get Unlimited Access</Heading>
            <Para>
              Subscribe and all lessons remains yours at all time.
            </Para>
          </IdeaText>
        </IdeaContent>
      </IdeaWrapper>
    </IdeaContainer>
  );
};

export default Idea;
