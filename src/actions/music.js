import { ADD_MUSIC, CHECK_MUSIC_LIST_ITEM } from '../action-names';

export function addMusic(value){
    return {type:ADD_MUSIC, value: value};
}

export function onCheckMusicListItem(value){
    return {type:CHECK_MUSIC_LIST_ITEM, value: value};
}