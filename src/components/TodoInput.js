import React from 'react'
import { connect } from 'react-redux';
import { addTodo as addTodoAction} from '../actions/todo';

class TodoInput extends React.Component {
    // add local state - DONE
    // track the input value in the local state - DONE
    // when input key pressed is ENTER KEY call the onChange for the parent - DONE
    // clean the input field - DONE


    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange(value) {
        this.setState({ value });
    }

    handleClearInput() {
        this.setState({ value: '' });
    }

    handlePress(keyCode) {
        const ENTER_KEY = 13;
        if (keyCode === ENTER_KEY) {
            this.props.addTodo(this.state.value)
            this.handleClearInput()
        }
    }
    render() {
        return (
            <input
                value={this.state.value}
                onChange={(e) => this.handleChange(e.target.value)}
                onKeyDown={(e) => this.handlePress(e.keyCode)}>
            </input>
        )
    }
}

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = {
    addTodo: addTodoAction,
}

// function addTodo(value){
//  return { type: 'ADD_TODO', value }
// }

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);

// connect this component with react-redux - DONE