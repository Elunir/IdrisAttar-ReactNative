import {FETCH_TODO_REQUEST, ADD_TODO, DELETE_TODO} from './actionTypes';
import {FetchTodoRequest, AddTodoRequest, DeleteTodoRequest} from './types';

export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
});

export const addTodo = (title: string): AddTodoRequest => ({
  type: ADD_TODO,
  title,
});

export const deleteTodo = (id: number): DeleteTodoRequest => ({
  type: DELETE_TODO,
  id,
});
