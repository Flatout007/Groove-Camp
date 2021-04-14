import * as SessionAPIUtil from '../util/session_api_util';


// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ALL_USERS =  'RECEIVE_ALL_USERS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveCurrentUser = (payload) => {
    
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser: payload
    };
};

export const receiveUser = (payload) =>  {
   return {
       type: RECEIVE_USER,
       user: payload
   }
}

export const receiveAllUsers = (payload) => {
      return {
          type: RECEIVE_ALL_USERS,
          users: payload
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
        }, err => {
            return dispatch(receiveErrors(err.responseJSON));
        });
    };
};


export const signup = (user) => {
    return dispatch => {
        return SessionAPIUtil.signup(user).then(res => {
           return  dispatch(receiveCurrentUser(res));
        },  err => {
           return dispatch(receiveErrors(err.responseJSON));
        });
    };
};

export const signout = () => {
    return dispatch => {
        return SessionAPIUtil.signout().then(() => {
            return  dispatch(logoutUser());
        }, err => {
           return dispatch(receiveErrors(err.responseJSON));
        });
    };
};


export const requestAllUsers = () => {
    return dispatch => {
        return SessionAPIUtil.getAllUsers().then((res) => {
            dispatch(receiveAllUsers(res));
        });
    };
};

export const requestUser = (userId) => {
    return dispatch => {
        return SessionAPIUtil.getUser(userId).then((res) => {
          return  dispatch(receiveUser(res));
        });
    };
};
