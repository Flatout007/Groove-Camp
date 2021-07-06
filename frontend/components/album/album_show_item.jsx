import React from 'react';
import { Link } from 'react-router-dom';


class AlbumShowItem extends React.Component {
    constructor(props) {
        super(props); 
        this.handleAlbumPhoto = this.handleAlbumPhoto.bind(this);
    }

    handleAlbumPhoto() {
        return (
            !this.props.album.photo ?
                    <li style={{ position: 'relative', background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)' }}>
                                <Link style={{ position: 'absolute', position: 'absolute', width: '232px', height: '232px' }} to={`/album/songs/${this.props.album.id}`}></Link> 
                    </li> 
                    :
                    <li style={{ position: 'relative', background: `url(${this.props.album.photo}) center / cover no-repeat` }}>
                                <Link style={{ position: 'absolute', position: 'absolute', width: '232px', height: '232px' }} to={`/album/songs/${this.props.album.id}`}></Link>
                    </li> 
        );
    }

    render() {
        
       return( <React.Fragment>
                            {this.handleAlbumPhoto()}
                </React.Fragment>
            )
    }

}

export default AlbumShowItem;