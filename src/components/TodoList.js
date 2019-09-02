import React from 'react'

class TodoList extends React.Component {

    render() {
        const { todoList } = this.props;
        return (
            <ul>
                {todoList.map((listItem) => {      
                    return <div>
                    <li>{listItem.value}</li><input type="checkbox" checked={listItem.completed}></input>
                    </div>
                }
                )}
            </ul>
        )
    }
}
export default TodoList;