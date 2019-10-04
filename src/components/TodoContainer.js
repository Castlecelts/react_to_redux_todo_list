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

    onNewTodoListItem(listItem) {
        //listItem - 'abc'
        // state todoList: [{value: "buy shopping", completed: false}]
        // { todoList: [{value: "buy shopping", completed: false}, { value: "abc", completed: false}]}
        // this.setState({ todoList: [...this.props.todoList, {id: Math.random(), value: listItem, completed: false}] })
    }

    onCheckListItem(event) {
        // const { todoList } = this.state;
        // const selectedItem = todoList.findIndex( x => x.id === event)
        // const newTodoList = update(todoList, {[selectedItem]: {$merge: {completed: !todoList[selectedItem].completed} }})


        // this.setState( { todoList: newTodoList } )
    }

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
                    todoList={this.props.todos}
                    onCheckListItem={(listItem) => this.onCheckListItem(listItem)
                    }
                />
                <h1>Music List</h1>
                <MusicInput
                    onNewMusicListItem={(musicItem) => this.onNewMusicListItem(musicItem)}
                />
                <MusicList
                    musicList={this.props.musics}
                    onCheckListItem={(musicItem) => this.onCheckListItem(musicItem)
                    }
                />
            </>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
    musics: state.musics
});

//dispatch events 1 action per event type (check, add, remove a todo)

export default connect(mapStateToProps)(TodoContainer);