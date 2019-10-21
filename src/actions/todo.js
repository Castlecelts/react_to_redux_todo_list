import { ADD_TODO, CHECK_LIST_ITEM } from '../action-names';

export function addTodo(value){
    return {type:ADD_TODO, value: value};
}

export function onCheckListItem(value){
    return {type:CHECK_LIST_ITEM, value: value};
}