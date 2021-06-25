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


    handleArtistLimit() {
        return this.props.albums.filter((ele, idx) => { return idx < 5 });
    }


    artistProfileList() {
        return this.handleArtistLimit().map((ele, idx) => {
            return <ArtistProfileIndexItem
                key={ele.id}
                album={ele}
                users={this.props.users}
                songs={this.props.songs}
            />

        })
    }

//album

    handleAlbumLimit() {
        return this.props.albums.filter((ele, idx) => { return idx > 5 });
    }



    artistAlbumList() {
        return this.handleAlbumLimit().map((ele, idx) => {
            if (ele.title !== 'GO Way! EP');
            return <ArtistProfileIndexItem
                key={ele.id}
                album={ele}
                users={this.props.users}
                songs={this.props.songs}
            />

        })
    }


    render() {
        if (!this.props.albums) return null;
        if (!this.props.songs) return null;


        return (
            <div className='artist-profile-index-wrapper'>
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
                <div className='new-and-notable-container'>

                    <audio onLoadedMetadata={this.handleDuration} preload='metadata' onTimeUpdate={this.handleSeekBar} className="player__audio audio viewer">
                        <source src={null} type="audio/mpeg" data-trackid="0" />
                    </audio>

                    <div className='artist-profile-index-title'>NEW AND NOTABLE</div>
                    <div className='artist-profile-index-flex'>
                        <div className='artist-profile-index-grid'>

                            {this.artistAlbumList()}

                        </div>
                    </div>
                </div>
            </div>
                
        )
    }
};


export default ArtistProfileIndex;