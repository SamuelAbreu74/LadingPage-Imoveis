import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Campanha1 from './Pages/Campanha1';
import Campanha2 from './Pages/Campanha2';
import Campanha3 from './Pages/Campanha3';
import Campanha4 from './Pages/Campanha4';
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Campanha1" element={<Campanha1 />}/>
          <Route path="/Campanha2" element={<Campanha2 />}/>
          <Route path="/Campanha3" element={<Campanha3 />}/>
          <Route path="/Campanha4" element={<Campanha4 />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
