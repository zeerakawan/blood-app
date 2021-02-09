import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBMhG_x4G1mSFO4_C9abTyOC0iY4vvT3_E",
  authDomain: "fir-todoapp-73a06.firebaseapp.com",
  databaseURL: "https://fir-todoapp-73a06-default-rtdb.firebaseio.com",
  projectId: "fir-todoapp-73a06",
  storageBucket: "fir-todoapp-73a06.appspot.com",
  messagingSenderId: "748436478087",
  appId: "1:748436478087:web:fb1e0e980d96f47cbec022"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };