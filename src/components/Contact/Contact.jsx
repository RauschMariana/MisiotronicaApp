import { Link } from 'react-router-dom';
import './contactStyle.css';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BiSolidMap } from 'react-icons/bi';

import { FaBars,FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';

export const Contact = () => {
  const [ show, setShow ] = useState( false );

    const showMenu = () => {
       setShow( !show );
    };
  return (
    <>  
        <div className='container'>
            <section className='start'>
              <div className='container-section'>
                <header>
                  <div className='menu-btn' onClick={ showMenu }>
                    <FaBars />
                  </div>
                  {show && (
                    <div id='menu-nav'>
                      <div className='container-links'>
                        <Link to='/'>Inicio</Link>
                        <Link to='/about'>Sobre Nosotros</Link>
                        <Link to='/sales'>Ventas</Link>
                      </div>
                    </div> 
                  )}
                  <div className='menu-logo' >
                    <img src={require('../../assets/mt.png')} alt='mt'/>
                    <span className='name-title'>Misio<span className='menu-color'>T</span>rónica</span>
                    <span className='social'>
                        <Link to='/*'><FaFacebookF className='icon-social'/></Link>
                        <Link to='/*'><FaTwitter className='icon-social' /></Link>
                        <Link to='/*'><FaInstagram className='icon-social'/></Link>
                        <Link to='/*'><FaYoutube className='icon-social'/></Link>  
                    </span>
                  </div>
                </header>
              </div>
            </section>
            <h2>Contáctanos</h2>
            <div className='contact'>
                <Link to='#'><BsFillTelephoneFill className='icon'/> 123-456-789</Link>
                <Link to='#'><MdEmail className='icon'/> misiotronica@email.com</Link>
                <Link to='#'><BiSolidMap className='icon'/> Misiones, Argentina</Link>
            </div>

            <form action='#' autoComplete='off'>
              <input 
                className='input'
                type='text' 
                name='name' 
                placeholder='Ingrese su nombre'
              />
              <input
                className='input' 
                type='email' 
                name='email' 
                placeholder='Ingrese su correo'
              />
              <textarea 
                name='menssege' 
                rows='20' 
                placeholder='Ingrese su mensaje'
              ></textarea>
              <input
                className='btn' 
                type='submit' 
                name='submit' 
                value='Envíar mensaje'
              />
            </form>  
            <br />     
        </div>
    
    </>
  )
}
