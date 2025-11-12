import './App.css';
import './assets/css/base/base.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Pagina404 from './pages/404';

function App() {
  return(
    <Router>
      <Routes>
        {/* Use element={Componente /} para renderizar */}
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='*' element={<Pagina404 />} />
      </Routes>

    </Router>
  )
}

export default App;
