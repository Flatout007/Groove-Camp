import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


/* 
// html model 
<li className='artist-weekly-img-1'>
    <div className='artist-overlay'></div>
    <div className='artist-overlay-hover'>image1</div>
    <a>
        <div>
            <h3></h3>
            <h4></h4>
        </div>
    </a>
</li> 

Export an `ArtistIndexItem` presentational component that takes in an `artist`
 The component should render an `li` containing the following:

1. A link to the artist's show page with text of the artist name or any other details needed.
*/

class ArtistHomeIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <li className='album-li'>
                {this.props.artist.username}
                <Link to={`/artist/${this.props.artist.id}`}>albums</Link>


                {/* <button onClick={this.deleteAlbum}>delete this album</button>  */}
            </li>
        )
    }

}

export default ArtistHomeIndex;

