import {useEffect, useState} from 'react'
import './App.css'
import CustomArrHooks from './common/Hooks/CustomArrHooks'


function App() {
  const [username, setUsername, greetUser, clearUsername, showUsername]= CustomArrHooks('')
  const [email, setEmail, , clearEmail, showEmail]=CustomArrHooks('')
  const [password, setPassword, , clearPassword, showPassword]=CustomArrHooks('')

  function handleOnSubmit(e){
    e.preventDefault()
    greetUser()
    showUsername()
    showEmail()
    showPassword()
    console.log(username, email, password)
    clearEmail()
    clearUsername()
    clearPassword()
  }



  return (
    <div className='App'>
      <form onSubmit={handleOnSubmit}>
      <label htmlFor='username'>Username</label>
        <input type='text' id='username' value={username} onChange={setUsername}/>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' value={email} onChange={setEmail} />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' value={password} onChange={setPassword} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
