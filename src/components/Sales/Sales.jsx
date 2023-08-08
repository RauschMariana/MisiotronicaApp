import { useState } from 'react';
import { Link } from 'react-router-dom';

import './salesStyle.css';
import { FaBars } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';

import { Search } from '../Search/Search';
import { SalesCard } from './SalesCard';


export const Sales = () => {

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
                    <Link to='/about'>Sobre Nosotros</Link>
                    <Link to='/contact'>Contacto</Link>
                  </div>
                </div> 
              )}
              <div className='menu-logo' >
                <img src={require('../../assets/mt.png')} alt='mt'/>
                <span className='name-title'>Misio<span className='menu-color'>T</span>rónica</span>
                <span className='icon-bag'><BsBag size={ 30 }/></span>  
              </div>   
            </header>
          </div>
        </section>

        <Search/>
        <SalesCard/>
    </>
  );
}
