import { VisibilityFiltersEnum } from "../../constants/VisibilityFiltersEnum";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "TODO_ADD":
      state.push({
        todoName: action.value,
        todoId: action.id,
        todoStatus: action.status,
      });
      return [...state];
    case "TODO_REMOVE":
      state = state.filter((todo) => todo.todoId !== action.id);
      return [...state];
    case "TODO_SET_COMPLETE":
      state = state.map((todo) => {
        if (todo.todoId === action.id) {
          return {
            ...todo,
            todoStatus: VisibilityFiltersEnum.Complete,
          };
        }
        return todo;
      });
      return [...state];
    default:
      return state;
  }
};
