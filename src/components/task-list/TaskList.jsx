import React from "react";
import { connect } from "react-redux/es/exports";
import Task from './task/Task';
import { VisibilityFiltersEnum } from '../../constants/VisibilityFiltersEnum';
import './task-list.scss';

const TaskList = ({ todosList, visibilityFilter }) => {

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

const mapStateToProps = (state) => {
    return ({
        todosList: state.todoReducer,
        visibilityFilter: state.visibilityReducer
    })

}

export default connect(mapStateToProps)(TaskList);