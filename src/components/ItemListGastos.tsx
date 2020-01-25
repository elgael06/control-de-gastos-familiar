import React from 'react';
import { IonItemSliding, IonItem, IonIcon } from '@ionic/react';
import SlidIonItem from './SlidIonItem';
import { create, trash, cash } from 'ionicons/icons';
import { DeleteGasto } from '../middleware/bd_gastos';


const ItemListGastos = ({e,id}:any)=>(<IonItemSliding onDropCapture={()=>console.log('blur...')}>
    <SlidIonItem 
        onClick={()=>{ console.log('editar...',id);} }
        side='start'
        icon={create}
        color='success'
    />

    <IonItem>
        <IonIcon slot='start' icon={cash} />
        {e.descripcion}
        <p slot='end'>$ {e.cantidad}</p>
    </IonItem>

    <SlidIonItem 
        onClick={()=>{ 
                console.log('borrar...',id);
                DeleteGasto(id);
            }
        }
        side='end'
        icon={trash}
        color='danger'
    />
</IonItemSliding>);

export default ItemListGastos;