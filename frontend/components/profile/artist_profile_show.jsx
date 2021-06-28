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

            />

        })
        
    }


    render() {
        if(!this.props.albums[0]) return null;
        if(!this.props.user) return null;
    
        return(
           
        <div>
            <GreetingNav />
            <div className='album-header'>
                <li style={{background: `url(${this.props.user.photo}) center / cover no-repeat`}} className='album-header-img'></li>
                <div className='album-header-nav'>
                    <ol>
                        {/* <li>music</li>
                                <li onClick={() => this.props.history.push(`/album/songs/${this.props.album.id}`)}>community</li> */}
                        {/* <li><Link to={`/album/songs/${this.props.album.id}`}>music</Link></li> */}
                        {/* <li><p>community</p></li> */}
                    </ol>

                </div>
                <div className='album-content'>
                    <div className='album-content-grid'>
                        {/* albumIndexItem */}
                        {this.handleUsersAlbums()}

                       

                    </div>
                    <div className='album-profile-box'>
                            <img src={this.props.user.photo} alt="" />
                            <button>Discography</button>
                            <p className='album-profile-box-bio'>{this.props.user.bio.split('.')[0] + this.props.user.bio.split('.')[1]}</p>
                    </div>
                </div>

            </div>

          
        </div>);
    }
}


export default withRouter(ArtistProfileShow);