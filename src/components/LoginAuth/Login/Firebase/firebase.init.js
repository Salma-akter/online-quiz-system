import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const initialization =()=>{
   return initializeApp(firebaseConfig);
}

export default initialization;