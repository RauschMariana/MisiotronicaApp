import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { NoFound } from './components/NoFound/NoFound';
import { Sales } from './components/Sales/Sales';




export const MisiotronicaApp = () => {
    return (
        <>  
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/sales' element={<Sales />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/*' element={<NoFound />} />
                </Routes>
            </BrowserRouter>
        </>
    
    )
}