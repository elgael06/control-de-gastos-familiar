import { modalActions } from "../props";
import { MODAL_AGREGAR } from "../types";


const modal = (state:boolean,actions:modalActions)=>{
    switch(actions.type){
        case MODAL_AGREGAR:
            return actions.estatus;
        default: return state || false;
    }
}

export default modal;