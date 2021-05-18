import React from 'react';
import { deleteAlbum } from '../../util/album_api_util';
import {Link} from  'react-router-dom'


class AlbumIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteAlbum = this.deleteAlbum.bind(this);
    }

    deleteAlbum(e) {
        
        return this.props.deleteAlbum(this.props.album.id);
    }

    
    

    render() {
         console.log(this.props)
        if (!this.props.album) return <p>Loading</p>;

        return (
            <li className='album-li'>
               {this.props.album.title}
               <Link to={`/`}>albums</Link> 
               {/* <audio controls>
                    <source src="https://groovecamp-seed.s3.us-east-2.amazonaws.com/Rising+Hope.mp3" type="audio/mp3"/>
               </audio> */}
              {/* <button onClick={this.deleteAlbum}>delete this album</button>  */}
            </li>
        )
    }

}

export default AlbumIndexItem;

