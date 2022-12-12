import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../Page/About';
import Error from '../Page/Error';
import Portfolio from '../Page/portfolio';
import Menu from '../component/Menu';
import Contact from '../Page/Contact';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/Portfolio' element={<Portfolio/>}></Route>

                <Route path='/' element={<Menu/>}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers;