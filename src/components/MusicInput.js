import React from 'react'
import { connect } from 'react-redux';

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
        const { onNewMusicListItem } = this.props;
        if (keyCode === ENTER_KEY) {
            onNewMusicListItem(this.state.value)
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

export default connect(mapStateToProps)(MusicInput);