import React from 'react';
import { deleteAlbum } from '../../util/album_api_util';
import {Link, withRouter} from  'react-router-dom'


class AlbumIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleUsers = this.handleUsers.bind(this);
    }


    componentWillUpdate() {
        let items = document.getElementsByClassName('album-li');

        Array.from(items).forEach((ele) => {
            ele.style.backgroundSize = 'cover'
        });
    }


    handleUsers() {
        let users = [];


        this.props.users.forEach((ele) => {
            if (ele.id === this.props.album.artist_id) {
                users.push(ele);
            }
        });


        return users[0];
    }


    render() {
        if (!this.props.album) return <p>Loading</p>;
        if (!this.handleUsers()) return null;
        

        return (
        <React.Fragment>
                    <li style={{background:`url(${this.props.album.photo}) 100% no-repeat`}} className='album-li' onClick={() => this.props.history.push(`/album/songs/${this.props.album.id}`)}>
                                <div className='album-stats'>
                                    <h5>
                                
                                    {this.props.album.title}
                                
                                
                                
                                    <span className='artist-name-stat'>by {this.handleUsers().username}</span>
                                    </h5>
                                    {/* make a random number for this */}
                                    <span>sold for $20</span>
                                    <span>in 🇯🇵 Japan</span>
                                    {/* use the date object for this timestamp */}
                                    <span className='timestamp'>22 seconds ago</span>
                                </div>
                    </li>
        </React.Fragment>
        )
    }

}

export default withRouter(AlbumIndexItem);

