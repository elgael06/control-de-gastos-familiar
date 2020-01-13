

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let firebaseConfig ={
    apiKey: "AIzaSyAEILC-j8DrL9ZLHF7cus6efwSmnc743vY",
    authDomain: "control-de-gastos-familiar.firebaseapp.com",
    databaseURL: "https://control-de-gastos-familiar.firebaseio.com",
    projectId: "control-de-gastos-familiar",
    storageBucket: "control-de-gastos-familiar.appspot.com",
    messagingSenderId: "253649112458",
    appId: "1:253649112458:web:a388ea4902e20bbf468c73",
    measurementId: "G-9G9RZEE01K"
  };



firebase.initializeApp(firebaseConfig);

export const iniciarSesionGoogle = async () => {
    try{
        let provider = new firebase.auth.GoogleAuthProvider();
        let usuario:any = await firebase.auth().signInWithPopup(provider);
        if(usuario){
            const {user, credential} = usuario;
            const res = {
                uid:user.uid,
                displayName:user.displayName,
                email:user.email,
                foto:user.photoURL,
                credential
            }
            return res;
        }
    }
    catch(error) {

    }

    return null;
}

export const cerrarSesionGogle = async ()=>{
    await firebase.auth().signOut()
}

export default firebase;
