import { all, call } from "redux-saga/effects";
import system from './system'
import middleware2 from './middleware2'

export default function* rootSaga(){
    yield all([
        call(system),
        call(middleware2)
    ])
}