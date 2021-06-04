import React from 'react';
import {Link, withRouter} from  'react-router-dom'


class ArtistProfileItem extends React.Component {
    constructor(props) {
        super(props);
      
    }


    render() {
        
        // if (!this.props.album) return null;

        return (
        <React.Fragment>
            <li>
                <button onClick={() => this.props.deleteAlbum(this.props.album.id)}>delete album</button>
            </li>
           
        </React.Fragment>
        )
    }

}

export default withRouter(ArtistProfileItem);

