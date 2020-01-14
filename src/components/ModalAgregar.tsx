import React from 'react';
import { IonModal, IonContent, IonButton, IonIcon, IonTitle, IonHeader, IonToolbar, IonList } from '@ionic/react';

import { close, send } from 'ionicons/icons';

type ModalAgregarProps ={
    status:boolean,
    evCerrar:()=>void,
    submin:()=>void,
    title:string,
    children:any
}

const ModalAgregar =({evCerrar,status,title,children,submin}:ModalAgregarProps)=>{

    const BtnCerrar =()=>(
        <IonButton slot='start' color='danger' style={{margin:'auto'}} onClick={evCerrar}> 
            <IonIcon icon={close}/>
            cerrar
        </IonButton>);

    const BtnGuardar =()=>(
        <IonButton onClick={submin} slot='end' style={{margin:'auto'}}>
            <IonIcon icon={send} slot='start' />
            Guardar
        </IonButton>);

    return(
        <IonModal
            isOpen={status}
            onDidDismiss={evCerrar}
        >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonList style={{padding:'15px' }}>
                    {children}
                </IonList>
            </IonContent>
            <div  style={{display:'flex',margin:'10px'}}>
                <BtnCerrar />
                <BtnGuardar />
            </div>
        </IonModal>
    );
}

export default ModalAgregar;


