import { combineReducers } from 'redux';
import associations from './associations';
import draft from './draft';
import patient from './patient';
import patients from './patients';
import preparations from './preparations';
import nextStates from './nextStates';
import disease from './disease';
import diseases from './diseases';
import history from './history';
import medicines from './medicines';
import graph from './graph';

export default combineReducers({
    associations,
    draft,
    patient,
    patients,
    preparations,
    nextStates,
    disease,
    diseases,
    history,
    medicines,
    graph
});
