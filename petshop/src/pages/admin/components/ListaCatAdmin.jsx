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
        <section className="container">
            <table className="tabela">
                <thead>
                    <tr>
                        <th className="tabela__coluna--g">Categoria</th>
                        <th colSpan="3" className="tabela__coluna--p tabela__alinhamento--direita">
                            <Link to="/admin/NovaCategoria">
                                Nova Categoria
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categorias.map((categoria) => (
                            <tr key={categoria.id}>
                                <td className="tabela__coluna--m">
                                    <Link to={`/categoria/${categoria.id}`}>{categoria.nome}</Link>
                                </td>
                                <td colSpan="2" className="tabela__coluna--p tabela__alinhamento--direita">
                                    {/* Botão EDITAR */}

                                    {/* Botão EXCLUIR */}

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default ListaCatAdmin
