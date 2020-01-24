import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFabButton
  } from '@ionic/react';
import { calendar, analytics, briefcase, arrowForward,filing, add } from 'ionicons/icons';
import './Home.css';

import {sesionProps} from '../props';
import { connect } from 'react-redux';
import TopCartPresent from '../components/TopCartPresent';

const tiposGastos =[
  {
    icon:calendar,
    title:'Monitor de gastos al dia.',
    href:'/gastos/dia'
  },
  {
    icon:analytics,
    title:'Analisis de gastos.',
    href:'/gastos/analisis'
  },
  {
    icon:filing,
    title:'Tipo de gastos.',
    href:'TipoGasto'
  },
  {
    icon:briefcase,
    title:'Clasificaciones de gastos.',
    href:'Clasificacion'
  }
];

type homeProps ={
  usuario?:sesionProps,
  stateModal:boolean,
}

const HomePage = ({usuario,stateModal}:homeProps) => {

  console.log('usuario: ',usuario);
  console.log('state Modal : ',stateModal);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
       <TopCartPresent />
        <IonList style={{marginTop:'-4px'}} lines="inset">
          {tiposGastos.map(e=>(
            <ItemMonitor 
              key={e.href}
              icon={e.icon}
              title={e.title}
            />)
          )
          }
        </IonList>
        <IonFabButton 
          className='fab-icon'
          type='button'
          routerLink='/gastos/add' >
          <IonIcon icon={add} />
        </IonFabButton>
      </IonContent>
    </IonPage>
  );
};

const ItemMonitor =({icon,title}:any)=>( <IonItem>
  <IonIcon icon={icon} slot='start' />
  <IonListHeader slot='end'><IonLabel>{title}</IonLabel></IonListHeader>
  <IonIcon icon={arrowForward}  slot='end'/>
</IonItem>);

const mapStateToProps = (state:any) =>({
  usuario:state.sesion,
  stateModal:state.modal
});

const mapDispatchToProps = (dispatch:any) =>({

});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
