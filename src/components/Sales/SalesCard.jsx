import React from 'react';
import { productData } from '../../data/productData';
import { productImage } from '../../helpers/productImage';
import { Link } from 'react-router-dom';


export const SalesCard = () => {
     

    return (
        <div className='products'>
            {
                productData.map(( product ) => (
                    <div key={ product.id } className='container-products'>
                        <figure>
                            <img  
                                src={ productImage(`./${ product.id }.png`) } 
                                alt={ product.name }
                            />
                        </figure>
                        <div>
                            <h5 > { product.title } </h5>
                            <p className='atribute'> 
                                { product.description } 
                                <br /> 
                                ${ product.price } 
                            </p>
                        </div>
                        <div className='btn-link'>
                            <Link 
                                    onClick={() => console.log( product )}
                                >
                                    Comprar
                                </Link>
                        </div>
                        <br />
                        <div className='btn-link'>
                            
                            <Link 
                                onClick={() => console.log( product )}
                            >
                                + Agregar compra
                            </Link>
                            <br />
                            <Link 
                                onClick={() => console.log( product )}
                            >
                               - Quitar compra
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}
