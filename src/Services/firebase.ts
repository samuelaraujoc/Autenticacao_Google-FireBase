import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC0_K_maz5FChR98dWZ7WBlm0dz-0BBKio",
  authDomain: "autenticacao-636bf.firebaseapp.com",
  projectId: "autenticacao-636bf",
  storageBucket: "autenticacao-636bf.appspot.com",
  messagingSenderId: "741189692851",
  appId: "1:741189692851:web:582101ba7b507c8e2eefc6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
