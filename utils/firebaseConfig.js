import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB2lu8tJ64Z63F5ocMGbujotSGlOaaNUyM',
  authDomain: 'kodemia-koders-ranking.firebaseapp.com',
  projectId: 'kodemia-koders-ranking',
  storageBucket: 'kodemia-koders-ranking.appspot.com',
  messagingSenderId: '65938462000',
  appId: '1:65938462000:web:df1b638c5076e31626e4f5',
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Exportar instancia de la base de datos
export const database = firebase.database();
