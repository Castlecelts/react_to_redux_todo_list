import { ADD_MUSIC } from '../action-names';

export function addMusic(value){
    return {type:ADD_MUSIC, value: value};
}