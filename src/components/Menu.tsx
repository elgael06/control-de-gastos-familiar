import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';
import { logOut } from 'ionicons/icons';
import { sesionProps } from '../props';

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[],
  usuario?:sesionProps,
  onClose:()=>void,
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages,usuario,onClose }) => (
  <IonMenu contentId="main" type="overlay">
    <IonHeader>
      <IonToolbar>
        <img  src={usuario?.foto} height='45' slot='start' alt='foto' style={{margin:'5px'}} />
        <IonTitle>{usuario?.displayName}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem routerLink={appPage.url} routerDirection="none">
                <IonIcon slot="start" icon={appPage.icon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      </IonList>
    </IonContent>

    <IonItem color='danger' onClick={onClose}>
        <IonIcon icon={logOut} />
        <IonTitle>Salir.</IonTitle>
      </IonItem>
  </IonMenu>
);

export default withRouter(Menu);
