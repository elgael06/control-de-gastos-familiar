import firebase from './firebase';
import store from '../store';
import { gastosProps } from '../props';
const state = store.getState();
const defaultSesion ={email:'',uid:''};

const db = firebase.firestore();

const GASTOS = db.collection('gastos');
const CLASIFICACION = db.collection('clasificacion_gasto');
const TIPO = db.collection('tipos_gasto');

export const selectAllGastosGoogle = async (get:(e:any)=>void,isNull?:any)=>{
    const { email } = state.sesion ? state.sesion : defaultSesion;
    let lista:any[] = [];
    
    GASTOS.where('usuarios', "array-contains",email)
        .onSnapshot(querySnapshot => {
        if (querySnapshot.empty) {
            !isNull || isNull();
        }
        querySnapshot.forEach(gasto => {
            const data = gasto.data();
            console.log(gasto)
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
            lista.push(classificacion.data());
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
            lista.push(tipo.data());
        });
        get(lista);
    });
}

export const InsertGastosGoogle = async (value:gastosProps,onError?:any) =>{
    const { email,uid } = state.sesion ? state.sesion : defaultSesion;
    try{
        let respuesta = await GASTOS.add({
            cantidad:value.cantidad,
            descripcion:value.descripcion,
            fecha:0,
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
