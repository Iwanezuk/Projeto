import { useEffect, useState } from "react";
import { busca } from "../../../api";
import { Link } from "react-router-dom";
import "../components/tabela.css";

const ListaCatAdmin = () => {
    const [categorias, setCategorias] = useState([])
    
    useEffect(() => {
        busca(`/categorias`, setCategorias)
    }, [])

    return (
        // O return será construído no próximo passo
        <></>
    )
}

export default ListaCatAdmin
