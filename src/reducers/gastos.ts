import { gastosProps, gastosActions } from "../props";
import { ADD_GASTO, REMOVE_GASTO } from "../types";

const gastos = (state:Array<gastosProps>,actions:gastosActions) => {
    switch (actions.type){
        case ADD_GASTO:
            return actions.gastos;
        case REMOVE_GASTO:
            return state;
        default:return state|| [];
    }
}

export default gastos;