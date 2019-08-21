import React from 'react'

class TodoInput extends React.Component {

    render() {
        const { todoList } = this.props;
        return (
            <ul>
                {todoList.map((listItem) => {      
                    return <li>{listItem.value}</li>
                }
                )}
            </ul>
        )
    }
}
export default TodoInput;