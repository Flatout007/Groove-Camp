import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import * as SessionActions from './actions/session_actions';


document.addEventListener('DOMContentLoaded', (e) => {
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // store = configureStore({});
    // window.getAllUsers = SessionActions.getAllUsers
   
    //let user = { username: 'tim007', password: '123456', artist_check: false };
    //console.log(store.dispatch(SessionActions.login(user)))
    window.login = SessionActions.login
    window.store = store
    
    window.getAllUsers = SessionActions.requestAllUsers
    

    
    //console.log(store.dispatch(SessionApiUtil.login(user)))
    
    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});