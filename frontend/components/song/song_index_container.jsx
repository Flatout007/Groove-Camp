import React from 'react';
import { connect } from 'react-redux';
import SongIndex from './song_index';
import { requestSongs } from '../../actions/song_actions';
// import { deleteAlbum } from '../../actions/album_actions';

/*
Export a container component for `AlbumIndex` that maps an array of all
users from the store as an `users` prop. Additionally, it should map in
functions that will dispatch `requestAllUsers` and any other actions to the store as
props of the same name.
*/

const mapStoreToProps = (store, props) => {
    return {
        songs: Object.values(store.entities.songs)

    };
};

const mapActionsToProps = (dispatch, props) => {
    return {
        requestSongs: () => dispatch(requestSongs()),
        // deleteAlbum: (albumId) => dispatch(deleteAlbum(albumId))
    };
};

export default connect(mapStoreToProps, mapActionsToProps)(SongIndex);
