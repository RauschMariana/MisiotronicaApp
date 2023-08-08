import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbarStyle.css';
import { 
    FaTimes, 
    FaBars, 
    FaFacebookF, 
    FaTwitter, 
    FaInstagram, 
    FaYoutube 
} from 'react-icons/fa';



export const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive');
    }

  return (
    
       <>   
           
            <div className='navContainer'>
                <div className='menu-logo' >
                    <img src={require('../../assets/mt.png')} alt='mt'/>
                    <span className='name-title'>Misio<span className='menu-color'>T</span>rónica</span>
                </div>
                <nav className='menu-nav' ref={navRef}>
                    <Link to='/about'>Sobre Nosotros</Link>
                    <Link to='/sales'>Ventas</Link>
                    <Link to='/contact'>Contacto</Link>
                    <button 
                        className='navBtn navCloseBtn' 
                        onClick={ showNavbar }
                    >
                        <FaTimes/>
                    </button>  
                </nav>
                <div className='social'>
                    <Link to='/*'><FaFacebookF className='icon-social'/></Link>
                    <Link to='/*'><FaTwitter className='icon-social' /></Link>
                    <Link to='/*'><FaInstagram className='icon-social'/></Link>
                    <Link to='/*'><FaYoutube className='icon-social'/></Link>  
                </div>   
        
                <button className='navBtn' onClick={ showNavbar }>
                    <FaBars />
                </button>
            </div>
        
       </> 
  )
}
