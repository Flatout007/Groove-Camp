import { RECEIVE_SONG, ERRORS } from '../actions/song_actions';

const SongErrorReducer = (state = [], action) => {

    Object.freeze(state);


    switch (action.type) {

        case ERRORS: return action.errors;
        case RECEIVE_SONG: return [];
        // close modal

        default: return state;
    }
};

export default SongErrorReducer;