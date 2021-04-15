import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/session_actions';

const UserReducer = (state = {}, action) => {
   state = state || {};
   Object.freeze(state);
   const currentState = Object.assign({}, state);
    
   switch(action.type) {
        
       case RECEIVE_CURRENT_USER: 
    //   return Object.assign(currentState, { [action.currentUser.id]: action.currentUser });
        return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
       case RECEIVE_ALL_USERS: return Object.assign(currentState, action.users);
      case RECEIVE_USER: return Object.assign(currentState, { [action.user.id]: action.user });
      //  currentState[action.user.id] = action.user
      //  return currentState;
        default: return state
   }
};

export default UserReducer;