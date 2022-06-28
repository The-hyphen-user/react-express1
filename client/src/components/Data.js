import React from 'react'
import {useState} from 'react'
import axios from 'axios'

const Data = () => {

    const [data, setData] = useState('45')
    const [result, setResult] = useState('data to recive from server')
  
    const PORT = 5000
    const baseURL = 'http://localhost'
    const extensionURL = '/api/data'
  
      const onSubmit = (e) => {
        e.preventDefault();
      console.log('send it')
      //axios.defaults.port = 5000;
      //axios.get(`${baseURL}:${PORT}/api/${data}`)
      axios.post(`${baseURL}:${PORT}${extensionURL}/${data}`)
      //.then(res => setResult(res.json))
      .then(res => {
        const response = res.data;
        setResult(response)
        //console.log(response)
      })
        // .then(res => {
        //   console.log(res.data)
        // })
      
      }

      const onPost = (e) => {
        e.preventDefault();
      console.log('send it')
      axios.post(`${baseURL}:${PORT}/post/data/`, {data})
      //.then(res => setResult(res.json))
      .then(res => {
        const response = res.data;
        setResult(response)
        //console.log(response)
      })
        // .then(res => {
        //   console.log(res.data)
        // })
      
      }





  return (
    <div>
    <label>send</label>
      <input onChange={e => setData(e.target.value)} value = {data}></input>
      <br/>
      <button onClick={onSubmit}>send data</button>
      <button onClick={onPost}>post data</button>

      <br/>
      <br/>
      <br></br>
      <h1>{result}</h1>





    </div>
  )
}

export default Data

//<textarea onChange={e => setData(e.target.value)}>{data}</textarea>