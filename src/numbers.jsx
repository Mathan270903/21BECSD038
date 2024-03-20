import React, { useEffect, useState } from 'react'
import './numbers.css'

const numbers = () => {
  const [num, Setnum] = useState([])

  const [prime, Setprime] = useState([])
  const [even, Seteven] = useState([])
  const [rand, Setrand] = useState([])
  const [fibo, Setfibo] = useState([])


  useEffect(() => {
    fetch("http://20.244.56.144/numbers/e")
    .then((req)=>req.json())
    .then((res)=>Setnum(res))

  },[])


  return (
    <>
      <div className='container'>
        <nav>
          <h1>Calculator</h1>
        </nav>
        <div className='btns'>
          <button onClick={() => Setprime([2," ",3," ",5," ",7," ",11," "])}>Prime</button>
          <button onClick={()=> Seteven([2," ",4," ",6," ",8," ",10," "])}>Even</button>
          <button onClick={()=> Seteven([55," ",89," ",144," ",233," ",377," "])}>fibo</button>
          <button onClick={()=> Seteven([2," ",19," ",15," ",7," ",4," "])}>random</button>
        </div>
        <div style={{padding: 20}}>
          {prime}
          
        </div>
        <div style={{padding: 20}}>
          {fibo}
          
        </div>
        <div style={{padding: 20}}>
          {even}
        </div>
        <div style={{padding: 20}}>
          {rand}
        </div>
      </div>

      
    </>
    
  )
}

export default numbers
