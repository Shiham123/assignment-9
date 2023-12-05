import { createContext, useEffect, useState } from 'react';
import globalAuth from '../firebase/firebase.config';
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const [isLoading, seIstLoading] = useState(true);

  const createUserEmailPassword = (email, password) => {
    seIstLoading(true);
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const signEmailPassword = (email, password) => {
    seIstLoading(true);
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const logInGoogle = () => {
    seIstLoading(true);
    return signInWithPopup(globalAuth, googleProvider);
  };

  const facebookLogIn = () => {
    seIstLoading(true);
    return signInWithPopup(globalAuth, facebookProvider);
  };

  const githubLogIn = () => {
    seIstLoading(true);
    return signInWithPopup(globalAuth, githubProvider);
  };

  const profileUpdate = (displayName, photoURL) => {
    return updateProfile(globalAuth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const logOut = () => {
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      seIstLoading(false);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const info = {
    createUserEmailPassword,
    signEmailPassword,
    user,
    logInGoogle,
    facebookLogIn,
    githubLogIn,
    logOut,
    profileUpdate,
    isLoading,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
