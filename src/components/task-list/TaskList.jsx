import React from "react";
import { connect } from "react-redux/es/exports";
import Task from './task/Task';
import './task-list.scss';

const TaskList = ({ todosList }) => {
    return (
        <div className="tasklist-wrapper">
            <ul>
                {
                    todosList ?
                        todosList.map((todo) => <li key={todo.todoId}><Task todo={todo} /></li>) :
                        null
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        todosList: state.todoReducer
    })

}

export default connect(mapStateToProps)(TaskList);