import {connect } from 'react-redux'
import React from 'react'
import { signout } from '../../actions/session_actions';
import GreetingIndex from './greeting_index';

const mapStoreToProps = (store, props) => {
    return {
        currentUser: store.entities.users[store.session.id]
    };
};

const mapActionsToProps = (dispatch, props) => {
    return {
      signout: () => {dispatch(signout())}
    };
};

export default connect(mapStoreToProps, mapActionsToProps)(GreetingIndex);