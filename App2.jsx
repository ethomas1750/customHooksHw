import {useEffect} from 'react'
import "./App.css"
import CustomHooksUsingObjects from './common/hooks/customObjHooks'

function App2() {
    const username = CustomHooksUsingObjects('')
    const email = CustomHooksUsingObjects('')
    const password = CustomHooksUsingObjects('')

    useEffect(()=>{
        console.log('componentDidMount')
    }, [])

    function handleOnSubmit = (e) =>{
        e.preventDefault()
        username.showValue()
        email.showValue()
        password.showValue()
        username.greetUser()
        username.clearInput()
        email.clearInput()
        password.clearInput()
        
    }

  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' value={username.value} onChange={username.onChange}/>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' value={email.value} onChange={email.onChange}/>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={password.value} onChange={password.onChange}/>
            <button type='submit' id='submit'>Submit</button>
        </form>
    </div>
  )
}

export default App2
