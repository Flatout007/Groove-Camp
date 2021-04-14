import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


/*
Write an `Artist Show` presentational component that renders an artist
information. This component should receive the artist
from the store as props via its container and fetch it once it has successfully
mounted to the DOM. Additionally, this component should contain a link back to
the Home `/` page.
*/

class ArtistShow extends React.Component {
    constructor(props) {
        super(props)
       
    }

    componentDidMount() {
      // this.props.requestAllUsers().then(() => {this.props.store.entities.users[this.props.match.params.id]})
        this.props.requestUser(this.props.match.params.id)
        //return this.props.requestUser(this.props.artist.id)

    // usersDiv() {
    //     return this.props.artists.map((ele) => {
    //        return <div>
    //            <p>{this.props.artist.username}</p>
    //            <Link to={'/'}>Home</Link>
    //        </div>
    //     });
    // }
    }

    render() {
        console.log(this.props.artist)
        console.log(this.props)
       
        if (!this.props.artist) return null;
   
        return <div>

            <p>{this.props.artist.username}</p>
            {/* {this.usersDiv()} */}
            <Link to={'/'}>Home</Link>
        </div>
    }
}

export default  ArtistShow;