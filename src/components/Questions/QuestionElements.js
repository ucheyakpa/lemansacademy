import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import FAQ from "../../images/FAQ.png";

export const QuestionsContainer = styled.section`
  background-color: #f9f9f9;
  padding-bottom: 3.5em;
  background-image: url(${FAQ});
  background-repeat: no-repeat;
  background-size: 24%;
  background-position: right;
  background-origin: content-box;
`;

export const MainHeading = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  padding: 1em;
  font-family: "Poppins", sans-serif;
  color: #053146;

  @media screen and (max-width: 48em) {
    font-size: 1.6rem;
  }
`;

export const FAQs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-bottom: 5.5em;

  @media screen and (max-width: 30em) {
    padding-bottom: 4em;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(23, 75, 101);
  width: 50%;
  margin: auto;
  padding: 1.2em 2em;
  gap: 1em;
  border-radius: 0.8em;

  @media screen and (max-width: 65em) {
    width: 65%;
  }
  @media screen and (max-width: 48em) {
    width: 90%;
  }
  @media screen and (max-width: 30em) {
    width: 90%;
    padding: 1em 1.4em;
  }
`;

export const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Question = styled.h2`
  font-size: 1.1rem;
  color: #dcdce1;
  line-height: 1.3;

  @media screen and (max-width: 48em) {
    font-size: 1rem;
  }
`;

export const ArrowAnchorDown = styled(IoIosArrowDown)`
  color: #fff;
  font-size: 1.4rem;
  margin-left: 1em;
`;

export const ArrowAnchorFoward = styled(IoIosArrowForward)`
  color: #fff;
  font-size: 1.4rem;
  margin-left: 1em;
`;

export const Answer = styled.p`
  border: 4px solid #c7e6f8;
  padding: 0.7em;
  font-size: 1rem;
  line-height: 1.3;
  color: #dcdce1;
  margin-bottom: 0.8em;
  display: ${({ selected }) => (selected ? "block" : "none")};
  transition: all 400ms cubic-bezier(0.42, 0, 0.58, 1);
`;
