import { createStore } from 'redux';
import reducers from './reducers';


const initialState:Object =({
    sesion:null,
    modal:false,
    gastos:[],
});


export default createStore(reducers,initialState);
