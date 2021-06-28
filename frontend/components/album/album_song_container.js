import React from 'react';
import { connect } from 'react-redux';
import ArtistShow from './album_song';
import { requestSongs } from '../../actions/song_actions';
import { requestAlbum } from '../../actions/album_actions';
import { deleteAlbum } from '../../actions/album_actions';
import { requestUser, requestAllUsers } from '../../actions/session_actions';



const mapStoreToProps = (store, props) => {
    return {
        songs: Object.values(store.entities.songs),
        album: store.entities.albums[props.match.params.id],
        users: Object.values(store.entities.users)
    };
};

const mapActionsToProps = (dispatch, props) => {
    return {
        requestAlbum: (id) => dispatch(requestAlbum(id)),
        requestSongs: () => dispatch(requestSongs()),
        deleteAlbum: (id) => dispatch(deleteAlbum(id)),
        requestUser: (id) => dispatch(requestUser(id)),
        requestAllUsers: () => dispatch(requestAllUsers())
    }
};

export default connect(mapStoreToProps, mapActionsToProps)(ArtistShow);