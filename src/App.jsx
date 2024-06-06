import logo from '../images/logo.svg'


function App() {

  return (
    <>
    <div>
      <img src={logo} alt="logo" />
      <h1>We are launching <span>soon!</span></h1>
      <p>Subscribe and get notified</p>
      <div className="submit">
        <input type="text"
        placeholder='your email addressn'
         />
         <button className='btn'>Notify Me</button>
      </div>
    </div>
    </>
  )
}

export default App
