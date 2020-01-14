import { selectAllGastosGoogle, InsertGastosGoogle } from "../services/firestone"
import {eventoGastos} from '../actions';
import { gastosProps } from "../props";



export const selectAllGastos = (dispatch:any)=>{
    try{
        ;
        selectAllGastosGoogle((e:any)=>dispatch(eventoGastos(e)));
    }catch(err){
        console.log(err);
    }
}

export const selectClasificador = async (dispatch:any)=>{
    
}

export const selectAllTipo = async (dispatch:any)=>{

}


export const insertGastos = async (value:gastosProps,onError?:()=>void):Promise<string> =>{
    return await InsertGastosGoogle(value,onError);
}

