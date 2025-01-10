import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from './../../Firebace/Firebace.init';
import useAxiospublic from '../../Hooks/useAxiospublic';
 export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  const [user,setuser]=useState()
  const[loading,setloading] =useState(true)
  const axiosPublic= useAxiospublic()
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
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post('/jwt', userInfo)
        .then(res => {
          if (res.data.token) {
              localStorage.setItem('access-token', res.data.token);
              console.log(localStorage.getItem('access-token'))
          }
      })
}
else {
  // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
  localStorage.removeItem('access-token');
}
    setloading(false)
  })
  return ()=>{
      unsubscribe()
  }
  },[])
  const signoutUser = ()=>{
    
    signOut(auth)
    .then(()=>{
       
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
      loading,
      signoutUser,

    }
    return (
      <AuthContext.Provider value={authinfo}>
        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;