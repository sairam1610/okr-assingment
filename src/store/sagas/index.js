import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import {initOKRListSaga } from './OKRListSaga'

export function* watchOKRListSaga() {
    yield takeEvery(actionTypes.LOAD_OKR_LIST,initOKRListSaga);
}
