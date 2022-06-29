import styled from "styled-components";
import { connect } from "react-redux/es/exports";
import { removeTodo } from "../../../redux/actions/TodoActions";
import './task.scss';

const TaskContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .8rem 1rem;
    background-color: #FFF;
    color:  var(--dark-green);
    &:last-of-type{
        border-bottom: 0;
    }
`

const Task = ({ todo, dispatch }) => {

    const handleRemoveTodo = () => {
        dispatch(removeTodo({ id: todo.todoId }))
    }

    return (
        <TaskContainer>
            <p className="task-name">{todo.todoName}</p>
            <div className="action-controllers">
                <button onClick={handleRemoveTodo}>🗑️</button>
            </div>
        </TaskContainer>
    )
}

export default connect()(Task);