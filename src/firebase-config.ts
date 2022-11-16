import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAXTZ8mpr3Sow2B9uYHd3_SQlJulCdT1dQ',

  authDomain: 'cartproject-c4f65.firebaseapp.com',

  projectId: 'cartproject-c4f65',

  storageBucket: 'cartproject-c4f65.appspot.com',

  messagingSenderId: '52018745236',

  appId: '1:52018745236:web:55db8e30f84297d7938981',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
