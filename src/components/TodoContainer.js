import React from 'react'

import TodoInput from './TodoInput';
import TodoList from './TodoList';
import MusicInput from './MusicInput';
import MusicList from './MusicList';
import update from 'immutability-helper';

import { connect } from 'react-redux';


// TRY TO REFACTOR TO REDUX
// HOOKS 

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    // onCheckListItem(event) {
    //     // const { todoList } = this.state;
    //     // const selectedItem = todoList.findIndex( x => x.id === event)
    //     // const newTodoList = update(todoList, {[selectedItem]: {$merge: {completed: !todoList[selectedItem].completed} }})


    //     // this.setState( { todoList: newTodoList } )
    // }

    onNewMusicListItem(listItem) {

    }

    onCheckMusicItem(event) {

    }
    render() {
        console.log('props', this.props)

        return (
            <>
                <h1>Todo List</h1>
                <TodoInput
                    onNewTodoListItem={(listItem) => this.onNewTodoListItem(listItem)}
                />
                <TodoList
                    // onCheckListItem={(listItem) => this.onCheckListItem(listItem)}
                />
                <h1>Music List</h1>
                <MusicInput
                    onNewMusicListItem={(musicItem) => this.onNewMusicListItem(musicItem)}
                />
                <MusicList
                    onCheckListItem={(musicItem) => this.onCheckListItem(musicItem)
                    }
                />
            </>
        )
    }
}

//dispatch events 1 action per event type (check, add, remove a todo)

export default TodoContainer;