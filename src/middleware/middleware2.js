import { all,call } from "redux-saga/effects";



function * getData(){

}

function* test(){
//    yield console.log("aaaa")
}



export default function* rootSaga(){
    yield all([
        call(test)
    ])
}