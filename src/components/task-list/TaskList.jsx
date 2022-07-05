import React from "react";
import { useSelector } from "react-redux";
import Task from './task/Task';
import { VisibilityFiltersEnum } from '../../constants/VisibilityFiltersEnum';
import './task-list.scss';

const TaskList = () => {
    const todosList = useSelector((state) => state.todoReducer);
    const visibilityFilter = useSelector((state) => state.visibilityReducer);

    const returnFilteredTodosList = () => {
        switch (visibilityFilter) {
            case VisibilityFiltersEnum.All:
                return todosList ?
                    todosList.map((todo) => <li key={todo.todoId}><Task todo={todo} /></li>) :
                    null
            case VisibilityFiltersEnum.Uncomplete:
                return todosList ?
                    todosList.map((todo) => todo.todoStatus === VisibilityFiltersEnum.Uncomplete && <li key={todo.todoId}><Task todo={todo} /></li>) :
                    null
            case VisibilityFiltersEnum.Complete:
                return todosList ?
                    todosList.map((todo) => todo.todoStatus === VisibilityFiltersEnum.Complete && <li key={todo.todoId}><Task todo={todo} /></li>) :
                    null
            default:
                break;
        }
    }

    return (
        <div className="tasklist-wrapper">
            <ul>
                {returnFilteredTodosList()}
            </ul>
        </div>
    )
}

export default TaskList;