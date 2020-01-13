
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
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonButton onClick={evSesion} 
            expand='full'
            shape="round" 
            style={{diplay:'flex',margin:'15px',marginTop:'20%' }}>
            <IonIcon icon={logoGoogle} slot='start' size='large' />
            Iniciar sesion con google.
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
