import React from 'react'
import { connect } from 'react-redux';

class TodoList extends React.Component {

    render() {
        const { todos } = this.props;

        return (
            <ul>
                {todos.map((listItem, index) => {
                    return <div>
                        <li key={index} id={listItem.id}>{listItem.value}</li>
                        <input
                            type="checkbox"
                            id={listItem.id}
                            checked={listItem.completed}
                            onClick={(e) => this.props.onCheckListItem(e.target.id)}
                        ></input>
                    </div>
                })
                }
            </ul>
        )
    }
}

const mapStateToProps = state => ({ todos: state.todos });

export default connect(mapStateToProps)(TodoList);
