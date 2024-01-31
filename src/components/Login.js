import React, {  useRef, useState } from 'react'
import Header from './Header'
import { validation } from '../utils/validation'
import {  createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { IMAGE_URL } from '../utils/constants';

// import validation from "../utils/validation"

const Login = () => {
  const dispatch = useDispatch()
  const [singIn,setSignIn] = useState(true)
  const [validationError,setvalidationError] = useState(null)
  const email = useRef(null) //provides refrence to email field from input comp
  const password = useRef(null)
  const name = useRef(null)

  const handleClick =  () => {
    setSignIn(!singIn)

  }
  const handleClickButton = async () =>{
    // console.log(email,password);
    const errorMsg  = validation(email.current.value,password.current.value,name?.current?.value)
    setvalidationError(errorMsg)
    if(!errorMsg){
      if(!singIn){

          // const auth = getAuth();
          const userCredential = await createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            try{
              // const auth = getAuth();
              updateProfile(auth.currentUser, {
                displayName: name?.current?.value, photoURL: IMAGE_URL
              }).then(() => {
                const {email,uid,displayName,photoURL} = auth.currentUser
                dispatch(addUser({email:email,uid:uid,displayName:displayName,photoURL:photoURL}))
                // Profile updated!
                // ...
              }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setvalidationError(errorCode + "-" + errorMessage)

                // An error occurred
                // ...
              });


              // Signed up 
              // const user = userCredential.user;
      
              // ...
            }
            catch(error){
              const errorCode = error.code;
              const errorMessage = error.message;
              setvalidationError(errorCode + "-" + errorMessage)
            }
      }
      else{
        const userCredential = await signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          try{
            // Signed in
            // const user = userCredential.user;
          }
          catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            setvalidationError(errorCode + "-" + errorMessage)

          }
      }
    }

  }
 
  return (
    <div >
        <Header/>
        <div className='absolute '>
            <img src= 'https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg' alt="backgroundimg"/>
        </div>
        <form onSubmit={(e)=>{
          e.preventDefault()
        }} className='absolute w-3/12 my-36 mx-auto left-0 right-0 bg-black p-12 text-white bg-opacity-80'>
            <h1 className='font-extrabold mb-1 pl-1'>{singIn ? "Sign In": "Sign Up"}</h1>
            {!singIn && <input ref={name} type='text' placeholder='Name' className='p-2 m-2 w-full bg-gray-700'></input>}
            <input ref={email} type='text' placeholder='Email Adress' className='p-2 m-2 w-full bg-gray-700'></input>
            <input ref={password} type='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700'></input>
            <p className='pl-2 text-red-600'>{validationError}</p>
            <button onClick={handleClickButton} className='bg-red-600 w-full h-9 ml-2 mt-3'>Submit</button>
            <p className='m-2 cursor-pointer' onClick={handleClick}>{singIn ? "New To Netflix? Sign Up" : "Already Registered! Sign In"}</p>
        </form>
    </div>
  )
}

export default Login