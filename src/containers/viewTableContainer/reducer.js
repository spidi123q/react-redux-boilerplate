
import { LOAD_LIST } from './constants';
export default (state = initialState, action) => {
	console.log('TCL: action view', action)
    switch (action.type) { 
        case LOAD_LIST:
            return Object.assign({}, state, {
                list: action.payload
            })
        default:
                return state
        }
}

const initialState = {
    list: []
}
