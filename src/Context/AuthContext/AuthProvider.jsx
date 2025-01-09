import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from './../../Firebace/Firebace.init';
 export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  const [user,setuser]=useState()
  const provider = new GoogleAuthProvider();
  const fbprovider = new FacebookAuthProvider();
  const gitprovider = new GithubAuthProvider();

  const googlelogin = ()=>{
    return signInWithPopup(auth,provider)
  }
  const fblogin = ()=>{
    return signInWithPopup(auth,fbprovider)
  }
  const gitlogin = ()=>{
    return signInWithPopup(auth,gitprovider)
  }
  const signupUser = ( email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signinUser = ( email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const updateuser = (profile)=>{
    return updateProfile(auth.currentUser,profile)

  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
           
      setuser(currentUser)
  })
  return ()=>{
      unsubscribe()
  }
  },[])
  const signoutUser = ()=>{
    
    signOut(auth)
    .then(()=>{
        alert('logout')   
    })
    .catch(error=> console.log(error))
}
    const authinfo = {
      googlelogin,
      fblogin,
      gitlogin,
      signupUser,
      signinUser,
      signoutUser,
      updateuser,
      user,

    }
    return (
      <AuthContext.Provider value={authinfo}>
        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;