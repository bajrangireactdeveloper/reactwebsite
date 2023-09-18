import './App.css';
import Home from './components/Navbar/Home';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Navbar/Services';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='services' element={<Services/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
     )
}

export default App;
