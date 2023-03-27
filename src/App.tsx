import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {getUUID} from 'mojang-minecraft-api';

import axios from 'axios'

function App() {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState<any>(null)


  const handleChange = (e: any) => {
    error && setError('')
    message && setMessage(null)
    setUsername(e.target.value);
  }

  const handleSubmit = async () => {
    if (username) {
      const res = await axios.get(`https://api.ashcon.app/mojang/v2/user/${username}`)
      // const res = await getUUID(username);
      res.status === 404 ? setError('This user does not exists') : setMessage(res.data)
    } else {
      setError('Please enter a username');
    }

  }

  return (
    <div className="App">
      {console.log('error: ', error)}
      {console.log('message: ', message)}
      <h1 className='top-0 bg-[green]'>Minecraft assignment</h1>
        <input type="text" onChange={handleChange} className="w-full h-10"/>
        <p>{message?.uuid && 'This is a valid user'}</p>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        {/* <p>{error}</p> */}
        <h6>Users</h6>
        <p></p>
    </div>
  )
}

export default App
