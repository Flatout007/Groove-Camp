import {combineReducers} from 'redux';
import UserReducer from './users_reducer';
import AlbumReducer from './albums_reducer';
import SongReducer from './songs_reducer';


const EntitiesReducer = combineReducers({
      users: UserReducer,
      albums: AlbumReducer,
      songs: SongReducer
});

export default EntitiesReducer;