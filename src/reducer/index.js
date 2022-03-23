import reducer1 from "./reducer1";
import reducer2 from "./reducer2";
import system from './system'
import {combineReducers} from 'redux-immutable'

export default combineReducers({
    reducer1:reducer1,
    reducer2:reducer2,
    system:system
})