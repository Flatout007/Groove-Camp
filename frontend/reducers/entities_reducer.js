import {combineReducers} from 'redux';
import UserReducer from './users_reducer';
import AlbumReducer from './albums_reducer';

const EntitiesReducer = combineReducers({
      users: UserReducer,
      albums: AlbumReducer
});

export default EntitiesReducer;