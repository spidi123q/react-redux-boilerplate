import {
    LOGIN_SUCCESS
} from './constants'

export default (state = initialState, action) => {
    switch (action.type) { 
        case LOGIN_SUCCESS:
            console.log('login success');
            console.log(action.payload)
            return Object.assign({}, state, action.payload)
        case 'AWESOME':
            console.log('api done')
            return state;
        default:
            return state
    }
}

const initialState = {}