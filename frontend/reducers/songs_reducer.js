import { RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_SONGS } from '../actions/song_actions';
import { REMOVE_SONG } from '../actions/song_actions';

const SongReducer = (state = {}, action) => {
    state = state || {};
    Object.freeze(state);
    const currentState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_SONGS: return Object.assign(currentState, action.SONG);
        case RECEIVE_SONG: return Object.assign({}, { [action.song.id]: action.song });
        //case RECEIVE_ALBUM: return { id: action.album.id };
        case REMOVE_SONG: return Object.assign(currentState, { [action.songId]: undefined })
        default: return state
    }
};

export default SongReducer;