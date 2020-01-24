import React from 'react'
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';

const HeadTitle =({href='',title=''}:any)=>(<IonHeader>
    <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton defaultHref={href} />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
    </IonToolbar>
</IonHeader>);

export default HeadTitle;