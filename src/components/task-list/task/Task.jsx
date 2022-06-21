import styled from "styled-components";
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

const Task = () => {

    return (
        <TaskContainer>
            <p className="task-name">Siemano</p>
            <div className="action-controllers">
                <button>🗑️</button>
            </div>
        </TaskContainer>
    )
}

export default Task;