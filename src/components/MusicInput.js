import React from 'react'
import { connect } from 'react-redux';
import { addMusic as addMusicAction} from '../actions/music';

class MusicInput extends React.Component {

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
            this.props.addMusic(this.state.value)
            console.log("I'm here", this.state)
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

const mapStateToProps = state => ({ musics: state.musics });

const mapDispatchToProps = {
    addMusic: addMusicAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicInput);