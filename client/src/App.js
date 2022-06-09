
import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState('45')
  const [result, setResult] = useState('blah')

  const PORT = 5000
  const baseURL = 'http://localhost'

    const onSubmit = (e) => {
      e.preventDefault();
    console.log('send it')
    //axios.defaults.port = 5000;
    //axios.get(`${baseURL}:${PORT}/api/${data}`)
    axios.get(`${baseURL}:${PORT}/${data}`)
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
    <div className="App">
    <label>send</label>
      <textarea onChange={e => setData(e.target.value)}>{data}</textarea>
      <input onChange={e => setData(e.target.value)} value = {data}></input>
      <br/>
      <button onClick={onSubmit}>send data</button>

      <br/>
      <br/>
      <br></br>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
