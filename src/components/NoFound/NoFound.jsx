import { Link } from 'react-router-dom';
import './nofoundStyle.css';

export const NoFound = () => {
  return (
    <>
        <div className='container-nofound'>
          <h1>Oops!</h1>
          <p>Lo sentimos...</p>
          <h3>Error</h3>
          <h2>404</h2>
          <p>Página no encrontrada.</p>

          <button>
            <Link to='/#'>Volver </Link>
          </button>
        </div>
    </>
  )
}
