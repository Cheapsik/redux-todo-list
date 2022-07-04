export const addTodo = (payload) => ({
    type: "TODO_ADD",
    id: payload.id,
    value: payload.value,
    status: payload.status
})

export const removeTodo = (payload) => ({
    type: "TODO_REMOVE",
    id: payload.id,
    value: payload.value
})

export const setCompleteTodo = (payload) => ({
    type: "TODO_SET_COMPLETE",
    id: payload.id,
    status: payload.status
})

export const changeTodoListView = (payload) => ({
    type: "TODO_CHANGE_VIEW",
    status: payload.value
})