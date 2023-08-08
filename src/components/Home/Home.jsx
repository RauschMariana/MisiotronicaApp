import './homeStyle.css';
import { Navbar } from '../Nabvar/Navbar';

export const Home = () => {

    
  return (
    <>
        <Navbar/>
        <div className='header'>
          <div className='header-container'>
            <h1>Misio<span className='menu-color'>T</span>rónica</h1>
            <p>El mejor lugar para encotrar tus herramientas y elementos de electrónica</p>
          </div>
      </div>
    </>
  )
}

