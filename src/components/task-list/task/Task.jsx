import { useDispatch } from "react-redux/es/exports";
import styled from "styled-components";
import { removeTodo, setCompleteTodo } from "../../../redux/actions/TodoActions";
import { VisibilityFiltersEnum } from '../../../constants/VisibilityFiltersEnum';
import PropTypes from 'prop-types'
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

const Task = (props) => {
    const todo  = props.todo;
    const dispatch = useDispatch();
    
    const handleRemoveTodo = () => {
        dispatch(removeTodo({ id: todo.todoId }))
    }

    const handleSetComplete = () => {
        dispatch(setCompleteTodo({ id: todo.todoId, status: VisibilityFiltersEnum.Complete }))
    }

    return (
        <TaskContainer>
            <p className="task-name" style={{
                textDecoration: todo.todoStatus === VisibilityFiltersEnum.Complete && 'line-through'
            }}>{todo.todoName}</p>
            <div className="action-controllers">
                {todo.todoStatus === VisibilityFiltersEnum.Uncomplete ?
                    <button onClick={handleSetComplete}>✔️</button> :
                    null
                }
                <button onClick={handleRemoveTodo}>🗑️</button>
            </div>
        </TaskContainer>
    )
}

Task.propTypes = {
    todo: PropTypes.object
  };

export default Task;