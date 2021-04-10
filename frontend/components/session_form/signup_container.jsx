import React from 'react'
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';



const mapStoreToProps = (store, props) => {
    return {
        errors: store.errors.session,
        formType: 'signup',
        currentUser: store.entities.users[store.session.id]
    };
};


const mapActionsToProps = (dispatch, props) => {
    return {
        action: (user) => dispatch(signup(user)) ,
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal())

    };
};

export default connect(mapStoreToProps, mapActionsToProps)(SessionForm)