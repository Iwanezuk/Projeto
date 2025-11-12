import { useParams } from "react-router-dom";
import ListaPost from "../components/ListaPost";

const SubCategoria = () => {
    // Cpatura o parâmetro :subcategoria da URL
    const { subcategoria } = useParams();

    return(
        // Render do ListPost com a URL filtrada pela Subcategoria
        < ListaPost url={`/posts?subcategoria=${subcategoria}`} />
    )
}

export default SubCategoria;