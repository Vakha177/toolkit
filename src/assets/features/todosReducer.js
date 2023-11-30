import { createReducer, createAction } from "@reduxjs/toolkit"
const initialState = {
    todos: [{id:1 , text:'V' , completed:false}] ,
}

 export const addTodo = createAction('addTodo')
export const removeTodo = createAction('removeTodo')


 export const todosReducer = createReducer(initialState , (builder) => {
    builder
    .addCase(addTodo , (state , action) => {
        state.todos.push({ 
            id: action.payload.id , 
            text: action.payload.text ,
             completed: false})
    })
    .addCase(removeTodo,(state , action)=> {
        state.todos = state.todos.filter((todos)=> {
            return todos.id !== action.payload
        })
    })
} )