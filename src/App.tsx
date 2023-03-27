import { useState } from 'react'
import './App.css'

import Users from './components/Users/Users'

import axios from 'axios'

function App() {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState<any>(null)
  const [users, setUsers] = useState([])


  const handleChange = (e: any) => {
    error && setError('')
    message && setMessage(null)
    setUsername(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username) {
      const alreadyExists =  users.filter((user) => user?.username.toUpperCase() == username.toUpperCase())
      if (alreadyExists.length) return setError(`${username} already exists!`);
      try {
        const res = await axios.get(`https://api.ashcon.app/mojang/v2/user/${username}`)
        const user = res.data;
        const avatar = await axios.get(`https://crafatar.com/avatars/${user?.uuid}`)
        user.avatar = avatar;
        setUsers([...users, user])
        setMessage(res.data)
      } catch (e) {
        setError('This user does not exists')
      }
    } else {
      setError('Please enter a username');
    }
  }

  const handleUserDelete = (user: Record<string, any>) => {
    console.log('user: ', user)
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
  }

  return (
    <div className="App">
      <div className="flex  justify-center gap-x-3">
        <img className='h-14 w-14' src={"https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png"}/>
        <h1 className='font-bold mb-10'>Minecraft assignment</h1>
      </div>

        <p>Search for a username to check if it is a valid user </p>
      <div className=" h-[24rem] text-center flex items-center justify-center">
        <form className='space-y-6 w-[35rem] border border-neutral-200 rounded-md p-10' onSubmit={handleSubmit}>
          <input className='w-full p-2' placeholder='Enter username here' type="text" onChange={handleChange}/>
          <button className='w-full' type="submit" onClick={handleSubmit}>Submit</button>
          <p className='text-green-500 font-bold'>{message?.uuid && 'This is a valid user'}</p>
          <p className='text-red-500 font-bold'>{error}</p>
        </form>
      </div>
        
        <Users users={users} onDelete={(user) => handleUserDelete(user)}/>
    </div>
  )
}

export default App
