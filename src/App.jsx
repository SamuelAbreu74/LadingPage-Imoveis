import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Jardins from './Pages/JardinsPage';
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JardinsPage.jsx" element={<Jardins />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
