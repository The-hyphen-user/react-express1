import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const LogIn = () => {


  const [email, setEmail] = useState('asd123f4@hj.com')
  const [username, setUsername] = useState('asdasffghj')
  const [password, setPassword] = useState('passsdfgh')
  const [result, setResult] = useState('result')



  const PORT = 5000
  const baseURL = 'http://localhost'
  const extensionURL = '/api/user'



  const onSubmitOld = (e) => {
    e.preventDefault();
    console.log('logging in')
    axios({
      method: 'get',
      url: `${baseURL}:${PORT}${extensionURL}/login`,
      headers: {},
      data: {
        email: 'bacon@store.com',
        username: 'asd',
        password: 'pass123'
      }
    })
      .then(res => {
        console.log(res.data)
      })

  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('logging in account: ', { email, username, password })
    axios.post(`${baseURL}:${PORT}${extensionURL}/login`, { email, password })
      .then(res => {
        console.log(res.data)
        if (res.status === 400) {
          setResult('Invalid credentials')
          console.log('error 400')
        } else if (res.status === 200) {

          setResult('logged in')
        }
        console.log(res)
      }).catch(err => console.log("api Erorr: ", err.message), setResult('failed login'))
  }


  const onCreate = (e) => {
    e.preventDefault();
    console.log('creating account', { email, username, password })
    if (!email || !username || !password) {
      setResult('missing field')
    } else {
      axios.post(`${baseURL}:${PORT}${extensionURL}/add`, { email, username, password })
        .then(res => {
          //console.log(res.data)
          if (res.status === 400) {
            console.log('dup error')
            setResult('duplicate username')
          }
          console.log(res)
        })
    }
  }

  return (
    <div>

      <label>Email</label>
      <input onChange={e => setEmail(e.target.value, setResult(''))} value={email}></input>
      <br />
      <label>Username</label>
      <input onChange={e => setUsername(e.target.value, setResult(''))} value={username}></input>
      <br />
      <label>Password</label>
      <input onChange={e => setPassword(e.target.value, setResult(''))} value={password}></input>
      <br />
      <button onClick={onSubmit}>Log In</button>
      <br />
      <button onClick={onCreate}>Create Account</button>
      <br />
      <h1>{result}</h1>




    </div>
  )
}

export default LogIn