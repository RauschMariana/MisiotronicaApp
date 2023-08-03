import { Link } from 'react-router-dom';
import './contactStyle.css';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BiSolidMap } from 'react-icons/bi';

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Contact = () => {
  return (
    <>  
        <div className='container'>
            <div className='social'>
                <Link to='/*'><FaFacebookF className='icon-social'/></Link>
                <Link to='/*'><FaTwitter className='icon-social' /></Link>
                <Link to='/*'><FaInstagram className='icon-social'/></Link>
                <Link to='/*'><FaYoutube className='icon-social'/></Link>  
            </div>
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
            
            <Link to='/#' className='back'>Volver </Link>              
        </div>
    
    </>
  )
}
