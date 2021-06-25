import React from 'react';
// import ArtistProfileIndexItem from './artist_profile_index_item';


class AlbumGenreIndex extends React.Component {
    constructor(props) {
        super(props);
    }


    // handleAlbumLimit() {
    //     return this.props.albums.filter((ele, idx) => { return idx > 3 });
    // }

    handleRandomize(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }



    // handleAlbumProfileList() {
    //     return this.handleRandomize(this.props.albums,5).map((ele, idx) => {
    //         return <ArtistProfileIndexItem
    //             key={ele.id}
    //             album={ele}
    //             users={this.props.users}
    //             songs={this.props.songs}
    //         />

    //     })
    // }

    render() {
        if(!this.props.albums) return null;

       
        return(
            <div>
                <ul class='artist-genre-index-grid'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <ul class='artist-genre-index-grid-rand'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }

}



export default AlbumGenreIndex;