import {connect } from 'react-redux'
import React from 'react'
import { signout } from '../../actions/session_actions';
import GreetingIndex from './greeting_index';
import { openModal } from '../../actions/modal_actions';

const mapStoreToProps = (store, props) => {
    return {
        currentUser: store.entities.users[store.session.id]
    };
};

const mapActionsToProps = (dispatch, props) => {
    return {
      signout: () => {dispatch(signout())},
      openModal: modal => dispatch(openModal(modal))

    };
};

export default connect(mapStoreToProps, mapActionsToProps)(GreetingIndex);