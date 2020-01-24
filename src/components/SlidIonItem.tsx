
import React from 'react'
import { IonItemOptions, IonItemOption, IonIcon } from '@ionic/react';


const SlidIonItem =({onClick,side,color,icon}:any)=>(  <IonItemOptions 
    onClick={onClick} side={side}>
    <IonItemOption color={color}>
        <IonIcon icon={icon} />
    </IonItemOption>
</IonItemOptions>);

export default SlidIonItem;
