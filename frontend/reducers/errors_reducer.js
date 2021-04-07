import { combineReducers } from 'redux';
import SessionErrorReducer from './session_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionErrorReducer
});

export default ErrorsReducer;