import { useEffect, useState } from "react";
import { busca } from "../../../api";
import { Link } from "react-router-dom";
import "../components/tabela.css";
import { Button } from "@mui/material";

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
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{ marginTop: 1 }}
                                // usa o sistem de estilização Sx
                                >
                                    Nova Categoria
                                </Button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categorias.map((categoria) => (
                            <tr key={categoria.id}>
                                <td className="tabela__coluna--m">
                                    <Link
                                        to={`/categoria/${categoria.id}`}
                                    >
                                        {categoria.nome}
                                    </Link>
                                </td>
                                <td
                                    colSpan="2"
                                    className="tabela__coluna--p tabela__alinhamento--direita"
                                >
                                    {/* Botão EDITAR */}
                                    <Link
                                        to="/admin"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button
                                            type="button"
                                            variant="contained"
                                            color="warning"
                                            // Cor MUI para Alerta/Atenção
                                        >
                                            Editar
                                        </Button>
                                    </Link>
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
