


import React from 'react';
import AlbumIndexItem from './album_index_item';
import GreetingNav from '../greeting/greeting_container';
import AlbumShowItem from '../album/album_show_item';

import {withRouter, Link} from 'react-router-dom';

class AlbumShow extends React.Component {
   
    constructor(props) {
        super(props);
    }


    componentDidMount() {      
        this.props.requestAlbum(this.props.match.params.id);
       
        setTimeout(() => this.props.requestAlbums(), 500);

      
    }


    

    handleFilterAlbums() {
        // console.log(this.props.album.artist_id)
        return this.props.albums.filter((ele) => { return ele.artist_id === this.props.album.artist_id})
    }


    handleAlbumItems() {
       return this.handleFilterAlbums().map((ele) => {
           return <AlbumShowItem
                key={ele.id}
                album={ele}
                fetchUser={this.props.requestUser}
           />

        }) 
    }


    render() {
        if (!this.props.album) return null;
        if (!this.props.albums[0]) return null;
      


        console.log(this.handleFilterAlbums())

        
        return (<div>
            <GreetingNav/>
            <div className='album-header'>
                        <li className='album-header-img'></li>
                                    <div className='album-header-nav'>
                                                <ol>                 
                                                            <li><Link to={`/album/songs/${this.props.album.id}`}>music</Link></li>
                                                            <li><p>community</p></li>
                                                </ol>
                                    
                                    </div>
                                    <div className='album-content'>
                                                <div className='album-content-grid'>
                                                
                                                            {/* <li></li>
                                                            <li></li>
                                                            <li></li> */}

                                                            {this.handleAlbumItems()}
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
