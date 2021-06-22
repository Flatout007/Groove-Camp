


import React from 'react';
import GreetingNav from '../greeting/greeting_container';
import {withRouter, Link} from 'react-router-dom';
import Player from '../player/player';

class ArtistShow extends React.Component {

    constructor(props) {
        super(props);
      
    }


    componentDidMount() {
        //   this.props.requestAllUsers().then(() => {this.props.store.entities.users[this.props.match.params.id]})
        window.scrollTo(0, 0);
        this.props.requestSongs();
        this.props.requestAlbum(this.props.match.params.id);
    }

    
    handleAnotherSongs() {
        return this.handleFilterSongsById().map(ele => {
            return ele
        });
    }


    render() {
        if (!this.props.songs[0]) return null;
        if (!this.props.album) return null;
        if (!this.props.album.id) return null;
        

        return (<div>
            <GreetingNav />
            <div className='album-header'>
                <li className='album-header-img'></li>
                <div className='album-header-nav'>
                    <ol>
                        <li><Link to={`/album/${this.props.album.id}`}>music</Link></li>
                        <li><p>community</p></li>
                    </ol>

                </div>
                <div className='album-content'>
                    <div>
                        
                    </div>
                    {/* <div className='album-content-grid'>
                        <li></li>
                        <li></li>
                        <li></li>
                    </div> */}
                    <Player 
                        songs={this.props.songs}
                        requestUser={this.props.requestUser}
                        requestAllUsers={this.props.requestAllUsers}
                        artist={this.props.artist}
                        // deleteAlbum={}
                    />
                    <ul>
                       
                    </ul>
                    <div className='album-profile-box'>

                    </div>
                </div>
           
                

            

            </div>)

            {/* content div */}



            {/* <p>{this.props.album.title}</p> */}
            {/* <button onClick={() => this.props.deleteAlbum(this.props.album.id)}>delete</button> */}
        </div>);
    }
}


export default withRouter(ArtistShow)
