import React from 'react'

class MusicList extends React.Component {

    render() {
        const { musicList } = this.props;

        return (
            <ul>
                {musicList.map((musicList, index) => {
                    return <div>
                        <li key={index} id={musicList.id}>{musicList.value}</li>
                        <input
                            type="checkbox"
                            id={musicList.id}
                            owned={musicList.completed}
                            onClick={(e) => this.props.onCheckMusicList(e.target.id)}
                        ></input>
                    </div>
                })
                }
            </ul>
        )
    }
}
export default MusicList;