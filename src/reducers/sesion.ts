import { sesionProps, sesionActions } from "../props";
import { ADD_SESION, REMOVE_SESION } from "../types";

const sesion = (state:sesionProps,actions:sesionActions) => {
    let sesion = JSON.parse(localStorage.sesion|| null);
    switch (actions.type){
        case ADD_SESION:
            localStorage.setItem('sesion',JSON.stringify(actions.sesion));
            return actions.sesion;
        case REMOVE_SESION:
            localStorage.removeItem('sesion');
            return null;

        default:return state|| sesion;
    }
}

export default sesion;
