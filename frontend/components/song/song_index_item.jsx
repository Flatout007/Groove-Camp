import React from 'react';

import { Link } from 'react-router-dom'


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        //this.deleteSong = this.deleteSong.bind(this);
    }

    // deleteAlbum(e) {

    //     return this.props.deleteAlbum(this.props.album.id);
    // }




    render() {
        
        if (!this.props.song) return <p>Loading</p>;

        return (
            <li>
                {this.props.song.title}
                <Link to={`/song/${this.props.song.id}`}>songs</Link>


                {/* <button onClick={this.deleteAlbum}>delete this album</button>  */}
            </li>
        )
    }

}

export default SongIndexItem;

