import React from 'react'
import { connect } from 'react-redux';

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
        const { onNewTodoListItem } = this.props;
        if (keyCode === ENTER_KEY) {
            onNewTodoListItem(this.state.value)
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

export default connect(mapStateToProps)(TodoInput);

// connect this component with react-redux