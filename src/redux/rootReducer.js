import { combineReducers } from 'redux';
import appReducer from '../container/appContainer/reducer';
import loginReducer from '../container/loginContainer/reducer'

export default combineReducers({
    appReducer,
    loginReducer
});