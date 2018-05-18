import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=harrisonchen';

export function getListData(){
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.GET_LIST_DATA,
        payload: response
    }
}

export function clearSingleItem(){
    return {
        type: types.CLEAR_SINGLE_ITEM
    }
}

export function deleteItem(id){
    const response = axios.put(`${BASE_URL}/todos/${id + API_KEY}`);
    return {
        type: types.DELETE_ITEM,
        payload: response
    }
}

export function toggleItemComplete(id){
    const response = axios.put(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: types.TOGGLE_COMPLETE,
        payload: response
    }
}

export function addToDoItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response
    }
}
export function getSingleItem(id){
    const response = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: types.GET_SINGLE_ITEM,
        payload: response
    }
}