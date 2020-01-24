import { START_LOADING } from "../types";
import { loadingActions } from "../props";


const loading =(state=false,actions:loadingActions)=>{
    switch(actions.type){
        case START_LOADING:
            return actions.status;
        default: return state;
    }
}

export default loading;