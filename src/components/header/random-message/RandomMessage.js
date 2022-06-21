import React, { useReducer, useEffect } from "react";
import styled from "styled-components";


const Message = styled.h2`
    padding: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
`;
const messagesList = [
    'Hello! 🎉',
    'What\'s up today? 😊',
    'Let me remember it. 💪',
    'What news, sir? 😎',
];

const reducer = () => {
    const randomItem = messagesList[Math.floor(Math.random() * messagesList.length)];
    return randomItem;
};


const RandomMessage = () => {

    const [randomMessage, dispatch] = useReducer(reducer);

    useEffect(() => {
        dispatch();
    }, [])

    return (
        <>
            <Message>{randomMessage}</Message>
        </>
    )
}

export default RandomMessage;