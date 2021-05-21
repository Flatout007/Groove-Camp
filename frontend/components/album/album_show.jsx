


import React from 'react';
import AlbumIndexItem from './album_index_item';
import GreetingNav from '../greeting/greeting_container';
import {withRouter} from 'react-router-dom';

class AlbumShow extends React.Component {
   
    constructor(props) {
        super(props);
    }


    componentDidMount() {

        //   this.props.requestAllUsers().then(() => {this.props.store.entities.users[this.props.match.params.id]})
        this.props.requestAlbum(this.props.match.params.id)
        //return this.props.requestUser(this.props.artist.id)

    }


    render() {
        if (!this.props.album) return <p>Loading</p>;
        console.log(this.props);
        return (<div>
            <GreetingNav/>
            <div className='album-header'>
                    <li className='album-header-img'></li>
                    <div className='album-header-nav'>
                            <ol>
                                    <li>music</li>
                                <li onClick={() => this.props.history.push(`/album/songs/${this.props.album.id}`)}>community</li>
                            </ol>
                    
                    </div>
                    <div className='album-content'>
                            <div className='album-content-grid'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                            </div>
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


export default withRouter(AlbumShow)
