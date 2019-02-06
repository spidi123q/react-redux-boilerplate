import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import  Routes from './componets/mainRouter';

ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
