import {createStore,combineReducers} from 'redux';
import Reducer from './Reducer';

let reducers = combineReducers({
    Page: Reducer
});

let store = createStore(reducers);

export default store;
