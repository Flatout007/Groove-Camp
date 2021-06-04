import { RECEIVE_ALBUM, THE_ERRORS } from '../actions/album_actions';

const AlbumErrorReducer = (state = [], action) => {

    Object.freeze(state);


    switch (action.type) {

        case THE_ERRORS: return action.errors ? action.errors : null;
        case RECEIVE_ALBUM: return [];
        // close modal

        default: return state;
    }
};

export default AlbumErrorReducer;

