
import React from 'react';
import { 
  IonApp, 
  IonHeader, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonIcon 
} from '@ionic/react';
import { connect } from 'react-redux';
import { logoGoogle } from 'ionicons/icons';
import { iniciarSesion } from '../middleware/manejo_sesion';
import TopCartPresent from '../components/TopCartPresent';

type LoginProps ={
    evSesion:()=>void,
}

const Login =({evSesion}:LoginProps)=>{
    return (<IonApp>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Iniciar sesion en CDGF.</IonTitle>
        </IonToolbar>
      </IonHeader>
      <TopCartPresent/>
      <IonContent >
        <IonButton onClick={evSesion} 
            expand='full'
            shape="round" 
            style={{diplay:'flex',margin:'15px',marginTop:'20%' }}>
            <IonIcon icon={logoGoogle} slot='start' size='large' />
            Usar cuenta google.
        </IonButton>
      </IonContent>
    </IonApp> );
}
const mapStateToProps = (state:any) =>({

  });
  
  const mapDispatchToProps = (dispatch:any) =>({
    evSesion(){
        console.log('iniciar sesion...');
        iniciarSesion(dispatch);
    }
  });

export default connect(mapStateToProps,mapDispatchToProps)(Login);
