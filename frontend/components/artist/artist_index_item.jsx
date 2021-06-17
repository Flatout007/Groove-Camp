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
        
        
    }
    
    componentWillMount() {
        // this.handleFilterSongs();
        // let audio = document.querySelector('.audio');
        // let source = audio.querySelector('source');

        // setTimeout(() => {
        //     source.src = this.handleFilterSongs()[0].audioUrl;
        //     audio.load();

        // }, 200);

        // this.props.fetchUser(this.handleFilterSongs()[0].artist_id);
        // let audio = document.querySelector('.audio');
        // let source = audio.querySelector('source');
        // let songTitle = document.querySelector('.weekly-player-text h2');
        // let bio = document.querySelector('.weekly-player-text h5');
        // let artistName = document.querySelector('.weekly-player-text p');

        
        // if(document.readyState === 'complete') {
            
            
        //     setTimeout(() => {source.src = this.handleFilterSongs()[0].audioUrl; 
        //         audio.load();
        //         songTitle.innerHTML = this.handleFilterSongs()[0].title;

        //     }, 200);
            

            
        //     // bio.innerHTML = this.handleFilterSongs()[0].title;
        //     // artistName.innerHTML = this.handleFilterSongs()[0].title;


        //     // fetch user by this.handleFilterSongs()[0].artist_id
        //     // then set html for bio and artistName

        // }

    //  console.log(this.props.artist.id)
    }

    

    handleFilterSongs() {
            return this.props.songs.filter((ele) => {
                return ele.artist_id === this.props.artist.id;
            });
    }

    
    render() {
        if(!this.handleFilterSongs()[0]) return null;

        
        // let songTitle = document.querySelector('.weekly-player-text h2');
        // let bio = document.querySelector('.weekly-player-text h5');
        // let artistName = document.querySelector('.weekly-player-text p');

        // songTitle.innerHTML = this.handleFilterSongs()[0].title;
       

        

        


        // if (document.readyState !== 'complete') return null;

        return(
          
            <li>
                        <Link style={{textDecoration: 'none'}} to={`/artist/${this.props.artist.id}`}>
                                    <div className='artist-item-text'>
                                        <div className='artist-item-overlay'></div>
                                            <h2>{this.props.artist.username}</h2>
                                            <p>{/*bio trim*/}ispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumispumis</p>
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

