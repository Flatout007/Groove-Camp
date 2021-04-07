import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', (e) => {
    let store = configureStore();
    console.log(store.getState());
    ReactDOM.render(<Root/>, document.getElementById('root'));
});