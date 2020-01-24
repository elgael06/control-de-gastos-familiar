import React from 'react'
import ItemListGastos from './ItemListGastos';
import { IonItemSliding, IonItem, IonTitle } from '@ionic/react';
import SlidIonItem from './SlidIonItem';
import { checkmark, trash } from 'ionicons/icons';


const ItemListSelect =({id,descripcion}:any)=>{

    return(<IonItemSliding>
    <SlidIonItem 
        onClick={()=>{ console.log('Select...',id);} }
        side='start'
        icon={checkmark}
        color='primary'
    />
    
    <IonItem>
    <IonTitle>{descripcion}</IonTitle>
    </IonItem>

    <SlidIonItem 
        onClick={()=>{ console.log('Borrar...',id);} }
        side='end'
        icon={trash}
        color='danger'
    />
</IonItemSliding>);
}

export default ItemListSelect;