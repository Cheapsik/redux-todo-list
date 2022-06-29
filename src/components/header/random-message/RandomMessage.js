import React, { useReducer, useEffect } from "react";
import styled from "styled-components";

const Message = styled.h2`
  padding: 1.5rem;
  margin: 1rem 0;
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 2rem); 
`;
const messagesList = [
  "Hello! 🎉",
  "What's up today? 😊",
  "Let me remember it. 💪",
  "What news, sir? 😎",
];

const reducer = () => {
  const randomItem =
    messagesList[Math.floor(Math.random() * messagesList.length)];
  return randomItem;
};

const RandomMessage = () => {
  const [randomMessage, dispatch] = useReducer(reducer);

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <>
      <Message>{randomMessage}</Message>
    </>
  );
};

export default RandomMessage;
