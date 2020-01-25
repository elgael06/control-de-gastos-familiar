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

import {eventoGastos, changeLoading } from '../actions';
import { gastosProps } from "../props";



export const selectAllGastos = async (dispatch:any)=>{
    try{
        await selectAllGastosGoogle((e:any)=>dispatch(eventoGastos(e)));
    }catch(err){
        console.log(err);
    }
}

export const selectClasificador = async (dispatch:any,isNUll?:()=>void)=>{
    store.dispatch(changeLoading(true))
    let res = await selectClasificadorGoogle(dispatch,isNUll);
    store.dispatch(changeLoading(false));
    return res;
}

export const selectAllTipo = async (dispatch:any,isNUll?:()=>void)=>{
    return await selectAllTipoGoogle(dispatch,isNUll);
}


export const insertGastos = async (value:gastosProps,onError?:()=>void):Promise<string> =>{
    store.dispatch(changeLoading(true));
    let res = await InsertGastosGoogle(value,onError);
    store.dispatch(changeLoading(false));
    return res;
}

export const InsetTipo = async (descripcion:string,estatus:boolean,onError?:any) =>{
    store.dispatch(changeLoading(true))
    let res = await InsertTipoGastoGoogle(descripcion,estatus,onError);
    store.dispatch(changeLoading(false))
    return res;
}

export const InsertClasificacionGasto = async (descripcion:string,estatus:boolean,onError?:any) =>{
    store.dispatch(changeLoading(true))
    let res = await InsertClasificacionGastoGoogle(descripcion,estatus,onError); 
    store.dispatch(changeLoading(false))
    return res;
}

export const DeleteGasto = async (id:string)=>{
    store.dispatch(changeLoading(true));
    await DeleteGastoGoogle(id);
    store.dispatch(changeLoading(false));
}

export const DeleteTipoGasto = async (id:string)=>{
    store.dispatch(changeLoading(true))
    await DeleteTipoGastoGoogle(id);
    store.dispatch(changeLoading(false))
}

export const DeleteClasificacion = async (id:string)=>{
    store.dispatch(changeLoading(true))
    await DeleteClasificacionGastoGoogle(id);
    store.dispatch(changeLoading(false))
}


