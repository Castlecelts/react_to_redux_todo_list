import React from 'react'

class TodoList extends React.Component {


    render() {
        const { todoList } = this.props;

        return (
            <ul>
                {todoList.map((listItem, index) => {
                    return <div>
                        <li key={index} id={listItem.id}>{listItem.value}</li>
                        <input
                            type="checkbox"
                            id={listItem.id}
                            checked={listItem.completed}
                            onClick={(e) => this.props.onCheckListItem(e.target.id)}
                        ></input>
                    </div>
                }

                )}
            </ul>
        )
    }
}
export default TodoList;