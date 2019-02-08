import {
    HANDLE_CHANGE,
    HANDLE_SUBMIT,
    LOAD_DATA,
    LOAD_FORM
} from './constants';
export default (state = initialState, action) => {
    console.log('TCL: state', state)
    switch (action.type) {
        case LOAD_FORM:
            let form = JSON.parse(localStorage.getItem('form'));
            form.formName = form[0].formName
            console.log('TCL: form', form)
            return Object.assign({}, state, {
                inputs: form,
                form: {
                    formName: form.formName
                }
            })
        case HANDLE_SUBMIT:
            let list = localStorage.getItem('list')
            if (action.payload.index) {
                list = JSON.parse(list)
                list[parseInt(action.payload.index)] = state.form
                localStorage.setItem('list', JSON.stringify(list))
            } else {
                if (list) {
                    list = JSON.parse(list)
                    list.push(state.form)
                    localStorage.setItem('list', JSON.stringify(list))
                } else {
                    localStorage.setItem('list', JSON.stringify([state.form]))
                }
            }
            return Object.assign({}, state, {
                isSubmitted: true
            })
        case HANDLE_CHANGE:
            let value2 = {}
            Object.assign(value2, state.form, {
                [action.payload.name]: action.payload.data
            })
            return Object.assign({}, state, {
                form: value2
            })
        case LOAD_DATA:
            console.log('TCL: action.payload.index', action.payload.index)
            if (action.payload.index) {
                let list = localStorage.getItem('list')
                list = JSON.parse(list)
                console.log('TCL: list', list[parseInt(action.payload.index)])
                return Object.assign({}, state, {
                    isSubmitted: false,
                    form: list[parseInt(action.payload.index)]
                })
            } else {
                return Object.assign({}, state, {
                    isSubmitted: false
                })
            }
        default:
            return Object.assign({}, state, {
                isSubmitted: false
            })
    }
}

const initialState = {
    inputs: [],
    isSubmitted: false
}