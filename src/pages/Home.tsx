import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
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
import { calendar, analytics,calculator, briefcase, arrowForward,filing, add } from 'ionicons/icons';
import React from 'react';
import './Home.css';

import {sesionProps} from '../props';
import { connect } from 'react-redux';
import { eventoModal } from '../actions';

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
  evModal:(state:boolean)=>void,
}

const HomePage = ({usuario,stateModal,evModal}:homeProps) => {

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
        <IonTitle>
          <IonIcon icon={calculator} slot='end' /> 
         <strong> Gastos</strong>
        </IonTitle>
        <IonList lines="inset">
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
          type='button'
          onClick={()=>evModal(true)}
          style={{float:'right',margin:'5px',position:'sticky',button:'0px'}} >
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



const mapStateToProps = (state:any) =>({
  usuario:state.sesion,
  stateModal:state.modal
});

const mapDispatchToProps = (dispatch:any) =>({
  evModal(state:boolean){
      dispatch(eventoModal(state));
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
