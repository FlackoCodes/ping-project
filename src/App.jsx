import logo from '../images/logo.svg'
import dashboard from '../images/illustration-dashboard.png'
import Footer from './Footer'


function App() {

  return (
    <>
    <div>
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>We are launching <span>soon!</span></h1>
        <p>Subscribe and get notified</p>
      </div>
      <div className="submit">
        <input type="text"
        placeholder='your email address...'
         />
         <button className='btn'>Notify Me</button>
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
