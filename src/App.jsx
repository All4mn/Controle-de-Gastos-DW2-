import './App.css'
import InputDesp from './InputDesp'
import { useState } from 'react'
import ListaDesp from './ListaDesp'

function App() {
    
    const [arr_despesas, setDespesa] = useState([])
    
    const addDespesa = (nomeDsp, valorDsp) => {
        const novaDesp = {nomeDsp, valorDsp, id:Date.now()}
        setDespesa([...arr_despesas,novaDesp])
    }

    const removerDespesa = (id) =>{
        setDespesa(arr_despesas.filter((despesa)=> despesa.id !== id))
    }


    
    return(
        <div>
      <h1>Gerenciador de Despesas</h1>
      <InputDesp 
      onAddDesp={addDespesa}
      />
      <ListaDesp 
      despesas = {arr_despesas}
      onRemover={removerDespesa}/>
    </div>

    )
}

export default App
