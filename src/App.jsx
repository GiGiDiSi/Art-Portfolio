import './styles/App.css';
import './styles/HeadSideFoot.css';
import './styles/modal.css';
import './styles/Grid.css';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <Header /> 
      
      <Routes>
        <Route index path="/Originals" element={<Gallery works="Originals" />} />
        <Route path="/Fanarts" element={<Gallery works="FanArts" />} />
        <Route path="/Animation" element={<Gallery works="Animation" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
