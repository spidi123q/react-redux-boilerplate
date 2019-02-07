import { HANDLE_CHANGE, HANDLE_SUBMIT, LOAD_DATA } from "./constants";

export const handleChange = (event) => {
    return {
        type: HANDLE_CHANGE,
        payload: {
            data: event.target.value,
            name: event.target.name
        }
    }
}

export const handleSubmit = (event, index) => {
    console.log("​handleSubmit -> data")
    event.preventDefault()
    return {
        type: HANDLE_SUBMIT,
        payload: index
    }
}

export const loadData = (index) => {
    return {
        type: LOAD_DATA,
        payload: index
    }
}