import './searchStyle.css';
import { FaSearch } from 'react-icons/fa';




export const Search = () => {    

  return (
    <>
        <section className='search'>
          <div className='container-search'>
                <input 
                    type='text'
                    placeholder='Buscar'
                />
                <button type='submit'>
                    <FaSearch className='icon'/>
                </button>    
            </div>
        </section>
    </>
  )
}
