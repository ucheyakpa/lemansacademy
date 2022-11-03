import {
  QuestionWrapper,
  QuestionHeader,
  Question,
  ArrowAnchorFoward,
  ArrowAnchorDown,
  Answer,
} from "./QuestionElements";

const SingleQuestion = ({ question, answer, toggle, selected, index }) => {
  return (
    <QuestionWrapper>
      <QuestionHeader onClick={() => toggle(index)}>
        <Question>{question}</Question>
        {selected === index ? <ArrowAnchorFoward /> : <ArrowAnchorDown />}
      </QuestionHeader>
      <Answer selected={selected === index}>{answer}</Answer>
    </QuestionWrapper>
  );
};

export default SingleQuestion;
