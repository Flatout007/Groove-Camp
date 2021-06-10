import React from 'react';
import ArtistProfileIndexItem from './artist_profile_index_item';


class ArtistProfileIndex extends React.Component {
    componentDidMount() {
        this.props.requestAllUsers();
        this.props.requestSongs();
       
    }

    constructor(props) {
        super(props);
        this.artistProfileList = this.artistProfileList.bind(this);
    }

    artistProfileList() {
        return this.props.users.map((ele) => {
            if (ele.username === 'FLOW' || ele.username === 'ONE OK ROCK' ) {
                return <ArtistProfileIndexItem
                    key={ele.id}
                    artist={ele}
                    albums={this.props.albums.filter(album => ele.id === album.artist_id)}
                    songs={this.props.songs.filter(song => song.artist_id === ele.id)}
                />
            }
        })
    }


    render() {
        if (!this.props.albums) return null;
        if (!this.props.songs) return null;


        return (
                <div className='artist-profile-index-container'>

                <audio onLoadedMetadata={this.handleDuration} preload='metadata' onTimeUpdate={this.handleSeekBar} className="player__audio audio viewer">
                    <source src={null} type="audio/mpeg" data-trackid="0"/>
                </audio>
              
                <div className='artist-profile-index-title'>UPCOMING BANDCAMP ARTISTS</div>
                            <div className='artist-profile-index-flex'>
                            <div className='artist-profile-index-grid'>
                                    
                                        {this.artistProfileList()}
                                           
                            </div>
                    </div>
                </div>
        )
    }
};


export default ArtistProfileIndex;