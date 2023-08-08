import { useState } from 'react';
import { Link } from 'react-router-dom';

import './aboutStyle.css';
import { FaBars, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


export const About = () => {

    const [ show, setShow ] = useState( false );

    const showMenu = () => {
       setShow( !show );
    };

  return (
    <>
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
                    <Link to='/sales'>Ventas</Link>
                    <Link to='/contact'>Contacto</Link>
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

        <div className='container-about'>
          <h1>Sobre Nosotros</h1>
          <p>
            Somos una pequeña empresa que se dedica a la venta de 
            herramientas y elementos de electrónica como cables, 
            placas, baterías, luces y sensores. 
          </p>
        </div>
    </>
  )
}

