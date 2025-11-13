import './assets/css/base/base.css';
import './assets/css/post.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Pagina404 from './pages/Pagina404';
import Cabecalho from './components/cabecalho';
import Post from './pages/Post';
import Categoria from './pages/Categoria';
import CategoriaPosts from './pages/CategoriaPosts';
import SubCategoria from './pages/SubCategorias';
import Admin from './pages/admin/Admin';
import FormCategoria from './pages/admin/components/FormCategoria';
import CatAdmin from './pages/admin/CatAdmin';
import FormSubCategoria from './pages/admin/components/FormSubCategoria';
import AdminLayout from './pages/admin/AdminLayout';
import PostAdmin from './pages/PostAdmin';
 
 
function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        {/* Use element={Componente /} para renderizar */}
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/sobre' element={<Sobre />} />
       
        <Route path='/admin/' element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path='novacategoria' element={<FormCategoria />} />
          <Route path=':id' element={<FormCategoria />} />
          <Route path='categoria/:id' element={<CatAdmin />} />
          <Route path='sub/:id' element={<FormSubCategoria />} />
          <Route path="posts" element={<PostAdmin />} />
        </Route>
 
        {/*
          Esta é a rota pai. Ela renderiza o <Categoria />
        */}
        <Route path='/categoria/:id' element={<Categoria />}>
 
          {/* Esta é a rota "filho" de índice (index).
              Ela é renderizada dentro do <Outlet> quando a URL
              é exatamente /categoria/:id
            */}
          <Route index element={<CategoriaPosts />} />
 
          {/* Esta é a rota "filho" da subcategoria.
              Ela é renderizada dentro do <Outlet> quando a URL
              é /categoria/:id/:subcategoria
            */}
          <Route path=':subcategoria' element={<SubCategoria />} />
 
        </Route>
 
        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </Router>
  )
}
 
export default App