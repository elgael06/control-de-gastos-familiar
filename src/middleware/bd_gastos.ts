import { 
    selectAllGastosGoogle, 
    InsertGastosGoogle, 
    selectClasificadorGoogle, 
    selectAllTipoGoogle, 
    InsertTipoGastoGoogle, 
    InsertClasificacionGastoGoogle, 
    DeleteGastoGoogle,
    DeleteClasificacionGastoGoogle,
    DeleteTipoGastoGoogle,
} from "../services/firestore"

import store from '../store';

import {eventoGastos, eventoModal} from '../actions';
import { gastosProps } from "../props";



export const selectAllGastos = async (dispatch:any)=>{
    try{
        store.dispatch(eventoModal(true));
        await selectAllGastosGoogle((e:any)=>dispatch(eventoGastos(e)));
        store.dispatch(eventoModal(false));
    }catch(err){
        console.log(err);
    }
}

export const selectClasificador = async (dispatch:any,isNUll?:()=>void)=>{
    store.dispatch(eventoModal(true))
    let res = await selectClasificadorGoogle(dispatch,isNUll);
    store.dispatch(eventoModal(false));
    return res;
}

export const selectAllTipo = async (dispatch:any,isNUll?:()=>void)=>{
    return await selectAllTipoGoogle(dispatch,isNUll);
}


export const insertGastos = async (value:gastosProps,onError?:()=>void):Promise<string> =>{
    store.dispatch(eventoModal(true))
    let res = await InsertGastosGoogle(value,onError);
    store.dispatch(eventoModal(false))
    return res;
}

export const InsetTipo = async (descripcion:string,estatus:boolean,onError?:any) =>{
    store.dispatch(eventoModal(true))
    let res = await InsertTipoGastoGoogle(descripcion,estatus,onError);
    store.dispatch(eventoModal(false))
    return res;
}

export const InsertClasificacionGasto = async (descripcion:string,estatus:boolean,onError?:any) =>{
    store.dispatch(eventoModal(true))
    let res = await InsertClasificacionGastoGoogle(descripcion,estatus,onError); 
    store.dispatch(eventoModal(false))
    return res;
}

export const DeleteGasto = async (id:string)=>{
    store.dispatch(eventoModal(true))
    await DeleteGastoGoogle(id);
    store.dispatch(eventoModal(false))
}

export const DeleteTipoGasto = async (id:string)=>{
    store.dispatch(eventoModal(true))
    await DeleteTipoGastoGoogle(id);
    store.dispatch(eventoModal(false))
}

export const DeleteClasificacion = async (id:string)=>{
    store.dispatch(eventoModal(true))
    await DeleteClasificacionGastoGoogle(id);
    store.dispatch(eventoModal(false))
}


