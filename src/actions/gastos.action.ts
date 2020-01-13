import { ADD_GASTO } from "../types";
import { gastosActions, gastosProps } from "../props";

const eventoGastos = (gastos:Array<gastosProps>=[]):gastosActions =>({
    type:ADD_GASTO,
    gastos
});

export default eventoGastos;

