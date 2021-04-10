import * as SessionAPIUtil from '../util/session_api_util';


// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (payload) => {
    
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser: payload
    };
};

export const receiveErrors = (payload) => {

    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: payload
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

//---------------------------------

export const login = (user) => {
    
    return dispatch => {
        return SessionAPIUtil.login(user).then(res => {
            return dispatch(receiveCurrentUser(res));
        }, err => (
            dispatch(receiveErrors(err.responseJSON))
        ));
    };
};



export const signup = (user) => {
    return dispatch => {
        return SessionAPIUtil.signup(user).then(res => {
           return  dispatch(receiveCurrentUser(res));
        }, err => (
            dispatch(receiveErrors(err.responseJSON))
        ));
    };
};

export const signout = () => {
    return dispatch => {
        return SessionAPIUtil.signout().then(() => {
            return  dispatch(logoutUser())
        }, err => (
            dispatch(receiveErrors(err.responseJSON))
        ));
    };
};

