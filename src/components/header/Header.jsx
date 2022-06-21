import React from "react";
import RandomMessage from "./random-message/RandomMessage";
import styled from "styled-components";
import "./header.scss";

const InputField = styled.input`
    flex: 9;
    padding: 1rem 0 1rem 1rem;
    font-size: 1rem;
    outline: none;
    background-color: var(--dark-green);
    color: white;
    border: 0;
    ::placeholder{
        color: #CCC;
    }
    `
const AddButton = styled.button`
    flex: 1;
    padding: .5rem 0;
    background-color: var(--dark-green);
    font-size: 1.5rem;
    border: 0;
    &:hover{
        color: #FFF;
        cursor: pointer;
    }
    &::after{
        content: '+';
    }
`
const Header = () => {
    return (
        <>
            <RandomMessage />
            <div className="action-add_wrapper">
                <InputField type="text" placeholder="Enter a task..." data-input="add-task-input" />
                <AddButton />
            </div>
        </>
    )
}

export default Header;