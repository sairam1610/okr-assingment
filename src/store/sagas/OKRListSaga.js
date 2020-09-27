import { put } from "redux-saga/effects";

import axios from '../../axios/axios-instance'
import * as actions from "../actions/index";

export function* initOKRListSaga(action) {
    try {
        const response = yield axios.get(
            "/sample-okrs/db.json"
        );
        yield put(actions.setOKRList(response.data));
    } catch (error) {
        console.log(error);
    }
}
