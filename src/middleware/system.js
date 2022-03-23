import {all,call,takeEvery,cancel, put} from 'redux-saga/effects'
import {getSumit,submit} from '../reducer/system'


function *processing(action){
    if((action.payload.username==='guojiao'&&action.payload.password==='123123')){
       yield put({type:submit,payload:action.payload})
    }else{
        alert("密码错误")
    }
}

function* login(){
    yield takeEvery(getSumit.type,processing)
}


export default function* rootSaga(){
    yield all([
        call(login)
    ])
}