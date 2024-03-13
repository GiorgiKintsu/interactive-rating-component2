import { useState } from 'react'
import './App.css'
import Rate from './assets/components/Rate'
import Result from './assets/components/Result'



function App() {
  const[submit, setSubmit] = useState(false);
  const[rate, setRate] = useState();

  return (
    <div className='mainWrapper'>
      {submit ? <Result rate={rate}/> : <Rate rate={rate} setRate={setRate} setSubmit={setSubmit}/>}
    </div>
  )
}

export default App
