


import React from 'react';
import AlbumIndexItem from './album_index_item';
import GreetingNav from '../greeting/greeting_container';
import AlbumShowItem from '../album/album_show_item';

import {withRouter, Link} from 'react-router-dom';

class AlbumShow extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = { communityTabHover: false, musicTabHover: false };

        this.handleUser = this.handleUser.bind(this);
        this.handleBio = this.handleBio.bind(this);
        this.handleProfilePhoto = this.handleProfilePhoto.bind(this);
    }


    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.requestAllUsers();
        this.props.requestAlbum(this.props.match.params.id);
       
        setTimeout(() => this.props.requestAlbums(), 500);

    }


    handleProfilePhoto() {
        return (
            !this.handleUser().photo ?
                <li className="album-profile-box-img" style={{ background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)' }}></li> :
                <li className="album-profile-box-img" style={{ background: `url(${this.handleUser().photo}) center / cover no-repeat` }}></li>
        );
    }


    handleBio() {
        return !this.handleUser().bio.split('.') ? this.handleUser().bio.split('.')[0] + this.handleUser().bio.split('.')[1] : this.handleUser().bio;
    }

    

    handleFilterAlbums() {
        return this.props.albums.filter((ele) => { return ele.artist_id === this.props.album.artist_id});
    }


    handleAlbumItems() {
       return this.handleFilterAlbums().map((ele) => {
           return <AlbumShowItem
                key={ele.id}
                album={ele}
           />

        }) 
    }

    handleUser() {
        let arr = [];


        this.props.users.forEach((ele) => {
            if (ele.id === this.props.album.artist_id) {
                arr.push(ele);
            }
        })


        return arr[0];
    }


    render() {
        if (!this.props.album) return null;
        if (!this.props.albums[0]) return null;
        if(!this.handleUser()) return null;
      

        let communityTab = this.state.communityTabHover ? <div className='profile-hover'></div> : <div></div>
        let musicTab = this.state.musicTabHover ? <div className='profile-hover2'></div> : <div></div>

        
        return (
        <div>
            <GreetingNav/>
            <div className='album-header'>
                        <li style={{background: `url(${this.handleUser().photo}) center / cover no-repeat`}} className='album-header-img'></li>
                                    <div className='artist-header-nav'>
                                                <ol>                 
                                                            <li onMouseEnter={() => this.setState({ musicTabHover: true })} onMouseLeave={() => this.setState({ musicTabHover: false })}><Link to={`/album/songs/${this.props.album.id}`}>music</Link>{musicTab}</li>
                                                            <li onMouseEnter={() => this.setState({ communityTabHover: true })} onMouseLeave={() => this.setState({ communityTabHover: false })}><p>community</p>{communityTab}</li>
                                                </ol>
                                    
                                    </div>
                                    <div className='album-content'>
                                                <div className='album-content-grid'>
                                               
                                                         {this.handleAlbumItems()}

                                                </div>
                                                <div className='album-profile-box'>
                                                            {/* <img src={this.handleUser().photo} alt="" /> */}
                                                            {this.handleProfilePhoto()}
                                                           
                                                            <Link to={`/album/${this.props.album.id}`}> <button>Discography</button></Link>
                                                            <p className='album-profile-box-bio'>{this.handleBio()}</p>
                                                        </div>
                                    </div> 
            </div>
            <div className='article-footer'>
                    <ul>
                        <a target="_blank" href="https://www.linkedin.com/in/reginald-dunlap-591612202/"></a>
                        <a target="_blank" href="https://github.com/Flatout007"></a>
                        <a target="_blank" href="https://angel.co/u/reggie-dunn"></a>
                    </ul>
                </div>
        </div>);
    }
}


export default withRouter(AlbumShow)
