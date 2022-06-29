export const addTodo = (payload) => ({
    type: "TODO_ADD",
    id: payload.id,
    value: payload.value
})

export const removeTodo = (payload) => ({
    type: "TODO_REMOVE",
    id: payload.id,
    value: payload.value
})