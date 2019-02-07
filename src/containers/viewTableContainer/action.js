
import { LOAD_LIST } from './constants';
export const loadList = () => {
    let list = localStorage.getItem('list')
    if(list)
        list = JSON.parse(list)
    return {
        type: LOAD_LIST,
        payload: list
    }
}