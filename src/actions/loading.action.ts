import { loadingActions } from "../props";
import { START_LOADING } from "../types";

const changeLoading = (status:boolean):loadingActions => {
    console.log(`change status: ${status}`);
    return({
        type:START_LOADING,
        status,
    });
}

export default changeLoading;