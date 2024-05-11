function Evento({ numero }) {
    function meuEvento() {
        console.log(`Opa, fui ativado! numero: ${numero}`)
    }

    return(
        <div>
            <p>Clique para ativar o evento:</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento