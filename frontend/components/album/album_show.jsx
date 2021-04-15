


import React from 'react';
import AlbumIndexItem from './album_index_item';

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
        return (<div>
           {/* <p>{this.props.album.title}</p> */}
           {/* <button onClick={() => this.props.deleteAlbum(this.props.album.id)}>delete</button> */}
        </div>);
    }
}


export default AlbumShow
