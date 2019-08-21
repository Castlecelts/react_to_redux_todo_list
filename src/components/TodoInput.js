import React from 'react'

class TodoInput extends React.Component {
    // add local state - DONE
    // track the input value in the local state - DONE
    // when input key pressed is ENTER KEY call the onChange for the parent - DONE
    // clean the input field - TODO
    

    constructor(props){
        super(props);
        this.state = { value: ''};
    }
    
    
    handleChange(value){
        this.setState({ value })
    }
    handlePress(keyCode){
        const ENTER_KEY = 13;
        const {onNewTodoListItem} = this.props;
        if (keyCode === ENTER_KEY){
            onNewTodoListItem(this.state.value)
        }
    }
    render(){
        return(
        <input onChange={(e) => this.handleChange(e.target.value)} onKeyDown={(e) => this.handlePress(e.keyCode)}></input>
        )
    }
}
export default TodoInput;