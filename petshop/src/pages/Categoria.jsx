import '../assets/css/blog.css';
import ListaCategorias from '../components/ListaCategorias';

const Categoria = () => {
    return(
        <>
            <div className='container'>
                <h2 className='titulo-pagina'>Pet Notícias</h2>
            </div>
            <ListaCategorias />
        </>
    )
}

export default Categoria