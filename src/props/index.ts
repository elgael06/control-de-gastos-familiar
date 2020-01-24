
export type sesionProps ={
    uid:string,
    displayName:string,
    email:string,
    foto:string,
    credential:object
}
export type sesionActions = {
    type:string,
    sesion?:sesionProps,
}
export type gastosProps ={
    descripcion:string,
    tipo_gasto:string,
    cantidad:number,
    fecha:string,
    id_usuario:string,
    id_clasificacion:string
}
export type gastosActions = {
    type:string,
    gastos:Array<gastosProps>
}
export type modalActions = {
    type:string,
    estatus:boolean
}
export type loadingActions ={
    type:string,
    status:boolean
}