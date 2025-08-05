import { useState } from 'react'

import {Link} from 'react-router-dom';
import './App.css'
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <div className="banner">
            <header className='header'>
              <h1 className='logotipo'>Bean Scene</h1>
              <nav className='nav-menu'>
                <Link className='links' to="/Home">Home</Link>
                <Link className='links' to="/Menu">Menu</Link>
                <Link className='links' to="/AboutUs">About Us</Link>
                <Link className='links' to="/ContactUs">Contact Us</Link>
              </nav>

              <div className='auth-wrapper'>
                <Link className='links' to="">Sign In</Link>
                <Button className="btn" title="Sign Up" />
              </div>
            </header>
            <div className='banner-text'> 
              <div>
                <p className='banner-text_main first'>We've got your morning covered with</p>
                <p id='banner-text_middle'>Coffee</p>
                <p className='banner-text_main last'>It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
              </div>
              <div className='btn-wrap'> 
                <Button className="btn" title="Order Now" />
              </div>
            </div>
        </div>

        </>
  )
}

export default App
