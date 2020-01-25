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
    IonItemGroup, 
    IonPicker
} from '@ionic/react';
import { connect } from 'react-redux';
import { save } from 'ionicons/icons';
import { 
    selectAllGastos, 
    insertGastos, 
} from '../middleware/bd_gastos';
import { gastosProps } from '../props';
import ItemListGastos from '../components/ItemListGastos';
import ListAccess from '../components/ListAccess';
import HeadTitle from '../components/HeadTitle';

import './Home.css'

type addGastosProps ={
    gastos:[],
    setGastos:()=>void,
    saveGasto:(value:gastosProps,onError?:()=>void)=>Promise< string>,
}

const defaultclassTipo = ({text:'',value:''});

const AddGasto =({gastos,setGastos,saveGasto}:addGastosProps)=>{
    const [cantidad,setCantidad] = useState('');
    const [IdTipo,setIdTipo] = useState(defaultclassTipo);
    const [idClasificacion,setIdClasificacion] = useState(defaultclassTipo);
    const [descripcion,setDescripcion] = useState(''); 
    const [modalTipo,setTipo] = useState(false);
    const [total,setTotal] = useState(-1);

    useEffect(()=>{
        //eslint-disable-next-line
        initGastos();
    },[]);

    useEffect(()=>{
        let res = 0;
         gastos.forEach((e:any)=>{ res += parseFloat(e.cantidad) || 0});
        setTotal(res);
    },[gastos]);

    const initGastos = ()=>{
        selectAllGastos(setGastos);
    }

    const handlePicker =(value?:any)=>{
        !value ||guardarClasificadorTipo(value);
    }

    const guardarClasificadorTipo =({tipo='',clasificacion=''}:any)=>{
        console.log('clasificacion = ',clasificacion)
        setIdClasificacion(clasificacion);
        console.log('tipo = ',tipo);
        setIdTipo(tipo);
    }

    const onGuardar = async()=>{

        let gastos:gastosProps = {
            cantidad:Number.parseFloat( cantidad ),
            descripcion:descripcion || `${idClasificacion?.value} ${IdTipo?.value}.`,
            fecha:new Date().getTime().toString(),
            id_clasificacion:idClasificacion?.value,
            id_usuario:'0',
            tipo_gasto:IdTipo?.value,            
        };
       let resultado = await saveGasto(gastos);
       //alert(`Gasto guardado en id ${resultado}`);

       setCantidad('');
       setIdTipo(defaultclassTipo);
       setIdClasificacion(defaultclassTipo);
       setDescripcion('');
    } 
    const botonesPicker = [
        { text:'cancelar',handler(){console.log('cancelar...')},role:'calcel' },
        { text:'seleccionar', handler:(value:any)=>handlePicker(value) }
    ]

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
                    value={IdTipo?.text}
                    event={()=>setTipo(true)}
                />
                <ListAccess 
                    title='Clasificacion :'
                    value={idClasificacion?.text}
                    event={()=>setTipo(true)}
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

            <IonList>
                {gastos.map((e:any,id:number)=>(<ItemListGastos key={id} e={e} id={e.id} />))}
            </IonList>

            <IonItemDivider style={{padding:'25px',zIndex:95 }}>
                <IonTitle> Total : <u >$ {new Intl.NumberFormat('MX').format(total)}</u></IonTitle>
            </IonItemDivider>

        </IonContent>

        <IonFabButton type='button' className='fab-icon' color='success'onClick={onGuardar} >
            <IonIcon icon={save} />
        </IonFabButton>

        <IonPicker
        buttons={botonesPicker}
            columns={[
                {
                    name:"tipo",
                    options:[
                        {text:"Tipo.",value:'indefinido'},
                        {text:"Personal.",value:'personal'},
                        {text:"Entretenimiento.",value:'entretenimiento'},
                        {text:"Deuda.",value:'deuda'}
                    ]
                },
                {
                    name:"clasificacion",
                    options:[
                        {text:"Clasificacion.",value:'indefinida'},
                        {text:"Casa.",value:'casa'},
                        {text:"Dulces.",value:'dulces'},
                        {text:"Bebidas.",value:'bebida'},
                        {text:"Comida.",value:'comida'}
                    ]
                }
            ]}
            isOpen={modalTipo}
            onDidDismiss={()=>setTipo(false)}
        />

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
