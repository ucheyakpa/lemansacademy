import styled, { keyframes } from "styled-components";
import { SiChatbot } from "react-icons/si";

const scale = keyframes`
 0%{
  transform: scale(1);
 }
 50%{
  transform: scale(0.9);
 }
 100%{
  transform: scale(1);
 }
`;

const ChatContainer = styled.div`
  color: red;
  height: 100px;
  width: 100px;
  animation: ${scale} linear 2s infinite;
  background: linear-gradient(
    148deg,
    rgba(45, 98, 122, 1) 6%,
    rgba(14, 70, 97, 1) 34%,
    rgba(5, 48, 69, 1) 66%,
    rgba(5, 48, 69, 1) 100%
  );
  border-radius: 50%;
  color: #fff;
  position: fixed;
  right: 0em;
  bottom: 3em;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #053146;
  }

  @media screen and (max-width: 48em) {
    height: 90px;
    width: 90px;
  }
  @media screen and (max-width: 30em) {
    height: 74px;
    width: 74px;
  }
`;

const ChatLink = styled.a`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Span = styled.span`
  font-size: 1rem;
  font-weight: 700;

  @media screen and (max-width: 30em) {
    font-size: 0.8rem;
  }
`;

const ChatBox = styled(SiChatbot)`
  font-size: 2.5em;

  @media screen and (max-width: 30em) {
    font-size: 1.6rem;
  }
`;

const Chat = () => {
  return (
    <ChatContainer>
      <ChatLink href="https://api.whatsapp.com/send?phone=2348021468329">
        <Span>Chat us</Span>
        <ChatBox />
      </ChatLink>
    </ChatContainer>
  );
};

export default Chat;
