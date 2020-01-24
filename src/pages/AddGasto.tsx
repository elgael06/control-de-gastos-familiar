import React, { useState, useEffect } from 'react';
import { 
    IonPage, 
    IonTitle, 
    IonContent,
    IonList, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonIcon, 
    IonTextarea, 
    IonFabButton, 
    IonCard, 
    IonItemDivider, 
    IonItemGroup 
} from '@ionic/react';
import { connect } from 'react-redux';
import { save } from 'ionicons/icons';
import ModalAgregar from '../components/ModalAgregar';
import { 
    selectAllGastos, 
    insertGastos, 
    selectClasificador, 
    selectAllTipo 
} from '../middleware/bd_gastos';
import { gastosProps } from '../props';
import ItemListGastos from '../components/ItemListGastos';
import ListAccess from '../components/ListAccess';
import ItemListSelect from '../components/ItemListSelect';
import HeadTitle from '../components/HeadTitle';


type addGastosProps ={
    gastos:[],
    setGastos:()=>void,
    saveGasto:(value:gastosProps,onError?:()=>void)=>Promise< string>,
}

const AddGasto =({gastos,setGastos,saveGasto}:addGastosProps)=>{
    const [cantidad,setCantidad] = useState('');
    const [IdTipo,setIdTipo] = useState('');
    const [idClasificacion,setIdClasificacion] = useState('');
    const [descripcion,setDescripcion] = useState(''); 
    const [modalTipo,setTipo] = useState(false);
    const [modalClasificador,setClasificador] = useState(false);
    const [total,setTotal] = useState(-1);

    const [clasificadores,setClasificadores] = useState([]);
    const [tipos,setTipos] = useState([]);
    
    useEffect(()=>{
        //eslint-disable-next-line
        selectAllGastos(setGastos);
        selectClasificador(setClasificadores);
        selectAllTipo(setTipos);
    },[]);

    useEffect(()=>{
        let res = 0;
         gastos.forEach((e:any)=>{ res +=e.cantidad});
        setTotal(res);
    },[gastos]);

    const guardarTipo =(value?:string)=>{
        console.log('guardar tipo...');
        !value || setIdTipo(value);
    }

    const guardarClasificador =(value?:string)=>{
        !value || setIdClasificacion(value);
    }

    const onGuardar = async()=>{

        let gastos:gastosProps = {
            cantidad:Number.parseInt( cantidad ),
            descripcion:descripcion,
            fecha:new Date().getTime().toString(),
            id_clasificacion:idClasificacion,
            id_usuario:'0',
            tipo_gasto:IdTipo,            
        };
       let resultado = await saveGasto(gastos);
       alert(`Gasto guardado en id ${resultado}`);
       
    } 

    const tipo_gasto =():string=>{

        return '';
    }
    const clasificacion_gasto =():string=>{

        return '';
    }

    return(<IonPage>
        <HeadTitle href='/home' title='Nuevo Gasto.' />
        <IonContent>
            <IonCard color='light' style={{padding:'15px',position:'sticky',top:10,zIndex:99 }}>
                <IonItem>
                    <IonLabel>Cantidad : $</IonLabel>
                    <IonInput 
                        type='number'
                        placeholder='0.00'
                        value={cantidad}
                        onIonChange={(e:any)=>setCantidad(e.target.value)}
                    />
                </IonItem>
                <ListAccess 
                    title='Tipo Gasto :'
                    value={tipo_gasto()}
                    event={()=>setTipo(true)}
                />
                <ListAccess 
                    title='Clasificacion :'
                    value={clasificacion_gasto()}
                    event={()=>setClasificador(true)}
                />
                <hr />
                <IonItemGroup>
                    <IonItem color='primary'>
                        <IonLabel>Descripcion </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonTextarea 
                            cols={5} placeholder='Sin Descripcion...'
                            value={descripcion}
                            onIonChange={(e:any)=>setDescripcion(e.target.value)}
                        />
                    </IonItem>
                </IonItemGroup>
            </IonCard>

            <IonItemDivider style={{padding:'25px',position:'fixed',marginTop:-15,zIndex:95 }}>
                <IonTitle> Total : <u style={{float:'right'}}>$ {new Intl.NumberFormat('MX').format(total)}</u></IonTitle>
            </IonItemDivider>

            <IonList>
                {gastos.map((e:any,id:number)=>(<ItemListGastos key={id} e={e} id={e.id} />))}
                {gastos.map((e:any,id)=>(<ItemListGastos key={id} e={e} id={e.id} />))}
                {gastos.map((e:any,id)=>(<ItemListGastos key={id} e={e} id={e.id} />))}
                {gastos.map((e:any,id)=>(<ItemListGastos key={id} e={e} id={e.id} />))}
            </IonList>

        </IonContent>
        
        <IonFabButton type='button' className='fab-icon' color='success'onClick={onGuardar} >
          <IonIcon icon={save} />
        </IonFabButton>

        <ModalAgregar
            status={modalTipo}
            evCerrar={()=>setTipo(false)}
            submin={guardarTipo}
            title='Agregar Tipo.'>
            {tipos.map((e:any,id)=><ItemListSelect e={e} descripcion={e.descripcion} key={id} />)}
        </ModalAgregar>

        <ModalAgregar
            status={modalClasificador}
            evCerrar={()=>setClasificador(false)}
            submin={guardarClasificador}
            title='Agregar Clasificador.'>
        </ModalAgregar>

        {clasificadores.map((e,id)=><ItemListSelect e={e} key={id} />)}

      </IonPage>);
}

const mapStateToProps = (state:any) =>({
    gastos:state.gastos
});

const mapDispatchToProps = (dispatch:any) =>({
    setGastos:()=>{
        selectAllGastos(dispatch);
    },
    async saveGasto(value:gastosProps,onError?:()=>void):Promise< string>{
        return await insertGastos(value,onError);
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(AddGasto);
