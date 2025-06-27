import { useState } from "react";

export default function InputDesp ({onAddDesp}){
    const [nome, setNome] = useState = ('')
    const [valor, setValor] = useState = ('')

    const addClasse = () => {
        const fixo = document.getElementById("fixo")
        const variavel = document.getElementById("variavel")
        const classe = document.getElementById("classeid")
        let marcado = false

        fixo.addEventListener("change", () =>{
            if (this.checked && marcado == false) {
                classe.classList.add("fixo")
                marcado = true
              } else {
                classe.classList.remove("fixo")
                marcado = false
              }
        })

        variavel.addEventListener("change", () =>{
            if (this.checked && marcado == false) {
                classe.classList.add("variavel")
                marcado = true
              } else {
                classe.classList.remove("variavel")
                marcado = false
              }
        })
    }

    const addNome = () => {
        if(nome.trim()){
            onAddDesp(nome)
            setNome('')
        }
    }

    const addValor = () => {
        if(valor.trim()){
            onAddDesp(valor)
            setValor('')
        }
    }

    return(
        <div>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />

            <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor" />

            <input type="checkbox" id="fixo" name="fixo"/>
            <label htmlFor="fixo">Fixo</label>
            <input type="checkbox" id="variavel" name="variavel" />
            <label htmlFor="variavel">Variavel</label>

            <div id="classeid" className=""></div>

            <button onClick={(addNome)(addValor)(addClasse)}>Concluir</button>
        </div>
    )
}