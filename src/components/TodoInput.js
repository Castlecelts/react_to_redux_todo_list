import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo as addTodoAction} from '../actions/todo';

const TodoInput= () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('hello');

    const handleClearInput = () => {
        setInputValue('');
    }

    const handlePress = (keyCode) => {
        const ENTER_KEY = 13;
        if (keyCode === ENTER_KEY) {
            dispatch(addTodoAction(inputValue))
            handleClearInput()
        }
    }
    return (
        <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => handlePress(e.keyCode)}
        />
    )
}

export default TodoInput;

// connect this component with react-redux - DONE
// refactor this component with hooks & react-redux hooks - DONE