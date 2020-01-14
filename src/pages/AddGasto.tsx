import React, { Fragment, useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton, IonList, IonItem, IonLabel, IonInput, IonIcon, IonTextarea, IonFabButton, IonCard, IonItemSliding, IonItemDivider, IonItemOption, IonItemOptions } from '@ionic/react';
import { connect } from 'react-redux';
import { add,save, list, create, trash } from 'ionicons/icons';
import ModalAgregar from '../components/ModalAgregar';
import { selectAllGastos, insertGastos } from '../middleware/bd_gastos';
import { gastosProps } from '../props';

type ListAccessProps ={
    event?:()=>void,
    title:string,
    value?:string
}

type addGastosProps ={
    gastos:[],
    setGastos:()=>void,
    saveGasto:(value:gastosProps,onError?:()=>void)=>Promise< string>,
}

const AddGasto =({gastos,setGastos,saveGasto}:addGastosProps)=>{
    const [modalTipo,setTipo] = useState(false);
    const [modalClasificador,setClasificador] = useState(false);
    const [total,setTotal] = useState(-1);

    useEffect(()=>{
        selectAllGastos(setGastos);
    },[]);
    useEffect(()=>{
        let res = 0;
         gastos.forEach((e:any)=>{ res +=e.cantidad});
        setTotal(res);
    },[gastos]);

    const guardarTipo =()=>{
        
    }

    const onGuardar = async()=>{
        let gastos:gastosProps = {
            cantidad:21.35,
            descripcion:'',
            fecha:'',
            id_clasificacion:'0',
            id_usuario:'0',
            tipo_gasto:'0',            
        };
       let resultado = await saveGasto(gastos);
       alert(`Gasto guardado en id ${resultado}`);
    } 

    return(  <IonPage>

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>Nuevo Gasto.</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent>
            <IonCard style={{padding:'15px' }}>
                    <IonItem>
                        <IonLabel>Cantidad : $</IonLabel>
                        <IonInput 
                            type='number'
                            placeholder='0.00'
                        />
                    </IonItem>
                    <ListAccess 
                        title='Tipo Gasto :'
                        value='123r'
                        event={()=>setTipo(true)}
                    />
                    <ListAccess 
                        title='Clasificacion :'
                        event={()=>setClasificador(true)}
                    />
                    <hr />
                    <IonLabel>Descripcion :</IonLabel>
                    <IonItem>
                        <IonTextarea placeholder='Sin Descripcion...' />
                    </IonItem>
                </IonCard>
                <br/>
                <IonItemDivider>
                <IonTitle> Total : <u style={{float:'right'}}>$ {new Intl.NumberFormat('MX').format(total)}</u></IonTitle>
                </IonItemDivider>
                <IonList>
                    {gastos.map((e:any,id)=>{
                        return (<ItemList key={id} e={e} id={id} />);
                    })}
                </IonList>
        </IonContent>
        
        <IonFabButton 
          type='button'
          color='success'
          onClick={onGuardar}
          style={{position:'fixed',display:'flex',bottom:'10px',right:'20px',zIndex:'9999'}} >
          <IonIcon icon={save} />
        </IonFabButton>

        <ModalAgregar
            status={modalTipo}
            evCerrar={()=>setTipo(false)}
            submin={guardarTipo}
            title='Agregar Tipo.'>

            </ModalAgregar>

            <ModalAgregar
                status={modalClasificador}
                evCerrar={()=>setClasificador(false)}
                submin={guardarTipo}
                title='Agregar Clasificador.'>

            </ModalAgregar>

      </IonPage>);
}


const ListAccess=({title,event,value}:ListAccessProps)=>(<Fragment>
    <IonItem onClick={event} >
        <IonLabel>{title}</IonLabel>
        <IonLabel color='secondary'>{value}</IonLabel>
        <IonIcon icon={add} size='large' slot='end' color='primary' />
    </IonItem>
</Fragment>);

const ItemList = ({e,id}:any)=>(<IonItemSliding onDropCapture={()=>console.log('blur...')}>
    <IonItemOptions onClick={()=>console.log('editar...')} side='start'>
        <IonItemOption>
            <IonIcon icon={create} />
        </IonItemOption>
    </IonItemOptions>
    <IonItem>
        <IonIcon slot='start' icon={list} />
        {e.descripcion}
        <p slot='end'>$ {e.cantidad}</p>
    </IonItem>

    <IonItemOptions onClick={()=>console.log('borrar...')} side='end'>
        <IonItemOption color='danger'>
            <IonIcon icon={trash} />
        </IonItemOption>
    </IonItemOptions>
</IonItemSliding>);


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
