import { Link } from 'react-router-dom';
import './nofoundStyle.css';

export const NoFound = () => {
  return (
    <>
        <div className='container-nofound'>
          <h1>Oops!</h1>
          <p>Lo sentimos... <br />Página no encrontrada.</p>

          <Link to='/#'>Volver </Link>
        </div>
    </>
  )
}
