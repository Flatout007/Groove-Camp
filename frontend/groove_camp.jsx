import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import * as SessionActions from './actions/song_actions';



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
   
    // window.login = SessionActions.login
    window.store = store
    
    // window.getAllUsers = SessionActions.requestAllUsers

    window.removeSong = SessionActions.removeSong;
    window.deleteSong = SessionActions.deleteSong;
    

    
    //console.log(store.dispatch(SessionApiUtil.login(user)))
    
    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});