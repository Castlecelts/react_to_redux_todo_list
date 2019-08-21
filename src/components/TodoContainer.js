import React from 'react'

import TodoInput from './TodoInput';
import TodoList from './TodoList';

// TRY TO REFACTOR TO REDUX
// HOOKS 

class TodoContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoList: [
                {value: "buy shopping", completed: false},
                {value: "second", completed: false},
                {value: "phone home", completed: true},
            ]
        }
    }

    onNewTodoListItem(listItem){
        //listItem - 'abc'
        // state todoList: [{value: "buy shopping", completed: false}]
        // { todoList: [{value: "buy shopping", completed: false}, { value: "abc", completed: false}]}
        this.setState({ todoList: [...this.state.todoList, {value: listItem, completed: false}] })
    }
    render() {
        return (
            <>
                <h1>Todo List</h1>
                <TodoInput 
                onNewTodoListItem={(listItem) => this.onNewTodoListItem(listItem)}
                />
                <TodoList 
                todoList={this.state.todoList}
                />
            </>
        )
    }
}
export default TodoContainer;