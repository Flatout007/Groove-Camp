import React from 'react';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
    componentDidMount() {
        this.props.requestSongs();
    }

    constructor(props) {
        super(props);
        // this.songList = this.songList.bind(this);
    }

   

    // songList() {
    //     return this.props.songs.map((ele) => {
    //     return <SongIndexItem
    //                 key={ele.id}
                
    //         />
    //     });
    // }


  render() {
      
        return (<div className='song-outer'>
            {/* {this.songList()} */}

        </div>);
    }
}




export default SongIndex;