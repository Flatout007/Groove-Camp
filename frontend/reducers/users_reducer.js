import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UserReducer = (state = {}, action) => {
   
   state = state || {};
   Object.freeze(state);
   const currentState = Object.assign({}, state);
    
   switch(action.type) {
        
       case RECEIVE_CURRENT_USER: 
       return Object.assign(currentState, { [action.currentUser.id]: action.currentUser });
       default: return state
   }
};

export default UserReducer;