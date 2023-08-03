import { Link } from 'react-router-dom';
import { productData } from '../../data/productData';
import './salesStyle.css';


export const Sales = () => {
  return (
    <>
       <div className='container-product'>
            { productData.map( (product, i) => (
                <div key={ i.id } className='product'>
                    <img src={ product.imgUrl } alt={ product.name } />
                    <div>
                        <p>
                            { product.title }  <br />
                            { product.description } <br />
                            ${ product.price }
                        </p>
                    </div>
                    <button onClick={() => console.log( product )}>Agregar al carrito</button>
                </div>
            ))}
            <br />
            <Link to='/#'>Volver </Link>
              
        </div>

  
        
    </>
  );
}
