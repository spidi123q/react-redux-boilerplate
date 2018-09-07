export default (state = initialState , action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            console.log('hi...')
            return {
                result: action.payload
            }
        case 'ADD_NOTEBOOK' :
            console.log("add notebook");
            console.log(state.notebooks);
            return Object.assign({}, state, {
                notebooks: [...state.notebooks, 8000]
            })
        case '_SUCCESS':
            console.log('rest succc');
            return
        default:
            return state
    }
}

const initialState = {
    notebooks: [5]
}