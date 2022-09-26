import { useRef, useState } from 'react'
import { signup, login, logout, useAuth } from '../firebase-util'
import './Signup.css'

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [ loading, setLoading ] = useState(false)
  const currentUser = useAuth()
  
  async function handleSignup(){
    setLoading(true)
   try{ await signup(emailRef.current.value, passwordRef.current.value)
   } catch {
    alert("Error!")
   }
   setLoading(false)
  }

  async function handleLogin(){
    setLoading(true)
   try{ await login(emailRef.current.value, passwordRef.current.value)
   } catch {
    alert("Error!")
   }
   setLoading(false)
  }

  async function handleLogOut(){
    setLoading(true)
    try{
      await logout()
    } catch{
      alert("Error!")
    }
    setLoading(false)
  }

  return (
    <div className='signup-page-container'>

      <div>Currenrtly logged in as: { currentUser?.email }</div>
      <div id="fields">
        <input ref={emailRef} placeholder='email'/>
        <input ref={passwordRef} type="password" placeholder='password'/>
      </div>
      <button disabled={loading || currentUser } onClick={handleSignup}>Sign Up</button>
      <button disabled={loading || currentUser } onClick={handleLogin}>Log In</button>
      <button disaabled={loading || !currentUser } onClick={handleLogOut}>Log Out</button>
    </div>

  )
}

export default Signup