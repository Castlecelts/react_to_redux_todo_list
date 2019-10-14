import { ADD_TODO } from '../action-names';

export function addTodo(value){
    return {type:ADD_TODO, value: value};
}

