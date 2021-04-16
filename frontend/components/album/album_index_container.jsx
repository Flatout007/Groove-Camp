import React from 'react';
import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { requestAlbums } from '../../actions/album_actions';
import { deleteAlbum } from '../../actions/album_actions';

/*
Export a container component for `AlbumIndex` that maps an array of all
users from the store as an `users` prop. Additionally, it should map in
functions that will dispatch `requestAllUsers` and any other actions to the store as
props of the same name.
*/

const mapStoreToProps = (store, props) => {
    return {
        albums: Object.values(store.entities.albums),
        artist: store.entities.users[props.match.params.id],
    };
};

const mapActionsToProps = (dispatch, props) => {
    return {
        requestAlbums: () => dispatch(requestAlbums()),
        deleteAlbum: (albumId) => dispatch(deleteAlbum(albumId)),
    };
};

export default connect(mapStoreToProps, mapActionsToProps)(AlbumIndex);
