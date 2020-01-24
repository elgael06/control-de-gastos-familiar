import React from 'react'
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';



const TopCartPresent =()=>( <IonCard className="welcome-card">
<img src="https://miro.medium.com/max/902/1*CPSTzfUTCCpUbllyiPvl_A.jpeg" alt=""/>
<IonCardHeader>
  <IonCardSubtitle>Estadisticas de uso.</IonCardSubtitle>
  <IonCardTitle>Contro de gastos</IonCardTitle>
</IonCardHeader>
<IonCardContent>
  <p>
    Esta aplicacion te ayudara a llevar el control de tus finanzas a detalle de forma rapida y facil.
    con un par de pasos llevaras el control de tus gastos.
  </p>
</IonCardContent>
</IonCard>);

export default TopCartPresent;