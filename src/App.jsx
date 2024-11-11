import React,{ useState } from 'react'
import "./index.css"

function App() {
  
  let URL = "https://dummyjson.com/quotes"
  
  let [data, setData] = useState(undefined)

  const fData = async()=>{
    let data = await fetch(URL)
    let response = await data.json()    
    setData(response)
  }
  // console.log(data?.quotes);

  
  return (
    <div className='app'>
        <div className="quoteBox">
          <p>
            {data? data.quotes[Math.floor(Math.random()*data.quotes.length)].quote  : "NO QUOTE RIGHT NOW"}
          </p>
          <button onClick={fData}>Generate</button>
        </div>
    </div>
  )
}

export default App
