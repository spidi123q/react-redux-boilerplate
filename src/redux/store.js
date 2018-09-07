import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './rootReducer';

const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: 'json'
});

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(
            thunk,
            axiosMiddleware(client)
        )
    );
}