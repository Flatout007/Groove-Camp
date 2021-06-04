
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ALBUMS } from '../actions/album_actions';
import { REMOVE_ALBUM } from '../actions/album_actions';

const AlbumReducer = (state = {}, action) => {
    state = state || {};
    Object.freeze(state);
    const currentState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_ALBUMS: return Object.assign(currentState, action.albums);
        case RECEIVE_ALBUM: return Object.assign({}, { [action.album.id]: action.album });
        //case RECEIVE_ALBUM: return { id: action.album.id };
        case REMOVE_ALBUM: 
            delete currentState[action.id];
            return currentState;
        default: return state
    }
};

export default AlbumReducer;
