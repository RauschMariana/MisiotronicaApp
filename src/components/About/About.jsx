import { Link } from 'react-router-dom';
import './aboutStyle.css';

export const About = () => {
  return (
    <>
        <div className='container-about'>
          <h1>Sobre Nosotros</h1>
          <p>
            Somos una pequeña empresa que se dedica a la venta de 
            herramientas y elementos de electrónica como cables, 
            placas, baterías, luces y sensores. 
          </p>
          <Link to='/#'>Volver </Link>
        </div>
        
    </>
  )
}
