import * as actionTypes from './actionTypes';


export const initOKRList = () => {
    return {
        type: actionTypes.LOAD_OKR_LIST
    };
};


export const setOKRList = ( OKRList ) => {
    return {
        type: actionTypes.SET_OKR_LIST,
        OKRList: OKRList
    };
};
