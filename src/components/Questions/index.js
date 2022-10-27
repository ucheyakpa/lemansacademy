import { useState } from "react";
import Data from "./data";
import SingleQuestion from "./SingleQuestion";
import { QuestionsContainer, MainHeading, FAQs } from "./QuestionElements";

const Questions = () => {
  const [data] = useState(Data);
  const [selected, setSelected] = useState(false);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <QuestionsContainer id="faq">
      <MainHeading>Frequently Asked Questions</MainHeading>
      <FAQs>
        {data.map((info, index) => (
          <SingleQuestion
            {...info}
            key={index}
            toggle={toggle}
            selected={selected}
            index={index}
          />
        ))}
      </FAQs>
    </QuestionsContainer>
  );
};

export default Questions;
