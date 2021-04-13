import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_container';
import SignupFormContainer from '../session_form/signup_container';
import {login} from '../../actions/session_actions'

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

 function Modal({ modal, closeModal, openModal, boolean, signin }){
    // const handleSignIn = () => {
    //     openModal('signup');
    // }

    // if (!modal) {
    //     return null;
    // }

    let component;
    
    switch (modal) {
        case 'signup-modal':
            component = 
                <React.Fragment>
            
                 <div className='modal-header'>Welcome to groovecamp</div>
                    <div className='sign-up-modal'>
                      <div className='modal-form-div'>
                        <form className='modal-form'>
                          <ul>
                                <li className='flex-item'>
                                    <div className='icon-1'></div>
                
                                    <div>
                                        <a className='signup-fan-button' onClick={() => openModal('signup-user')}>Sign up as a fan</a>
                                        <div className='fan-account-text'>
                                            Sign up as a fan
                                            Follow your favorite artists, keep a wishlist, get instant streaming of your purchases, showcase your collection, and explore the music of like-minded fans</div>
                                   </div>
                                </li>

                                <li className='flex-item'>
                                    <div className='icon-2'></div>

                                    <div>
                                        <a className='signup-artist-button' onClick={() => openModal('signup-user')}>Sign up as a artist</a>
                                        <div>text</div>
                                    </div>
                                </li>

                                <li className='flex-item'>
                                    <div className='icon-3'></div>

                                    <div>
                                        <a className='signup-demo-button' onClick={() => signin({ username: 'sally123', password: '123456', artist_check: false }).then(closeModal)}>Curious? Try a demo</a>
                                        <div>text</div>
                                    </div>
                                </li>
                          </ul>
                      </form>
                    </div>
                 </div>
               
            </React.Fragment>
          
            break;
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup-user':
            component = <SignupFormContainer artist_check={false}/>; // pass in prop to form artist check: false for user, 
            break;
        case 'signup-artist':
            component = <SignupFormContainer artist_check={true} />; // pass in prop to form artist check: true for artist, 
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
        openModal: (signup) => dispatch(openModal(signup)),
        signin: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
