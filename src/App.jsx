import { Routes, Route } from 'react-router-dom';
import Main from './Component/Main/Main';
import About from './Component/About/About';
import About2 from './Component/About 2/About2';
import Contact from './Component/Contact/Contact';
import Expereince from './Component/Expereince/Experience';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route path='/' element={<About/>}></Route>
        <Route path='/about' element={<About2/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/experience' element={<Expereince/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
