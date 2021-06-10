import React from 'react';
import { connect } from 'react-redux';
import ArtistShow from './album_song';
import { requestSongs } from '../../actions/song_actions';
import { requestAlbum } from '../../actions/album_actions';
import { deleteAlbum } from '../../actions/album_actions';
import { requestUser, requestAllUsers } from '../../actions/session_actions';


/*
Export a container component for `AlbumIndex` that maps an array of all
users from the store as an `users` prop. Additionally, it should map in
functions that will dispatch `requestAllUsers` and any other actions to the store as
props of the same name.
*/

const mapStoreToProps = (store, props) => {
    return {
        songs: Object.values(store.entities.songs),
        album: store.entities.albums[props.match.params.id],
    };
};

const mapActionsToProps = (dispatch, props) => {
    return {
        requestAlbum: (id) => dispatch(requestAlbum(id)),
        requestSongs: () => dispatch(requestSongs()),
        deleteAlbum: (id) => dispatch(deleteAlbum(id)),
        requestUser: (id) => dispatch(requestUser(id)),
    }
};

export default connect(mapStoreToProps, mapActionsToProps)(ArtistShow);