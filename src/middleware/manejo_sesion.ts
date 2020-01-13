import { iniciarSesionGoogle, cerrarSesionGogle } from '../services/firebase';
import {agregarSesion, removerSesion} from '../actions'; 

export const iniciarSesion = async(dispatch:any)=>{
    let usuario = await iniciarSesionGoogle();
    console.log(usuario);
    if(usuario){
       dispatch(agregarSesion(usuario));
    }
}

export const cerrarSesion = async (dispatch:any)=>{
    try{
        await cerrarSesionGogle()
        dispatch(removerSesion());  
    } catch(error){

    }
}