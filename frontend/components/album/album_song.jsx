


import React from 'react';
import GreetingNav from '../greeting/greeting_container';
import {withRouter, Link} from 'react-router-dom';
import Player from '../player/player';

class ArtistShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {communityTabHover: false, musicTabHover: false};

        this.handleBio = this.handleBio.bind(this);
        this.handleProfilePhoto = this.handleProfilePhoto.bind(this);
        this.handleAlbumPhoto = this.handleAlbumPhoto.bind(this);
    }


    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.requestSongs();
        this.props.requestAllUsers();
        this.props.requestAlbum(this.props.match.params.id);
    }


    handleProfilePhoto() {
        return (
            !this.handleUser().photo ?
                <li className="album-profile-box-img" style={{ background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)' }}></li> :
                <li className="album-profile-box-img" style={{ background: `url(${this.handleUser().photo}) center / cover no-repeat` }}></li>
        );
    }


    handleAlbumPhoto() {
       return ( !this.props.album.photo ? 
                <li style={{ background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)' }} className='album-player-cover'></li> :
                <li style={{ background: `url(${this.props.album.photo}) 100% center / cover no-repeat` }} className='album-player-cover'></li>
       );
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

    
    handleBio() {
        return !this.handleUser().bio.split('.') ?  this.handleUser().bio.split('.')[0] + this.handleUser().bio.split('.')[1] : this.handleUser().bio
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
                        <div style={{background: `url(${this.handleUser().photo}) center / cover no-repeat`}} className='wrapper'>
                        <div className='album-header'>
                                    <li style={{background: `url(${this.handleUser().photo}) 100% center / cover no-repeat`}}className='album-header-img'></li>
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
                                                <h2 className='digital'>Digital Album</h2>
                                                <p className='digital-p'>Includes unlimited streaming via the free Bandcamp app, plus high-<br/>quality download in MP3, FLAC and more.</p>
                                                <div className='album-profile-box'>
                                                            {this.handleProfilePhoto()}
                                                            <Link to={`/album/${this.props.album.id}`}> <button>Discography</button></Link>
                                                            <p className='album-profile-box-bio'>{this.handleBio()}</p>
                                                </div>
                
                                                {this.handleAlbumPhoto()}
                                    </div>
                        </div>

                    <div className='article-footer'>
                        <ul>
                            <a target="_blank" href="https://www.linkedin.com/in/reginald-dunlap-591612202/"></a>
                            <a target="_blank" href="https://github.com/Flatout007"></a>
                            <a target="_blank" href="https://angel.co/u/reggie-dunn"></a>
                        </ul>
                    </div>
                    </div>
        </React.Fragment>
        );

    }
}


export default withRouter(ArtistShow)
