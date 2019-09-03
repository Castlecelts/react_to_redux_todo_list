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
                {id:1, value: "buy shopping", completed: false},
                {id:2, value: "second", completed: false},
                {id:3, value: "phone home", completed: true},
            ]
        }
    }

    onNewTodoListItem(listItem){
        //listItem - 'abc'
        // state todoList: [{value: "buy shopping", completed: false}]
        // { todoList: [{value: "buy shopping", completed: false}, { value: "abc", completed: false}]}
        this.setState({ todoList: [...this.state.todoList, {id: Math.random(), value: listItem, completed: false}] })
    }

    onCheckListItem(event){
        console.log("event:", event)
        console.log("state:", this.state)
        const currentTodoList = [...this.state.todoList]
        const selectedItem = currentTodoList.findIndex( x => x.id == event)
        console.log("test", selectedItem)
        // this.setState( { todoList: [...this.state.todoList, {value: event, completed: true}] } )
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
                onCheckListItem={(listItem) => this.onCheckListItem(listItem)
                }
                />
            </>
        )
    }
}
export default TodoContainer;