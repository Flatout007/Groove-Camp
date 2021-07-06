import React from 'react';

import {
    Link,
    withRouter,
    NavLink
} from 'react-router-dom';


class ArtistIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { playing: false };

        this.handleFilterSongs = this.handleFilterSongs.bind(this);
        this.handleArtistBio = this.handleArtistBio.bind(this);        
    }
    

    handleArtistBio() {
        return this.props.artist.bio.split('.')[0];
    }

    
    handleFilterSongs() {
        return this.props.songs.filter((ele) => {
            return ele.artist_id === this.props.artist.id;
        });
    }

    
    render() {
        if(!this.handleFilterSongs()[0]) return null;


        return(
          
            <li className='artist-image-item'>
                        <Link style={{textDecoration: 'none'}} to={`/artist/${this.props.artist.id}`}>
                                    <div className='artist-item-text'>
                                        <div className='artist-item-overlay'></div>
                                            <h2 className='artist-name'>{this.props.artist.username}</h2>
                                            <p>{this.handleArtistBio()}</p>
                                    </div>
                                    <div className='artist-item-overlay'></div>
                                {/* <div className='artist-item-text'>
                                </div> */}
                       </Link>

            </li>
            
        )
    }

}

export default withRouter(ArtistIndexItem);

