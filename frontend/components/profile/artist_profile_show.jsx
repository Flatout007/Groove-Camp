import React from 'react';
import GreetingNav from '../greeting/greeting_container';
import ArtistProfileItem from  './artist_profile_item';
import {withRouter} from 'react-router-dom';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


class ArtistProfileShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleUsersAlbums = this.handleUsersAlbums.bind(this);
        this.handleBio = this.handleBio.bind(this);
        this.state = {render: 0, state: null} 
    }


    componentDidMount() {
        this.props.requestUser(this.props.match.params.id);
        this.props.requestAlbums();

    }

    filterAlbums() {
        return this.props.albums.filter(ele => parseFloat(this.props.match.params.id) === parseFloat(ele.artist_id));
    }


    handleUsersAlbums() {
       return this.filterAlbums().map((ele) => {
           return <ArtistProfileItem
                key={ ele.id}
                album={ele}
                deleteAlbum={this.props.deleteAlbum}
                user={this.props.user}
                albums={this.props.albums}
                currentUser={this.props.currentUser}
                fetchUser={this.props.requestUser}

            />

        })
        
    }

    handleNoAlbums() {
        if(!this.handleUsersAlbums()[0]) {
            return <div>
                <h1 style={{fontSize: '3em', whiteSpace: 'nowrap'}} >YOU HAVE NO ALBUMS.</h1>
            </div>
        }
    }


    handleBio() {
        return !this.props.user.bio.split('.') ? this.props.user.bio.split('.')[0] + this.props.user.bio.split('.')[1] : this.props.user.bio;
    }
    

    render() {
        if(!this.props.albums[0]) return null;
        if(!this.props.user) return null;
    
    
        return(   
        <div>
            <GreetingNav />
            <div className='album-header'>
                <li style={{background: `url(${this.props.user.photo}) center / cover no-repeat`}} className='album-header-img'></li>
                <div className='album-header-nav'></div>
                <div className='album-content'>
                    <div className='album-content-grid'>
                                {this.handleUsersAlbums()}
                                {this.handleNoAlbums()}
                    </div>
                    <div className='album-profile-box'>
                                <img src={this.props.user.photo} alt="" />
                                <button>Discography</button>
                                <p className='album-profile-box-bio'>{this.handleBio()}</p>
                    </div>
                </div>
            </div>
        </div>);
    }
}


export default withRouter(ArtistProfileShow);