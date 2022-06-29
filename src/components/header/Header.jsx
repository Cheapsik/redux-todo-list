import React, { useRef } from "react";
import { connect } from "react-redux/es/exports";
import { addTodo } from "../../redux/actions/TodoActions";
import RandomMessage from "./random-message/RandomMessage";
import styled from "styled-components";
import "./header.scss";

const InputField = styled.input`
    flex: 9;
    padding: 1rem 0 1rem 1rem;
    font-size: 1rem;
    outline: none;
    background-color: #FFF;
    color: var(--darker-green);
    border: 0;
    `
const AddButton = styled.button`
    flex: 1;
    padding: .5rem 0;
    background-color: #FFF;
    font-size: 1.5rem;
    border: 0;
    border-left: .1rem solid var(--green);
    &:hover{
        color: var(--green);
        cursor: pointer;
    }
    &::after{
        content: '+';
    }
`
const Header = ({ dispatch }) => {
    const inputField = useRef(null);

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (!inputField.current.value.trim()) {
            return
        }
        mappedTask()
        dispatch(addTodo(mappedTask()));
        inputField.current.value = '';
    }

    const mappedTask = () => ({
        value: inputField.current.value,
        id: `${inputField.value}_${Math.random()}`
    })

    return (
        <>
            <RandomMessage />
            <div className="action-add_wrapper">
                <form onSubmit={handleSubmitForm}>
                    <InputField type="text" ref={inputField} placeholder="Enter a task..." data-input="add-task-input" />
                    <AddButton type="submit" />
                </form>
            </div>
        </>
    )
}

export default connect()(Header);