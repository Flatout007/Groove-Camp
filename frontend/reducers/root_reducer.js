import Entities from './entities_reducer';
import SessionReducer from './sessions_reducer';
import ErrorsReducer from './errors_reducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
    entities: Entities,
    session: SessionReducer,
    errors: ErrorsReducer
});

export default RootReducer;