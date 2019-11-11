import React from 'react'
import { connect } from 'react-redux';
import { onCheckMusicListItem as onCheckMusicListItemAction} from '../actions/music';

class MusicList extends React.Component {

    render() {
        const { musics } = this.props;

        return (
            <ul>
                {musics.map((music, index) => {
                    return <div>
                        <li key={index} id={music.id}>{music.value}</li>
                        <input
                            type="checkbox"
                            id={music.id}
                            owned={music.completed}
                            onClick={(e) => this.props.onCheckMusicListItem(e.target.id)}
                        ></input>
                    </div>
                })
                }
            </ul>
        )
    }
}

const mapStateToProps = state => ({ musics: state.musics });

const mapDispatchToProps = {
    onCheckMusicListItem: onCheckMusicListItemAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);