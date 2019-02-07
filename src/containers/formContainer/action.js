import { HANDLE_CHANGE, ADD, HANDLE_SUBMIT } from "./constants";

export const handleChange = (event, index) => {
    return {
        type: HANDLE_CHANGE,
        payload: {
            data: event.target.value,
            name: event.target.name,
            index: index
        }
    }
}

export const add = () => {
    return {
        type: ADD
    }
}

export const handleSubmit = (event) => {
    console.log("​handleSubmit -> data")
    event.preventDefault()
    return {
        type: HANDLE_SUBMIT
    }
}