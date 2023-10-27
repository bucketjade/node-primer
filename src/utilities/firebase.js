// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, connectDatabaseEmulator, onValue, ref, update} from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';
import { getAuth, connectAuthEmulator, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithCredential, signOut } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_1T8hdQtbppxdX-fLCLQfqPa9T1EXY_M",
  authDomain: "node-primer.firebaseapp.com",
  databaseURL: "https://node-primer.firebaseio.com",
  projectId: "node-primer",
  storageBucket: "node-primer.appspot.com",
  messagingSenderId: "665743648563",
  appId: "1:665743648563:web:6d190e82ee0e67e3f50046"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
const auth = getAuth(firebase);

if (process.env.REACT_APP_EMULATE) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

  signInWithCredential(auth, GoogleAuthProvider.credential(
    '{"sub": "eifJU2mLQx89KlSCOGRpB9t8Bcja", "email": "tester314159@gmail.com", "displayName":"Test User", "email_verified": true}'
  ));
}


// if (!window.EMULATION && import.meta.env.NODE_ENV !== 'production') {
//   connectAuthEmulator(auth, "http://127.0.0.1:9099");
//   connectDatabaseEmulator(database, "127.0.0.1", 9000);

//   signInWithCredential(auth, GoogleAuthProvider.credential(
//     '{"sub": "eifJU2mLQx89KlSCOGRpB9t8Bcja", "email": "tester314159@gmail.com", "displayName":"Test User", "email_verified": true}'
//   ));
  
//   // set flag to avoid connecting twice, e.g., because of an editor hot-reload
//   window.EMULATION = true;
// }

// Database functions
export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

// Authorization functions
export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ), []);

  return [user];
};