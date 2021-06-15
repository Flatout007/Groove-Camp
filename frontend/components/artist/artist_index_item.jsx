import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
} from 'react-router-dom';


/* 
// html model 
<li className='artist-weekly-img-1'>
    <div className='artist-overlay'></div>
    <div className='artist-overlay-hover'>image1</div>
    <a>
        <div>
            <h3></h3>
            <h4></h4>
        </div>
    </a>
</li> 

Export an `ArtistIndexItem` presentational component that takes in an `artist`
 The component should render an `li` containing the following:

1. A link to the artist's show page with text of the artist name or any other details needed.
*/

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
                <Link to={`/artist/${this.props.artist.id}`}>{this.props.artist.username}</Link>
                {/* <button onClick={this.props.history.push(`/artist/${this.props.artist.id}`)}>{this.props.artist.username}</button> */}

                <div className='artist-overlay'></div>
                <div className='artist-overlay-hover'></div>
               {/* <Link to={`artists/${this.props.artist.id}`}> */}
               <a>
                    <div className='img-link-div'>
                        <h3></h3>
                        <h4></h4>
                    </div>
                  {/* </Link> */}
                </a>
              </li>
            
        )
    }

}

export default withRouter(ArtistIndexItem);

