import React, { useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbarStyle.css';
import { FaTimes, FaBars } from 'react-icons/fa';
import { GiCircuitry } from 'react-icons/gi';

export const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive')
    }

  return (
    
       <>
            <div className='navContainer'>
                <GiCircuitry size={20} />
                <span className='logo'>MT</span>
                <nav ref={navRef}>

                    <Link to='/'>Inicio</Link>
                    <Link to='/about'>Sobre Nosotros</Link>
                    <Link to='/sales'>Ventas</Link>
                    <Link to='/contact'>Contacto</Link>

                    <button className='navBtn navCloseBtn' onClick={ showNavbar }>
                        <FaTimes />
                    </button>  
                </nav>
                <button className='navBtn' onClick={ showNavbar }>
                    <FaBars />
                </button>
            </div>
            <Outlet/>
       </> 
  )
}
