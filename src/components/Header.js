import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { onGptButtonClick, onLanguageSelectClick } from '../utils/gptSlice';



const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // console.log("onstatechnge",user?.photoURL);
        // setloginIcon(user?.photoURL)
        const {email,uid,displayName,photoURL} = user
        dispatch(addUser({email:email,uid:uid,displayName:displayName,photoURL:photoURL}))

        navigate('/browse')
  
        // ...
      } else {
        dispatch(removeUser())
        navigate('/')
        // User is signed out
        // ...
      }
    });
  },[])
 
  const user = useSelector((store)=> store?.user)
  const gpt = useSelector((store)=> store.Gpt)

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // dispatch(removeUser())
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });

  }
  const handleGptButton = () =>{
    dispatch(onGptButtonClick())
  }
  const handleOnChange = (e) =>{
    dispatch(onLanguageSelectClick(e.target.value))
  }
  const gptSearchButtonStatus = useSelector(store => store?.Gpt)

  return (
    
        <div className='absolute py-2 px-8  bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
          <div> <img
          className='w-44' 
          src= {LOGO_URL} alt='logo'/>
          </div>
          <div className='flex'>
            {
              gptSearchButtonStatus?.gptSearch &&  <select onChange={handleOnChange} className='h-7 mt-6 mr-5' name="language" id="language">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
            </select>
            }
       
            <button onClick={handleGptButton} className='bg-purple-600 h-7  mt-6 mr-3 rounded-sm p-1'>{gpt?.gptSearch ? "homepage" : "GPT Search"}</button>
          <img className='w-10 h-9 mt-5 mr-4 rounded-xl' src={user?.photoURL} alt=''/>
          <button onClick={handleSignOut} className='bg-black text-white rounded-lg mt-5 h-9 w-16'>Sign Out</button>
          </div>
         </div>
          
    
    

    
  )
}

export default Header