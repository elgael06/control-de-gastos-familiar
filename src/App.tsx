import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';
import { home, list } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { connect } from 'react-redux';
import { sesionProps } from './props';
import { cerrarSesion } from './middleware/manejo_sesion';

/* rutas */
import Menu          from './components/Menu';
import Home          from './pages/Home';
import List          from './pages/List';
import Login         from './pages/Login';
import PageNotFound  from './pages/PageNotFound';
import AddGasto      from './pages/AddGasto';

const appPages: AppPage[] = [
  {
    title: 'inicio',
    url: '/',
    icon: home
  },
  {
    title: 'List',
    url: '/list',
    icon: list
  }
];

type appProps ={
  usuario?:sesionProps,
  onClose:()=>void,
  loading:boolean
}

const App = ({usuario,onClose,loading}:appProps) => {

  const Inicio =()=>(<Fragment>
    <Menu appPages={appPages} usuario={usuario} onClose={onClose} />
    <IonRouterOutlet id="main" color='success'>
        
        <Redirect from='/login' to='/home' />
  
        <Route path="/" component={Home} exact={true} />
        <Route path="/home" component={Home} exact={true} />
        <Route path="/gastos/add" component={AddGasto} exact={true} />
        <Route path="/list" component={List} exact={true} />
        <Route path='*' component={PageNotFound} />
        
    </IonRouterOutlet>
  </Fragment>);

  const Sesion= () =>(<IonRouterOutlet id='main'>
    <Redirect from='/*' to='/login' />
    <Route path="/login" component={Login} exact={true} />
  </IonRouterOutlet>); 

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
            {usuario ? <Inicio /> : <Sesion />}
        </IonSplitPane>
      </IonReactRouter>
      <IonLoading
        isOpen={loading}
        message={'cargando...'}
      />
    </IonApp>
  );
}

const mapStateToProps = (state:any) =>{
  console.log('state => ',state)
  return({
  usuario:state.sesion,
  loading:state.loading
})};

const mapDispatchToProps = (dispatch:any) =>({
  onClose(){
    console.log('salir');
    cerrarSesion(dispatch);
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
