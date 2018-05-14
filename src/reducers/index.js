import {combineReducers} from 'redux';
import listReducer from './list_reducers';

export default combineReducers({
    list: listReducer
});