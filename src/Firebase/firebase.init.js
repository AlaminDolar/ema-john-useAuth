import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const intialiceAuthentication =()=>{
    initializeApp(firebaseConfig);
}


export default intialiceAuthentication;