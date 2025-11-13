import { Button, TextField } from "@mui/material";

const FormCategoria = () => {
    
    return ( 
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="titulo-pagina">Cadastro de Categorias</h2>
                <br />
                <form >
                    <TextField
                        label="Categoria"
                        variant="filled"
                        fullWidth
                        required
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ marginTop: 1 }}
                        fullWidth
                    >
                        Cadastrar
                    </Button>
                </form>
            </article>
        </main>
     );
}
 
export default FormCategoria;
