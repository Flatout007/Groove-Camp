import * as SessionAPIUtil from '../util/session_api_util';


// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const receiveCurrentUser = (payload) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser: payload
    };
};

export const receiveErrors = (payload) => {
    return {
        type: RECEIVE_ERRORS,
        errors: payload
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    };
};

//---------------------------------

export const login = (user) => {
    return dispacth => {
        return SessionAPIUtil.login(user).then(res => {
            return dispacth(receiveCurrentUser(res));
        }, err => dispacth(receiveErrors(err)));
    };
};

export const signup = (user) => {
    return dispacth => {
        return SessionAPIUtil.signup(user).then(res => {
            return dispacth(receiveCurrentUser(res));
        }, err =>  dispacth(receiveErrors(err)));
    };
};

export const signout = () => {
    return dispacth => {
        return SessionAPIUtil.signout().then(() => {
            return dispacth(logoutUser())
        });
    };
};

