import React from 'react';
import {connect} from 'react-redux';
import ArtistWeekly from './artist_weekly';
import { requestAllUsers, requestUser } from '../../actions/session_actions';
import { requestSongs, requestSong } from '../../actions/song_actions';


/*
Export a container component for `ArtistWeekly` that maps an array of all
users from the store as an `users` prop. Additionally, it should map in
functions that will dispatch `requestAllUsers` and any other actions to the store as
props of the same name.
*/

const mapStoreToProps = (store, props) => {
   return {
       users: Object.values(store.entities.users),
       songs: Object.values(store.entities.songs)
   };
};

const mapActionsToProps = (dispatch, props) => {
    return {
        requestAllUsers: () => dispatch(requestAllUsers()),
        requestSongs: () => dispatch(requestSongs()),
        requestSong: (id) => dispatch(requestSong(id)),
        requestUser: (id) => dispatch(requestUser(id))
    };
};

export default connect(mapStoreToProps, mapActionsToProps)(ArtistWeekly);
