import { useParams } from 'react-router-dom'; 
import '../assets/css/blog.css';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';

const Categoria = () => {
    // Captura o 'id' da categoria (ex: "bem-estar", "comportamento")
    const { id } = useParams();

    return(
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            
            <ListaCategorias />
            
            {/*
              Renderiza o ListaPost diretamente.
              Passamos a URL de busca filtrada para a API (JSON Server).
              Ex: /posts?categoria=bem-estar
            */}
            <ListaPost url={`/posts?categoria=${id}`} />
        </>
    )
}

export default Categoria;
