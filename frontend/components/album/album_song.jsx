


import React from 'react';
import GreetingNav from '../greeting/greeting_container';
import {withRouter, Link} from 'react-router-dom';
import Player from '../player/player';

class ArtistShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {communityTabHover: false, musicTabHover: false};
    }


    componentDidMount() {
        //   this.props.requestAllUsers().then(() => {this.props.store.entities.users[this.props.match.params.id]})
        window.scrollTo(0, 0);
        this.props.requestSongs();
        this.props.requestAlbum(this.props.match.params.id);
        this.props.requestAllUsers();
    }

    handleUser() {
        let arr = [];


        this.props.users.forEach((ele) => {
            if(ele.id === this.props.album.artist_id) {
                arr.push(ele);
            }
        })


        return arr[0];
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
        if(!this.handleUser()) return null;

        let communityTab = this.state.communityTabHover ? <div className='profile-hover'></div> : <div></div>
        let musicTab =  this.state.musicTabHover ? <div className='profile-hover2'></div> : <div></div>
        

        return (
            <React.Fragment>
                        <GreetingNav />
                        <div className='wrapper'>
                        <div className='album-header'>
                                    <li className='album-header-img'></li>
                                    <h2 className='album-title-profile'>{this.props.album.title}</h2>
                                    <h3 className='song-title-profile'>by {this.handleUser().username}</h3>
                                    <div className='album-header-nav'>
                                                <ol>
                                                            <li onMouseEnter={() => this.setState({ musicTabHover: true })} onMouseLeave={() => this.setState({ musicTabHover: false })}><Link to={`/album/${this.props.album.id}`}>music</Link>{musicTab}</li>
                                                            <li onMouseEnter={() => this.setState({ communityTabHover: true })} onMouseLeave={() => this.setState({ communityTabHover: false })}><p>community</p>{communityTab} </li>
                                                </ol>
                                    </div>
                                    <div className='album-content'>
                                                <Player 
                                                    songs={this.props.songs}
                                                    requestUser={this.props.requestUser}
                                                    requestAllUsers={this.props.requestAllUsers}
                                                    artist={this.props.artist}
                                                />
                                                <div className='album-profile-box'></div>
                                    </div>
                        </div>
                    </div>
        </React.Fragment>
        );

    }
}


export default withRouter(ArtistShow)
