import logo from './logo.svg';
import './App.css';

import {useState,useEffect} from 'react'


function App() {

  const [data,setData]=useState("")
  
  useEffect(() => {
    const getData = async()=>{
      const dataFromServer = await pullData()
      setData(JSON.stringify(await dataFromServer,null,"\t"))
      
    }
    getData()

  }, [])

  const pullData = async ()=>{
    const res =await fetch('http://localhost:5000/api/latest',{methods:'GET'})
    console.log('fetched')
    const b = await res.json()
    console.log(await b)
    return( await b)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hacker News Top 10 🔥 Posts JSON</h1>
        <pre style={{ textAlign: "left", fontSize:'1vw'}}>{data}</pre>
          
        </header>
      <footer style={{ padding:'20px'}}>
        By Yiheng Chen
      </footer>
    </div>
  );
}

export default App;
