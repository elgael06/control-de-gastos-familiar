//libreria
import { combineReducers } from 'redux';
import sesion from './sesion';
import gastos from './gastos';
import modal from './modal';
import loading from './loading';

const reducers = combineReducers({
    sesion,
    gastos,
    modal,
    loading
});

export default reducers;
 