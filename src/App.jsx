import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pg/Home';
import About from './pg/About';
import Contact from './pg/Contact';
import Nav from './pg/Nav';

function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
