import React from 'react';
import ArtistProfileIndexItem from './artist_profile_index_item';


class ArtistProfileIndex extends React.Component {
    componentDidMount() {
        return this.props.requestAllUsers();
    }

    constructor(props) {
        super(props);
        this.artistProfileList = this.artistProfileList.bind(this);
    }


    artistProfileList() {
       
    }


    render() {

        return (
                <div className='artist-profile-index-container'>
                <div className='artist-profile-index-title'>UPCOMING BANDCAMP ARTISTS</div>
                        <div className='artist-profile-index-flex'>
                        <div className='artist-profile-index-grid'>
                            {/* artistProfileIndexItem */}
                                <li>
                                        <div className='artist-stats'>
                                            {/* <h4>{this.props.album.title}</h4> */}
                                            <h5>
                                        
                                            The Cause Of It All
                                        
                                        
                                        
                                            {/* <span>by {this.props.album.title}</span> */}
                                            </h5>
                                            {/* make a random number for this */}
                                        </div>
                                </li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>

                        </div>

                    </div>

                </div>
        

        )
    }
};

export default ArtistProfileIndex;