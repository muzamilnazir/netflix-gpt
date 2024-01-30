import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        navigate('/browse')
  
        // ...
      } else {
        navigate('/')
        // User is signed out
        // ...
      }
    });
  },[])
 
  const user = useSelector((store)=> store?.user)
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // dispatch(removeUser())
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });

  }
  return (
    
        <div className='absolute py-2 px-8  bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
          <div> <img
          className='w-44' 
          src= {LOGO_URL} alt='logo'/>
          </div>
          <div className='flex'>
          <img className='w-10 h-9 mt-5 mr-4 rounded-xl' src={user?.photoURL} alt=''/>
          <button onClick={handleSignOut} className='bg-black text-white rounded-lg mt-5 h-9 w-16'>Sign Out</button>
          </div>
         </div>
          
    
    

    
  )
}

export default Header