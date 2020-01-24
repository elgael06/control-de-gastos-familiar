import firebase from './firebase';
import store from '../store';
import { gastosProps } from '../props';
import { fechaHoyToTime } from './fecha';
const state = store.getState();
const defaultSesion ={email:'',uid:''};

const db = firebase.firestore();

const GASTOS = db.collection('gastos');
const CLASIFICACION = db.collection('clasificacion_gasto');
const TIPO = db.collection('tipos_gasto');

/**
 * SELECT
 */
export const selectAllGastosGoogle = async (get:(e:any)=>void,isNull?:any)=>{
    const { email } = state.sesion ? state.sesion : defaultSesion;
    let lista:any[] = [];
    
    GASTOS.where('usuarios', "array-contains",email).where('fecha', '>=' , fechaHoyToTime().toString())
        .onSnapshot(querySnapshot => {
        if (querySnapshot.empty) {
            !isNull || isNull();
        }
        querySnapshot.forEach(gasto => {
            const data = gasto.data();
            lista.push({
                id:gasto.id,
                descripcion: data.descripcion,
                tipo_gasto: data.id_tipo_gasto,
                cantidad:  data.cantidad,
                fecha: data.fecha,
                id_usuario: data.uid,
                id_clasificacion: data.id_clasificacion
            });
        });
        get(lista);
    });
}

export const selectClasificadorGoogle = async (get:(e:any)=>void,isNull?:any)=>{
    let lista:any[] = [];
    CLASIFICACION.onSnapshot(querySnapshot => {
        if (querySnapshot.empty) {
            !isNull || isNull();
        }
        querySnapshot.forEach(classificacion => {
            const data = classificacion.data();
            lista.push({
                id:classificacion.id,
                data,
                descripcion:data.descripcion,
                estatus:data.estatus,
                uid:data.uid,
            });
        });
        get(lista);
    });

}

export const selectAllTipoGoogle = async (get:(e:any)=>void,isNull?:any)=>{
    let lista:any[] = [];
    TIPO.onSnapshot(querySnapshot => {
        if (querySnapshot.empty) {
            !isNull || isNull();
        }
        querySnapshot.forEach(tipo => {
            const data = tipo.data();
            lista.push({
                id:tipo.id,
                data,
                descripcion:data.descripcion,
                estatus:data.estatus,
                uid:data.uid,
            });
        });
        get(lista);
    });
}

/**
 * INSERT
 */
export const InsertGastosGoogle = async (value:gastosProps,onError?:any) =>{
    const { email,uid } = state.sesion ? state.sesion : defaultSesion;
    try{
        let respuesta = await GASTOS.add({
            cantidad:value.cantidad,
            descripcion:value.descripcion,
            fecha:value.fecha,
            id_clasificacion:value.id_clasificacion,
            id_tipo_gasto:value.tipo_gasto,
            id_usuario:uid,
            usuarios:[email]
        });
        return respuesta.id.toString();

    }
    catch(err){
        !onError || onError(err);
        return '0';
    }

}

export const InsertTipoGastoGoogle = async (descripcion:string,estatus:boolean,onError?:any) =>{
    const { uid } = state.sesion ? state.sesion : defaultSesion;
    try{
        let respuesta = await TIPO.add({
            descripcion,
            estatus,
            uid,
        });
        return respuesta.id.toString();
    }
    catch(err){
        !onError || onError(err);
        return '0';
    }

}

export const InsertClasificacionGastoGoogle = async (descripcion:string,estatus:boolean,onError?:any) =>{
    const { uid } = state.sesion ? state.sesion : defaultSesion;
    try{
        let respuesta = await CLASIFICACION.add({
            descripcion,
            estatus,
            uid,
        });
        return respuesta.id.toString();
    }
    catch(err){
        !onError || onError(err);
        return '0';
    }

}

/**
 * DELETE
 */

 export const DeleteGastoGoogle = async (id:string)=>{
    await GASTOS.doc(id).delete();
 }

 export const DeleteTipoGastoGoogle = async (id:string)=>{
    await TIPO.doc(id).delete();
}

export const DeleteClasificacionGastoGoogle = async (id:string)=>{
    await CLASIFICACION.doc(id).delete();
}

 /**
  * UPDATE
  */

export const UpdateGastosGoogle = async (id:string,value:any)=>{
    await GASTOS.doc(id).update(value);
}

export const UpdateTipoGastosGoogle = async (id:string,value:any)=>{
    await TIPO.doc(id).update(value);
}

export const UpdateClasificadorGastosGoogle = async (id:string,value:any)=>{
    await CLASIFICACION.doc(id).update(value);
}

