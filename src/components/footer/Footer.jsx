import {useSelector, useDispatch} from 'react-redux'
import { changeTodoListView } from "../../redux/actions/TodoActions";
import { VisibilityFiltersEnum } from '../../constants/VisibilityFiltersEnum';
import "./footer.scss";


const Footer = () => {
    const dispatch = useDispatch();
    const visibility = useSelector((state) => state.visibilityReducer)
    const todos = useSelector((state) => state.todoReducer)

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

export default Footer;