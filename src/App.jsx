import './styles/App.css';
import './styles/HeadSideFoot.css';
import './styles/Grid.css';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter> 
      <Header /> 

      <Routes>
        <Route index element={<Gallery works="Originals" />} />
        <Route path="/Originals" element={<Gallery works="Originals" />} />
        <Route path="/Fanarts" element={<Gallery works="FanArts" />} />
        <Route path="/Animation" element={<Gallery works="Animation" />} />
      </Routes>

      <Footer /> 
    </HashRouter>
  );
}

export default App;
