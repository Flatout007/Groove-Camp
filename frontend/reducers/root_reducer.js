import EntitiesReducer from './entities_reducer';
import SessionReducer from './sessions_reducer';
import ErrorsReducer from './errors_reducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer
});

export default RootReducer;