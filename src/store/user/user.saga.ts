import {takeEvery, put, all} from 'redux-saga/effects'
import { userActions } from './user.slice'

export function* login(props: any) {
    yield put(userActions.setData(props.payload))
}

export function* watchLogin() {
    yield takeEvery('user/login', login)
}

export default function* userSagga() {
    yield all([
        watchLogin(),
    ])
}