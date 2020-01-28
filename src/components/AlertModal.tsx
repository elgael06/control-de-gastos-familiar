import React, { useEffect } from 'react'
import {IonAlert } from '@ionic/react';

type ModalProps = {
    isOpen:boolean,
    header:string,
    onDidDismiss:()=>void,
    onAceptar:()=>void,
    onCancelar?:()=>void,
    message?:string
}

const AlertModal = ({isOpen,header,onAceptar,onDidDismiss,onCancelar,message}:ModalProps) => {

    const botones =[{
        text: 'aceptar',
        handler: onAceptar
      }];

    useEffect(() => {
        if(onCancelar)
           return

    }, []);

    return (<IonAlert
            isOpen={isOpen}
            onDidDismiss={onDidDismiss}
            message={message}
            header={header}
            buttons={botones}
        />);
}


export default AlertModal;

