import {ADD_TODO, DELETE_TODO, FETCH_TODO_REQUEST} from './actionTypes';

import {TodoActions, TodoState} from './types';

const initialState: TodoState = {
  todos: [],
};

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
      };
    case ADD_TODO:
      return {
        ...state,
        todo: state.todos.push({
          id: Number(state.todos.length + 1),
          title: action.title,
        }),
      };
    case DELETE_TODO:
      const newTodo = state.todos.filter(todo => todo.id !== action.id);
      state.todos = newTodo;
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
