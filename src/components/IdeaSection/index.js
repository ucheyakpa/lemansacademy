import { useState, useEffect } from "react";
import {
  IdeaContainer,
  HeaderText,
  SpanTyping,
  IdeaWrapper,
} from "./IdeaElements";
import Data from "./data";
import SingleIdea from "./SingleIdea";
// import CardSkeleton from "../CardSkeleton";

const Idea = () => {
  // Data
  const [data] = useState(Data);

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Coding", "Graphic Design", "Web Design", "Maths"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

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

  const ideaEl = data.map((item) => <SingleIdea item={item} key={item.id} />);

  return (
    <IdeaContainer>
      <HeaderText>
        Everything you need to learn skills like {""}
        <span style={{ color: "#b6031c" }}>{text}</span>
        <SpanTyping></SpanTyping>
      </HeaderText>

      <IdeaWrapper>
        {/* <CardSkeleton cards={data.length} /> */}
        {ideaEl}
      </IdeaWrapper>
    </IdeaContainer>
  );
};

export default Idea;
