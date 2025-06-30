import Despesa from "./Despesa"

function ListaDesp({despesas, remover}){
    return (
        <>
        <ul>
            {despesas.map((despesa) => 
                <Despesa
                    nomeDespesa={despesa}
                    onRemover={remover}
                />
            )}
        </ul>
        </>
    )
}

export default ListaDesp