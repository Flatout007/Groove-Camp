import React from 'react';
import {connect} from 'react-redux';
import ArtistWeekly from './artist_weekly';
import { requestAllUsers } from '../../actions/session_actions';

/*
Export a container component for `ArtistWeekly` that maps an array of all
users from the store as an `users` prop. Additionally, it should map in
functions that will dispatch `requestAllUsers` and any other actions to the store as
props of the same name.
*/

const mapStoreToProps = (store, props) => {
   return {
       users: Object.values(store.entities.users)
   };
};

const mapActionsToProps = (dispatch, props) => {
    return {
         requestAllUsers: () => dispatch(requestAllUsers())
    };
};

export default connect(mapStoreToProps, mapActionsToProps)(ArtistWeekly);
