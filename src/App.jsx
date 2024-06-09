import { useState } from 'react'
import logo from '../images/logo.svg'
import dashboard from '../images/illustration-dashboard.png'
import Footer from './Footer'


function App() {
  const [error, setError] = useState()
  const [type, setType] = useState('')

  const handleOnChange = (e) =>{
    const inputItem = e.target.value;
    setType(inputItem)
    
  }

  const onSubmit = ()=>{
    if(type == ''){
      setError('please provide your email')
    }
  }

  return (
    <>
    <div>
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>We are launching <span>soon!</span></h1>
        <p>Subscribe and get notified</p>
      </div>
      <div className="submit">
        <div>
          <input type="text"
          placeholder='your email address...'
          onChange={(e)=>handleOnChange(e)}
           />
           <div>
             <p style={{color:'red',
              fontStyle:'italic',
              fontSize: '.8rem',
              marginTop: '5px'
             }}>{error}
             </p>
           </div>
        </div>
         <div>
          <button className='btn' onClick={onSubmit}>Notify Me</button>
          </div>
      </div>
      <div className="dashboard">
      <img src={dashboard} alt="dashboard-image" />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default App
