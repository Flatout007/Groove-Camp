import React from 'react';
import { deleteAlbum } from '../../util/album_api_util';
import {Link} from  'react-router-dom'


class AlbumIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteAlbum = this.deleteAlbum.bind(this);
    }

    deleteAlbum(e) {    
        this.props.deleteAlbum(this.props.album.id);
    }

    
    

    render() {
        
        if (!this.props.album) return <p>Loading</p>;

        return (
        <React.Fragment>
            <li className='album-li'>
              
               {/* <Link to={`/`}>albums</Link>  */}
               {/* <audio controls>
                    <source src="https://groovecamp-seed.s3.us-east-2.amazonaws.com/Rising+Hope.mp3" type="audio/mp3"/>
               </audio> */}
              {/* <button onClick={this.deleteAlbum}>delete this album</button>  */}
            <div className='album-stats'>
                <h4>{this.props.album.title}</h4>
                <p>by test album</p>
                {/* make this a random number for this */}
                <p>sold for $20</p>
                <p>in USA</p>
                {/* use the date object for this timestamp */}
                <p>22 seconds ago</p>
            </div>
           </li>
        </React.Fragment>
        )
    }

}

export default AlbumIndexItem;

