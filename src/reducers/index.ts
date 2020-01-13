//libreria
import { combineReducers } from 'redux';
import sesion from './sesion';
import gastos from './gastos';
import modal from './modal';

const reducers = combineReducers({
    sesion,
    gastos,
    modal,
});

export default reducers;
 