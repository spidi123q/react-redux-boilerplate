import { combineReducers } from 'redux';
import appReducer from '../container/appContainer/reducer';
import loginReducer from '../container/loginContainer/reducer'
import formReducer from '../containers/formContainer/reducer'
import listFormReducer from '../containers/listFormContainer/reducer'
import viewTableReducer from '../containers/viewTableContainer/reducer'

export default combineReducers({
    appReducer,
    loginReducer,
    formReducer,
    listFormReducer,
    viewTableReducer
});