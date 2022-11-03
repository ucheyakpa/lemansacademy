import styled from "styled-components";

export const ContactSection = styled.section`
  background: #c7e6f8;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding-top: 6em;
  padding-inline: 12em;

  @media screen and (max-width: 75em) {
    padding-inline: 6em;
    gap: 0.1em;
  }
  @media screen and (max-width: 50em) {
    padding-inline: 3.5em;
  }
  @media screen and (max-width: 48em) {
    flex-direction: column;
    gap: 1.2em;
    padding-top: 5em;
    padding-inline: 2.5em;
  }
  @media screen and (max-width: 30em) {
    padding-inline: 2em;
  }
  @media screen and (max-width: 20em) {
    padding-inline: 1em;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;

  @media screen and (max-width: 30em) {
    padding: 0.6em;
  }
  @media screen and (max-width: 30em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.figure`
  max-width: 18em;

  @media screen and (max-width: 30em) {
    max-width: 10em;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fff;
  margin-bottom: -6em;
  z-index: 1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media screen and (max-width: 48em) {
    width: 100%;
  }
`;

export const FormHeader = styled.h2`
  color: #053146;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.2em;

  @media screen and (max-width: 48em) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 30em) {
    font-size: 1.2rem;
  }
`;

export const ImageHead = styled(FormHeader)`
  font-size: 2.2rem;
  font-family: "Poppins";
  line-height: 1.2;
  padding-right: 1em;

  @media screen and (max-width: 48em) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 30em) {
    text-align: center;
    font-size: 1.25rem;
    margin-left: 1em;
  }
`;

export const ImageP = styled.p`
  font-size: 1.2rem;
  margin-block: 0.5em;
  
  @media screen and (max-width: 30em) {
    text-align: center;
    font-size: 1rem;
    margin-block: 1em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  padding: 2em;

  @media screen and (max-width: 30em) {
    padding: 1.6em;
  }
  @media screen and (max-width: 20em) {
    padding: 1em;
  }
`;

export const Input = styled.input`
  padding: 0.6em;
  border: none;
  background-color: #f0f0f0;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  border: none;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 0.8em;
  height: 6em;
  resize: none;
  outline: none;
  font-size: 1rem;
  width: 100%;
`;

export const Button = styled.input`
  padding: 0.8em;
  border-radius: 5px;
  margin-top: 0.4em;
  cursor: pointer;
  background-color: #053146;
  font-size: 1.4rem;
  color: #fff;
  border: none;
  
  @media screen and (max-width: 30em) {
    padding: 0.7em;
    font-size: 1.2rem;
  }

  &:hover {
    scale: 0.99;
    background: linear-gradient(
      148deg,
      rgba(45, 98, 122, 1) 6%,
      rgba(14, 70, 97, 1) 34%,
      rgba(5, 48, 69, 1) 66%,
      rgba(5, 48, 69, 1) 100%
    );
    transition: all 300ms ease-in-out;
  }
`;

export const Label = styled.label`
  margin-bottom: -0.6em;
  font-size: 1.1rem;

  @media screen and (max-width: 30em) {
    font-size: 1rem;
  }
`;

export const Select = styled.select`
  padding-block: 0.5em;
  border: none;
  outline: none;
  border-bottom: 4px solid #999;
  font-size: 1.1rem;
  line-height: 2;
  background: transparent;
  padding-block: 0.5em;

  @media screen and (max-width: 30em) {
    font-size: 1rem;
  }
`;

export const Option = styled.option`
  background: #484e50;
  color: #fff;
  font-size: 1rem;
`;

export const Alert = styled.p`
  background-color: #04d060;
  color: #fff;
  padding-block: 1em;
  padding-inline: 0.6em;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;

  @media screen and (max-width: 30em) {
    font-size: 1rem;
  }
`;
