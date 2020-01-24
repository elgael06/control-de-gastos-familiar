import React from 'react';
import { IonItemSliding, IonItem, IonIcon } from '@ionic/react';
import SlidIonItem from './SlidIonItem';
import { create, list, trash } from 'ionicons/icons';


const ItemListGastos = ({e,id}:any)=>(<IonItemSliding onDropCapture={()=>console.log('blur...')}>
    <SlidIonItem 
        onClick={()=>{ console.log('editar...',id);} }
        side='start'
        icon={create}
        color='success'
    />

    <IonItem>
        <IonIcon slot='start' icon={list} />
        {e.descripcion}
        <p slot='end'>$ {e.cantidad}</p>
    </IonItem>

    <SlidIonItem 
        onClick={()=>{ console.log('borrar...',id);  } }
        side='end'
        icon={trash}
        color='danger'
    />
</IonItemSliding>);

export default ItemListGastos;