

export const fechaHoyToTime =()=>{
    const date = new Date();
    const hoy = new Date(`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`).getTime();

    return(hoy);
}