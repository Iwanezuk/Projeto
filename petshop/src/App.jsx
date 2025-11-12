import './assets/css/base/base.css';
import './assets/css/post.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Pagina404 from './pages/404';
import Cabecalho from './components/cabecalho';
import Post from './pages/Post';

function App() {
  return(
    <Router>
      <Cabecalho />
      <Routes>
        {/* Use element={Componente /} para renderizar */}
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='*' element={<Pagina404 />} />
      </Routes>

    </Router>
  )
}

export default App;
