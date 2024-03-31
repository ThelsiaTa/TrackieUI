import React from 'react'
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);  
  return (
    <div className='flex justify-between px-4 pt-4'>
        {user && (
          <h2>Welcome Back, {user.displayName}</h2>
        )}
    </div>
  )
}

export default Header