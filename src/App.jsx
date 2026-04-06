import './styles/App.css';
import './styles/HeadSideFoot.css';
import './styles/modal.css';
import './styles/Grid.css';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/Art-Portfolio"> 
      <Header /> 

      <Routes>
        <Route index element={<Gallery works="Originals" />} />
        <Route path="/Originals" element={<Gallery works="Originals" />} />
        <Route path="/Fanarts" element={<Gallery works="FanArts" />} />
        <Route path="/Animation" element={<Gallery works="Animation" />} />
      </Routes>

      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
