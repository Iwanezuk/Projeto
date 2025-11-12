import { useParams } from "react-router-dom";
import ListaPost from "../components/ListaPost";

const CategoriaPosts = () => {
    // Captura o parâmetro :id da URL (que vem da rota pai)
    const { id } = useParams();

    return(
        // Render do ListaPost com a URL filtrada pela categoria
        < ListaPost url={`/posts?categoria=${id}`} />
    )
}

export default CategoriaPosts;