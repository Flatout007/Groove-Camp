


import React from 'react';
import GreetingNav from '../greeting/greeting_container';
import {withRouter, Link} from 'react-router-dom';
import Player from '../player/player'

class ArtistShow extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {

        //   this.props.requestAllUsers().then(() => {this.props.store.entities.users[this.props.match.params.id]})
        this.props.requestSongs();
        this.props.requestAlbum(this.props.match.params.id)
        
        
        //return this.props.requestUser(this.props.artist.id)


    }


    render() {
        if (!this.props.songs) return <p>Loading</p>;
        if (!this.props.album) return <p>Loading</p>;
        const songArray = this.props.songs.map((ele) => {return ele}).filter((ele) => {
               return ele.album_id === this.props.album.id
        });
       

        return (<div>
            <GreetingNav />
            <div className='album-header'>
                <li className='album-header-img'></li>
                <div className='album-header-nav'>
                    <ol>
                        <li><Link to={`/album/${this.props.album.id}`}>music</Link></li>
                        <li>community</li>
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
                     songs={songArray}
                    />
                    <ul>
                       
                    </ul>
                    <div className='album-profile-box'>

                    </div>
                </div>

            </div>

            {/* content div */}



            {/* <p>{this.props.album.title}</p> */}
            {/* <button onClick={() => this.props.deleteAlbum(this.props.album.id)}>delete</button> */}
        </div>);
    }
}


export default withRouter(ArtistShow)
