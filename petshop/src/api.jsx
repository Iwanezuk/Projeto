import axios from 'axios';

// 1. exportar a instância da base
export const api = axios.create({
    baseURL: 'http://localhost:5000' // Endereço do Servidor Json
})

// 2. Função de busca genérica assíncrona
// Recebe a URL (ex: '/posts ou '/categorias) e
// um callback opcional para o sucesso.
export const busca = async (url,setDado) => {
    // A busca é feita a partir da instância da API
    const resposta = await api.get(url)

    // Atualiza o estado com os dados recebidos
    setDado(resposta.data)
}