import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('')

  return (
    <>
      <div className="container">
        <form>
          <h1>Rizz page</h1>
          <h2>namaste fine shyt 🙏</h2>

          <label>username</label>
          <input 
            type="text" 
            placeholder='You have a name or should i call you mine?' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <br />

          <label>Email</label>
          <input 
            type="text" 
            placeholder='Leemee slide into your mail' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <br />

          <label>password</label>
          <input 
            type="text" 
            placeholder='Dw bbg your password is safe with me' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <br />

          <label>Phone number</label>
          <input 
            type="text" 
            placeholder='Drop your digits bbg 😉' 
          />
          <br />

          <button type='submit'>login</button>
        </form>
      </div>
    </>
  )
}

export default App
