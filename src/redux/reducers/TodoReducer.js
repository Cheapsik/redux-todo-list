export const todoReducer = (state = [], action) => {
    switch(action.type){
        case "TODO_ADD":
            state.push({
                todoName: action.value,
                todoId: action.id
            });
            return [
                ...state,
            ]
        case "TODO_REMOVE":
            state = state.filter((todo) => todo.todoId !== action.id )
            return [
                ...state,
            ]
        default:
            return state;
    }
};