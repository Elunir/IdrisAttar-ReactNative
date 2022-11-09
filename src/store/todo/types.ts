import {ADD_TODO, DELETE_TODO, FETCH_TODO_REQUEST} from './actionTypes';

export interface ITodo {
  id: number;
  title: string;
}

export interface TodoState {
  todos: ITodo[];
}

export interface FetchTodoRequest {
  type: typeof FETCH_TODO_REQUEST;
}

export interface AddTodoRequest {
  type: typeof ADD_TODO;
  title: string;
}

export interface DeleteTodoRequest {
  type: typeof DELETE_TODO;
  id: number;
}

export type TodoActions = FetchTodoRequest | AddTodoRequest | DeleteTodoRequest;
