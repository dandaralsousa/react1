import livros from "../dados"

function Listalivros () {
    
	return (
	<div>
            {livros.map(livros =>{
                
                return(
                    <ul>
                        <li>{livros.id}</li>
                        <li>{livros.nome}</li>
                        <li>{livros.descricao}</li>
                        <li><img src={livros.imagem} alt={livros.nome}/></li>
                    </ul> 
                )
            })}
        </div>
	)
}

export default Listalivros