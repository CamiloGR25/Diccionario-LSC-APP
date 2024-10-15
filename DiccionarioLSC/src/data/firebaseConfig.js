import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyCLMadKOFSabgyT1I7sz_9CaQHP8RQZEhA",
    authDomain: "diccionario-lsc-d3537.firebaseapp.com",
    projectId: "diccionario-lsc-d3537",
    storageBucket: "diccionario-lsc-d3537.appspot.com",
    messagingSenderId: "966014986292",
    appId: "1:966014986292:web:0b0213eaa7ac1acdc3c261"

};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };