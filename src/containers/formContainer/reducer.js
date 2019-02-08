import {
    HANDLE_CHANGE, ADD, HANDLE_SUBMIT
} from './constants';
export default (state = initialState, action) => {
	console.log('TCL: action', action)
	console.log('TCL: state', state)
    switch (action.type) {
        case HANDLE_SUBMIT:
            localStorage.setItem("form", JSON.stringify(state.form))
            return Object.assign({}, state, {
                isSubmitted: true
            })
        case HANDLE_CHANGE:
            const arr = state.form.slice()
            let formObj = Object.assign(arr[action.payload.index], {
                [action.payload.name]: action.payload.data
            })
            console.log('TCL: formObj', formObj)
            return Object.assign({}, state, {
                form: arr
            })
        case ADD:
            let arr2 = state.form.slice()
            arr2.push({fieldName: '', fieldType: 'String'})
            return Object.assign({}, state, {
                form: arr2
            })
        default:
            return state
    }
}

const initialState = {
    form: [
        {fieldName: '', fieldType: 'String', formName: ''},       
    ],
    isSubmitted: false
}