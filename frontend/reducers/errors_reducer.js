import { combineReducers } from 'redux';
import SessionErrorReducer from './session_errors_reducer';
import AlbumErrorReducer from './album_errors_reducer';
import SongErrorReducer from './songs_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionErrorReducer,
    album: AlbumErrorReducer,
    song: SongErrorReducer
});

export default ErrorsReducer;