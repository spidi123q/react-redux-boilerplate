import { HANDLE_CHANGE, ADD } from "./constants";

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