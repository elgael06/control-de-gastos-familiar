import React, { Fragment } from 'react'
import { IonItem, IonLabel, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';


type ListAccessProps ={
    event?:()=>void,
    title:string,
    value?:string
}

const ListAccess=({title,event,value}:ListAccessProps)=>(<Fragment>
    <IonItem onClick={event} >
        <IonLabel>{title}</IonLabel>
        <IonLabel color='secondary'>{value}</IonLabel>
        <IonIcon icon={add} size='large' slot='end' color='primary' />
    </IonItem>
</Fragment>);


export default ListAccess;