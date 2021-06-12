import "../Components/index.css"

function Título(props){
    const textoCapsLock = props.titulo
    const novoTitulo = textoCapsLock.toUpperCase()
    return (
        <h1 className="texto">{novoTitulo}</h1> //a classe utilizada aqui foi um exemplo feito para o css
    )
}

export default Título