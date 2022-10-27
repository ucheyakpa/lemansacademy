import { useEffect } from "react";
import {
  QuestionWrapper,
  QuestionHeader,
  Question,
  ArrowAnchorFoward,
  ArrowAnchorDown,
  Answer,
} from "./QuestionElements";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleQuestion = ({ question, answer, toggle, selected, index }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <QuestionWrapper data-aos="fade-up-left" data-aos-delay={`400` * index}>
      <QuestionHeader onClick={() => toggle(index)}>
        <Question>{question}</Question>
        {selected === index ? <ArrowAnchorFoward /> : <ArrowAnchorDown />}
      </QuestionHeader>
      <Answer selected={selected === index}>{answer}</Answer>
    </QuestionWrapper>
  );
};

export default SingleQuestion;
