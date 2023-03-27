import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Users from './components/Users/Users'
import ValidityCheckForm from './components/ValidityCheckForm/ValidityCheckForm'

import axios from 'axios'

function App() {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState<any>(null)
  const [users, setUsers] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    error && setError('')
    message && setMessage(null)
    setUsername(e.target.value);
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (username) {
      const alreadyExists =  users.filter((user) => user?.username.toUpperCase() == username.toUpperCase())
      if (alreadyExists.length) return setError(`${username} already exists!`);
      setIsLoading(true)
      try {
        const res = await axios.get(`https://api.ashcon.app/mojang/v2/user/${username}`)
        const user = res.data;
        user && setIsLoading(false);
        setUsers([...users, user])
        setMessage(res.data)
      } catch (e) {
        setError('This user does not exists')
        setIsLoading(false);
      }
    } else {
      setError('Please enter a username');
    }
  }

  const handleUserDelete = (user: Record<string, any>) => {
    error && setError('')
    message && setMessage(null)
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
  }

  return (
    <div className="App">
        <Header />

        <ValidityCheckForm 
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          isLoading={isLoading}
          message={message}
          error={error}
        />

        <Users users={users} onDelete={(user) => handleUserDelete(user)}/>
    </div>
  )
}

export default App
