import "./footer.scss";
import { connect } from "react-redux/es/exports";
import { changeTodoListView } from "../../redux/actions/TodoActions";
import { VisibilityFiltersEnum } from '../../constants/VisibilityFiltersEnum';


const Footer = ({ dispatch, visibility, todos }) => {

    const handleChangeDisplayTodos = (type) => {
        dispatch(changeTodoListView({ value: type }))
    }

    const mapActionButtons = () => {

        const filterValues = Object.values(VisibilityFiltersEnum);
        return filterValues.map((filter, index) => {
            const filteredTodos = todos.map((todo) => todo.todoStatus === filter ? todo : null).filter((f) => f);
            return (
                <>
                    <button className={filter === visibility ? 'active' : null} key={index + 'asdgasdg'} onClick={() => handleChangeDisplayTodos(filter)}>{filter}
                        {
                            filter === VisibilityFiltersEnum.All ?
                                <span>{todos.length}</span> :
                                <span>{filteredTodos.length}</span>
                        }
                    </button>
                </>
            )

        }
        );
    }

    return (
        <div className="footer_wrapper">
            {mapActionButtons()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        visibility: state.visibilityReducer,
        todos: state.todoReducer
    })
}

export default connect(mapStateToProps)(Footer);