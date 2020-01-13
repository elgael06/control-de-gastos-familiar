import * as React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonIcon } from '@ionic/react';
import { warning } from 'ionicons/icons';


  const PageNotFound:React.FC = ()=>(<IonPage>
    <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/home" />
      </IonButtons>
        <IonTitle>Error !!!</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <hr />
      <div  style={{textAlign:'center',color:'red',marginTop:50}}><IonIcon icon={warning} /> esta pagina no existe!!!</div>
    </IonContent>
    </IonPage>);

  export default PageNotFound;
