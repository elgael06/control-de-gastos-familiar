import { ADD_SESION, REMOVE_SESION } from "../types";
import { sesionProps, sesionActions } from "../props";


export const agregarSesion =(sesion?:sesionProps):sesionActions=>({
    type:ADD_SESION,
    sesion,
});

export const removerSesion =()=>({
    type:REMOVE_SESION,
});
