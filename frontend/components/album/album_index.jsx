import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
    componentDidMount() {
        return this.props.requestAlbums();
    }

    constructor(props) {
        super(props);
        this.albumList = this.albumList.bind(this);
    }


    albumList() {
        return this.props.albums.map((ele) => {
           return <AlbumIndexItem
             key={ele.id}
             album={ele}
             deleteAlbum={this.props.deleteAlbum}
           />
        });
    }


    render() {
       
        return (<div className='artist-outer'>
            {this.albumList()}
            
        </div>);
    }
}


export default AlbumIndex
