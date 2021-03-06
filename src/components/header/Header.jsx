import React, { useRef } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "../../redux/actions/TodoActions";
import RandomMessage from "./random-message/RandomMessage";
import { VisibilityFiltersEnum } from "../../constants/VisibilityFiltersEnum";
import styled from "styled-components";
import "./header.scss";

const InputField = styled.input`
    flex: 9;
    padding: 1rem 0 1rem 1rem;
    font-size: 1.2rem;
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
`
const Header = () => {
    const dispatch = useDispatch();
    const inputField = useRef(null);

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (!inputField.current.value.trim()) {
            return
        }
        dispatch(addTodo(mappedTask()));
        inputField.current.value = '';
    }

    const mappedTask = () => ({
        value: inputField.current.value,
        id: `${inputField.value}_${Math.random()}`,
        status: VisibilityFiltersEnum.Uncomplete
    })

    return (
        <>
            <RandomMessage />
            <div className="action-add_wrapper">
                <form onSubmit={handleSubmitForm}>
                    <InputField type="text" ref={inputField} placeholder="Enter a task..." data-input="add-task-input" />
                    <AddButton type="submit"><span>+</span></AddButton>
                </form>
            </div>
        </>
    )
}

export default Header;