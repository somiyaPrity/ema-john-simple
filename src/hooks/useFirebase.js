import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState();
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result.user);
    });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
