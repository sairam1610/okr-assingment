import * as actionTypes from '../actions/actionTypes';

const initialState = {
    OKRList:[]
};

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};


function normaliseOKRResponse (response){
    let parentObjectives=response && response.data.filter((objective)=>{
        return !objective.parent_objective_id
    })
    let childObjectives=response && response.data.filter((objective)=>{
        return objective.parent_objective_id
    })
    parentObjectives.forEach((parentObjective)=>{
        let childObjective;
        childObjective=childObjectives.filter((childObjective)=>{
            return childObjective.parent_objective_id===parentObjective.id
        })
        parentObjective.children=[...childObjective]
    })
    return parentObjectives;
}

const setOKRList = (state, action) => {
    let normalisedResponse=normaliseOKRResponse(action.OKRList);
    return updateObject( state, {
        OKRList: normalisedResponse,
    } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_OKR_LIST: return setOKRList(state, action);
        default: return state;
    }
};

export default reducer;
