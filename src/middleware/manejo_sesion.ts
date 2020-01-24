import { iniciarSesionGoogle, cerrarSesionGogle } from '../services/firebase';
import {agregarSesion, removerSesion, changeLoading} from '../actions'; 

export const iniciarSesion = async(dispatch:any)=>{
    dispatch(changeLoading(true));
    let usuario = await iniciarSesionGoogle();
    if(usuario){
       dispatch(agregarSesion(usuario));
    }
    dispatch(changeLoading(false));
}

export const cerrarSesion = async (dispatch:any)=>{

    dispatch(changeLoading(true));
    try{
        await cerrarSesionGogle()
        dispatch(removerSesion());  
    } catch(error){
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
    dispatch(changeLoading(false));
}