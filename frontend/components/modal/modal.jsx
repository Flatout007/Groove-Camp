import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_container';
import SignupFormContainer from '../session_form/signup_container';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

 function Modal({ modal, closeModal, openModal, boolean }){
    // const handleSignIn = () => {
    //     openModal('signup');
    // }

    // if (!modal) {
    //     return null;
    // }

    let component;

    switch (modal) {
        case 'signup-modal':
            component = <div className="sign-up-modal">
               <ul>
                <li><a onClick={() => openModal('signup-user')}>Sign up as a fan</a></li>
                <li onClick={() => openModal('signup-artist')}>Sign up as an artist</li>
               </ul>
            </div>;
            break;
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup-user':
            component = <SignupFormContainer artist_check={false}/>; // pass in prop artist check false for user, 
            break;
        case 'signup-artist':
            component = <SignupFormContainer artist_check={true}/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (signup) => dispatch(openModal(signup))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
