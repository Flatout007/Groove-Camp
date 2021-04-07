import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const SessionErrorReducer = (state = {}, action) => {
    
    Object.freeze(state);
    const currentState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER: return Object(currentState, []);
        case RECEIVE_SESSION_ERRORS: return Object.assign(currentState, action.errors);
        
        default: return state;
    }
};

export default SessionErrorReducer;

