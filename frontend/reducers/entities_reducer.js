import {combineReducers} from 'redux';
import UserReducer from './users_reducer';

const EntitiesReducer = combineReducers({
      users: UserReducer
});

export default EntitiesReducer;