import { MODAL_AGREGAR } from "../types";
import { modalActions } from "../props";

const eventoModal =(estatus:boolean):modalActions=>({
    type:MODAL_AGREGAR,
    estatus
});


export default  eventoModal;